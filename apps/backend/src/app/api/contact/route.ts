import { Resend } from 'resend';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import {
  RATE_LIMIT,
  CONTACT_FORM,
  ERROR_MESSAGES,
  EMAIL_TEMPLATE,
  HTTP_HEADERS,
  DEFAULT_IP,
} from '../utils/constants';

// Initialize Resend only if API key is provided
const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

// Initialize rate limiter (only if Redis credentials are provided)
let ratelimit: Ratelimit | null = null;
if (
  process.env.UPSTASH_REDIS_REST_URL &&
  process.env.UPSTASH_REDIS_REST_TOKEN &&
  process.env.UPSTASH_REDIS_REST_URL.startsWith('https://')
) {
  const redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
  });

  ratelimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(RATE_LIMIT.REQUESTS, RATE_LIMIT.WINDOW),
    analytics: true,
    prefix: RATE_LIMIT.PREFIX,
  });
}

// Validation schema
const contactFormSchema = z.object({
  name: z.string().min(1).max(CONTACT_FORM.MAX_NAME_LENGTH),
  email: z.string().email().max(CONTACT_FORM.MAX_EMAIL_LENGTH),
  message: z.string().min(1).max(CONTACT_FORM.MAX_MESSAGE_LENGTH),
});

export async function POST(request: NextRequest) {
  try {
    // Get IP address for rate limiting
    const ip =
      request.headers.get(HTTP_HEADERS.X_FORWARDED_FOR)?.split(',')[0] ||
      request.headers.get(HTTP_HEADERS.X_REAL_IP) ||
      DEFAULT_IP;

    // Apply rate limiting if configured
    if (ratelimit) {
      const { success, limit, reset, remaining } = await ratelimit.limit(ip);

      if (!success) {
        return NextResponse.json(
          {
            error: ERROR_MESSAGES.TOO_MANY_REQUESTS,
            limit,
            reset: new Date(reset).toISOString(),
            remaining,
          },
          {
            status: 429,
            headers: {
              [HTTP_HEADERS.X_RATE_LIMIT_LIMIT]: limit.toString(),
              [HTTP_HEADERS.X_RATE_LIMIT_REMAINING]: remaining.toString(),
              [HTTP_HEADERS.X_RATE_LIMIT_RESET]: reset.toString(),
            },
          }
        );
      }
    }

    // Parse and validate request body
    const body = await request.json();
    const validatedData = contactFormSchema.parse(body);

    // Check if Resend is configured
    if (!resend) {
      console.error('Resend API key not configured');
      return NextResponse.json(
        {
          error: ERROR_MESSAGES.EMAIL_SERVICE_NOT_CONFIGURED,
        },
        { status: 503 }
      );
    }

    // Send email via Resend
    const resendClient = resend; // Type narrowing for TypeScript
    const recipientEmail =
      process.env.CONTACT_FORM_RECIPIENT_EMAIL ||
      CONTACT_FORM.DEFAULT_RECIPIENT;

    const { data, error } = await resendClient.emails.send({
      from: process.env.RESEND_FROM_EMAIL || CONTACT_FORM.DEFAULT_FROM,
      to: recipientEmail,
      subject: EMAIL_TEMPLATE.SUBJECT(validatedData.name),
      replyTo: validatedData.email,
      html: EMAIL_TEMPLATE.HTML(
        validatedData.name,
        validatedData.email,
        validatedData.message
      ),
      text: EMAIL_TEMPLATE.TEXT(
        validatedData.name,
        validatedData.email,
        validatedData.message
      ),
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: ERROR_MESSAGES.SEND_EMAIL_FAILED },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, messageId: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: ERROR_MESSAGES.INVALID_FORM_DATA, details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: ERROR_MESSAGES.UNEXPECTED_ERROR },
      { status: 500 }
    );
  }
}
