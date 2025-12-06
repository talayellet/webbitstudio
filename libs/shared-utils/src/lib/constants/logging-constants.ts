/**
 * Error messages for geolocation feature
 */
export const GEOLOCATION_ERROR_MESSAGES = {
  CACHE_READ_FAILED: 'Failed to read geolocation cache',
  CACHE_WRITE_FAILED: 'Failed to cache geolocation',
  DETECTION_FAILED: 'Failed to detect user country',
} as const;

/**
 * Environment names
 */
export const ENVIRONMENT = {
  PRODUCTION: 'production',
  STAGING: 'staging',
  DEVELOPMENT: 'development',
  TEST: 'test',
} as const;

/**
 * Sentry tag values for categorizing errors
 */
export const SENTRY_TAGS = {
  FEATURE: {
    GEOLOCATION: 'geolocation',
  },
  API: {
    IPAPI: 'ipapi',
  },
} as const;
