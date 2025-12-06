export const LOG_LEVELS = {
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info',
} as const;

export type LogLevel = (typeof LOG_LEVELS)[keyof typeof LOG_LEVELS];

export interface CaptureExceptionContext {
  message?: string;
  tags?: Record<string, string>;
  level?: LogLevel;
}
