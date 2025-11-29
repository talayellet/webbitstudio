export const RATE_LIMIT = {
  REQUESTS: 3,
  WINDOW: '1 h',
  PREFIX: '@upstash/ratelimit',
} as const;

export const CONTACT_FORM = {
  MAX_NAME_LENGTH: 100,
  MAX_EMAIL_LENGTH: 255,
  MAX_MESSAGE_LENGTH: 1000,
  DEFAULT_RECIPIENT: 'info@webbitstudio.com',
  DEFAULT_FROM: 'onboarding@resend.dev',
  FOOTER_TEXT: 'This email was sent from the contact form on webbitstudio.com',
} as const;

export const ERROR_MESSAGES = {
  TOO_MANY_REQUESTS: 'Too many requests. Please try again later.',
  EMAIL_SERVICE_NOT_CONFIGURED:
    'Email service not configured. Please contact the administrator.',
  SEND_EMAIL_FAILED: 'Failed to send email. Please try again later.',
  INVALID_FORM_DATA: 'Invalid form data',
  UNEXPECTED_ERROR: 'An unexpected error occurred. Please try again later.',
} as const;

export const EMAIL_TEMPLATE = {
  SUBJECT: (name: string) => `New Contact Form Submission from ${name}`,
  HTML: (name: string, email: string, message: string) => `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #333;">New Contact Form Submission</h2>
      <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
        <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
        <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
        <p style="margin: 10px 0;"><strong>Message:</strong></p>
        <p style="white-space: pre-wrap; margin: 10px 0;">${message}</p>
      </div>
      <p style="color: #666; font-size: 12px;">${CONTACT_FORM.FOOTER_TEXT}</p>
    </div>
  `,
  TEXT: (name: string, email: string, message: string) => `
New Contact Form Submission

Name: ${name}
Email: ${email}

Message:
${message}

---
${CONTACT_FORM.FOOTER_TEXT}
  `,
} as const;

export const HTTP_HEADERS = {
  X_FORWARDED_FOR: 'x-forwarded-for',
  X_REAL_IP: 'x-real-ip',
  X_RATE_LIMIT_LIMIT: 'X-RateLimit-Limit',
  X_RATE_LIMIT_REMAINING: 'X-RateLimit-Remaining',
  X_RATE_LIMIT_RESET: 'X-RateLimit-Reset',
} as const;

export const DEFAULT_IP = 'unknown';
