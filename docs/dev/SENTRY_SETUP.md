# Sentry Setup Guide

Sentry has been integrated for production error monitoring. Follow these steps to complete the setup:

## 1. Create a Sentry Account

1. Go to [sentry.io](https://sentry.io) and sign up for a free account
2. Create a new project and select "React" as the platform
3. Copy your DSN (Data Source Name) - it looks like: `https://xxxxx@xxxxx.ingest.sentry.io/xxxxx`

## 2. Initialize Sentry in Your App

In your main app entry point (e.g., `apps/web/src/main.tsx`), add:

```typescript
import * as Sentry from '@sentry/react';

// Initialize Sentry at the very top of your app
if (process.env.NODE_ENV === 'production') {
  Sentry.init({
    dsn: 'YOUR_SENTRY_DSN_HERE', // Replace with your actual DSN
    environment: process.env.NODE_ENV,
    integrations: [Sentry.browserTracingIntegration(), Sentry.replayIntegration()],

    // Performance Monitoring
    tracesSampleRate: 0.1, // 10% of transactions

    // Session Replay
    replaysSessionSampleRate: 0.1, // 10% of sessions
    replaysOnErrorSampleRate: 1.0, // 100% of sessions with errors

    // Filter out errors that aren't actionable
    beforeSend(event) {
      // Don't send errors in development
      if (process.env.NODE_ENV !== 'production') {
        return null;
      }
      return event;
    },
  });
}
```

## 3. Store DSN Securely

Add your Sentry DSN to environment variables:

```bash
# .env.production
VITE_SENTRY_DSN=https://xxxxx@xxxxx.ingest.sentry.io/xxxxx
```

Then update the initialization:

```typescript
Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DSN,
  // ... rest of config
});
```

## 4. What's Already Integrated

The `useGeoFilteredLanguages` hook now automatically reports errors to Sentry:

- Cache read/write failures
- Geolocation API failures

These errors are:

- Only sent in production
- Tagged with `feature: geolocation`
- Classified as warnings (not critical errors)
- Include context about what failed

## 5. Using Sentry Elsewhere

Import and use the `captureException` utility from `@webbitstudio/shared-utils`:

```typescript
import { captureException } from '@webbitstudio/shared-utils';

try {
  // Your code
} catch (error) {
  captureException(error, {
    message: 'Failed to do something',
    level: 'error',
    tags: { feature: 'my-feature' },
  });
}
```

## 6. Monitor Your Errors

Visit your Sentry dashboard at [sentry.io](https://sentry.io) to:

- See real-time errors
- View error trends
- Get notifications via email/Slack
- See session replays (what users did before errors)

## Free Tier Limits

- 5,000 errors per month
- 10,000 performance units per month
- Unlimited projects
- 30-day error history

This should be more than enough for most small-medium projects!
