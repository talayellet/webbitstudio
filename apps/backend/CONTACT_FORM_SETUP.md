# Contact Form Backend Setup Guide

> **💡 Note:** This is the **advanced backend setup** for users who need full control.
>
> **For most users**, we recommend using **Web3Forms** (free, no backend required).  
> See the [main Contact Form Setup Guide](../../libs/landing-templates/CONTACT_FORM_SETUP.md) for the simpler option.

---

## Quick Start

### 1. Start the Backend (Required)

The backend must be running for the contact form to work:

```bash
# From the workspace root
yarn nx dev backend
```

This starts the Next.js backend on `http://localhost:3000` with the `/api/contact` endpoint.

### 2. Start the Frontend

If not already running:

```bash
# From the workspace root
yarn nx dev web
```

This starts the frontend on `http://localhost:4200`. The frontend is configured to proxy all `/api/*` requests to the backend on port 3000.

### 3. Configure Environment Variables

Before the contact form will send emails, you need to set up Resend (see full setup below).

For **quick testing without email**, the API route will return an error but you can verify the request reaches the backend by checking the terminal logs.

---

## Overview

The contact form is configured to send emails to `info@webbitstudio.com` using Resend email service with built-in security features including rate limiting and input validation.

## Security Features

### 1. **Email Delivery (Resend)**

- Reliable email delivery service
- Built-in spam protection
- Email tracking and analytics
- Domain verification for sender reputation

### 2. **Rate Limiting (Upstash Redis)**

- **Limit**: 3 submissions per hour per IP address
- Prevents spam and DDoS attacks
- Uses sliding window algorithm for accurate rate limiting
- Optional: Works without Redis (rate limiting disabled) for development

### 3. **Input Validation (Zod)**

- Server-side validation of all form fields
- Maximum field lengths to prevent abuse
- Email format validation
- Protects against malicious input

### 4. **Additional Security**

- CORS protection (Next.js built-in)
- Input sanitization
- Error handling without exposing sensitive information
- IP address tracking for rate limiting

## Setup Instructions

### Step 1: Set Up Resend (Required)

1. **Create a Resend account**: Visit [https://resend.com](https://resend.com)

2. **Get your API key**:

   - Go to [https://resend.com/api-keys](https://resend.com/api-keys)
   - Click "Create API Key"
   - Copy the API key

3. **Verify your domain** (for production):

   - Go to [https://resend.com/domains](https://resend.com/domains)
   - Add your domain (e.g., `webbitstudio.com`)
   - Add the required DNS records to your domain provider
   - Wait for verification (usually a few minutes)

4. **Update environment variables** in `apps/backend/.env`:

   ```bash
   RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxx
   RESEND_FROM_EMAIL=noreply@webbitstudio.com  # Use your verified domain
   ```

   **For Development**: You can use Resend's test domain:

   ```bash
   RESEND_FROM_EMAIL=onboarding@resend.dev
   ```

### Step 2: Set Up Rate Limiting (Optional but Recommended)

Rate limiting protects against spam and abuse. It's optional for development but **strongly recommended for production**.

1. **Create an Upstash account**: Visit [https://console.upstash.com](https://console.upstash.com)

2. **Create a Redis database**:

   - Click "Create Database"
   - Choose a region close to your deployment
   - Select the free tier (sufficient for most use cases)

3. **Get your credentials**:

   - Click on your database
   - Go to "REST API" tab
   - Copy the `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN`

4. **Update environment variables** in `apps/backend/.env`:

   ```bash
   UPSTASH_REDIS_REST_URL=https://your-redis-url.upstash.io
   UPSTASH_REDIS_REST_TOKEN=your_token_here
   ```

   **For Development**: You can omit these variables, and the rate limiting will be disabled.

### Step 3: Deploy Environment Variables

When deploying to production (Vercel, Netlify, etc.), make sure to add all environment variables:

**Vercel**:

```bash
vercel env add RESEND_API_KEY
vercel env add RESEND_FROM_EMAIL
vercel env add UPSTASH_REDIS_REST_URL
vercel env add UPSTASH_REDIS_REST_TOKEN
```

Or add them through the Vercel dashboard under Project Settings → Environment Variables.

## API Endpoint

**Endpoint**: `POST /api/contact`

**Request Body**:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I have a question..."
}
```

**Success Response** (200):

```json
{
  "success": true,
  "messageId": "abc123..."
}
```

**Error Responses**:

- **429 Too Many Requests**: Rate limit exceeded

  ```json
  {
    "error": "Too many requests. Please try again later.",
    "limit": 3,
    "reset": "2025-11-29T12:00:00.000Z",
    "remaining": 0
  }
  ```

- **400 Bad Request**: Invalid input

  ```json
  {
    "error": "Invalid form data",
    "details": [...]
  }
  ```

- **500 Internal Server Error**: Server error
  ```json
  {
    "error": "Failed to send email. Please try again later."
  }
  ```

## Frontend Integration

The contact form component automatically uses the API endpoint:

```tsx
import { ContactForm } from '@webbitstudio/landing-templates';

// Default behavior - sends to /api/contact
<ContactForm
  formTitle="Get in Touch"
  localeStrings={localeStrings}
/>

// Custom API endpoint
<ContactForm
  formTitle="Get in Touch"
  localeStrings={localeStrings}
  apiEndpoint="/custom/contact-endpoint"
/>

// Custom submission handler (overrides default)
<ContactForm
  formTitle="Get in Touch"
  localeStrings={localeStrings}
  onSubmit={(data) => {
    // Your custom logic
  }}
/>
```

## Testing

### Test the Contact Form Locally

1. Start the development server:

   ```bash
   nx serve backend
   ```

2. Submit the contact form on your frontend

3. Check the Resend dashboard for sent emails: [https://resend.com/emails](https://resend.com/emails)

### Test Rate Limiting

Submit the form 4 times within an hour from the same IP. The 4th submission should be rejected with a 429 status code.

## Email Template

The email sent to `info@webbitstudio.com` includes:

- Sender's name
- Sender's email (set as Reply-To)
- Message content
- HTML and plain text versions

The sender's email is set as the Reply-To address, so you can reply directly from your email client.

## Cost Considerations

### Resend

- **Free Tier**: 100 emails/day, 3,000 emails/month
- **Paid Plans**: Start at $20/month for 50,000 emails
- Perfect for contact forms with moderate traffic

### Upstash Redis

- **Free Tier**: 10,000 commands/day
- Rate limiting uses ~1-2 commands per form submission
- Free tier is sufficient for most use cases

## Troubleshooting

### Emails Not Sending

1. Check that `RESEND_API_KEY` is set correctly
2. Verify your domain in Resend (for production)
3. Check Resend logs: [https://resend.com/emails](https://resend.com/emails)
4. Ensure the API route is accessible: `curl -X POST http://localhost:3000/api/contact`

### Rate Limiting Not Working

1. Verify `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` are set
2. Check Upstash dashboard for connection issues
3. Rate limiting is disabled if Redis credentials are not provided (development mode)

### CORS Errors

If your frontend is on a different domain, you may need to add CORS headers to the API route. Next.js automatically handles CORS for same-origin requests.

## Production Checklist

- [ ] Resend API key configured
- [ ] Domain verified in Resend
- [ ] RESEND_FROM_EMAIL set to your verified domain
- [ ] Upstash Redis configured (recommended)
- [ ] Environment variables added to production environment
- [ ] Test the contact form in production
- [ ] Monitor Resend dashboard for email delivery
- [ ] Set up email notifications for form submissions (optional)

## Support

- **Resend Documentation**: [https://resend.com/docs](https://resend.com/docs)
- **Upstash Documentation**: [https://docs.upstash.com](https://docs.upstash.com)
- **Next.js API Routes**: [https://nextjs.org/docs/app/building-your-application/routing/route-handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
