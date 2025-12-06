import * as Sentry from '@sentry/react';
import { CaptureExceptionContext, LOG_LEVELS } from '../types';
import { ENVIRONMENT } from '../constants';

/**
 * Captures an exception and sends it to Sentry for monitoring
 * Only captures in production environments
 *
 * @param error - The error to capture
 * @param context - Optional context information about where/why the error occurred
 */
export const captureException = (
  error: unknown,
  context?: CaptureExceptionContext
): void => {
  // Only send to Sentry in production
  if (process.env.NODE_ENV !== ENVIRONMENT.PRODUCTION) {
    return;
  }

  if (context) {
    Sentry.captureException(error, {
      level: context.level || LOG_LEVELS.ERROR,
      tags: context.tags,
      contexts: {
        details: {
          message: context.message,
        },
      },
    });
  } else {
    Sentry.captureException(error);
  }
};
