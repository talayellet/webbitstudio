/**
 * CORS header constants
 */
export const CORS_HEADERS = {
  ALLOW_ORIGIN: 'Access-Control-Allow-Origin',
  ALLOW_METHODS: 'Access-Control-Allow-Methods',
  ALLOW_HEADERS: 'Access-Control-Allow-Headers',
  ALLOW_CREDENTIALS: 'Access-Control-Allow-Credentials',
} as const;

/**
 * CORS methods allowed
 * NOTE: This is also defined in config/security-headers.config.ts for build-time configs.
 * These are separate because:
 * - This file is for RUNTIME application code
 * - The config file is for BUILD-TIME configuration (Next.js, Vite)
 * - Importing from config would violate Nx module boundaries
 */
export const CORS_METHODS = 'GET, POST, PUT, DELETE, OPTIONS' as const;

/**
 * CORS headers allowed
 * NOTE: Also defined in config/security-headers.config.ts (see CORS_METHODS comment above)
 */
export const CORS_ALLOWED_HEADERS = 'Content-Type, Authorization' as const;

/**
 * Common HTTP headers
 */
export const HTTP_HEADERS = {
  CONTENT_TYPE: 'Content-Type',
  AUTHORIZATION: 'Authorization',
  ACCEPT: 'Accept',
} as const;

/**
 * Common content types
 */
export const CONTENT_TYPES = {
  JSON: 'application/json',
  FORM: 'application/x-www-form-urlencoded',
  TEXT: 'text/plain',
} as const;

/**
 * Get CORS headers for API responses
 * @param allowedOrigin - The origin to allow (defaults to ALLOWED_ORIGIN env var or localhost:4300)
 */
export const getCorsHeaders = (
  allowedOrigin?: string
): Record<string, string> => {
  const origin =
    allowedOrigin || process.env.ALLOWED_ORIGIN || 'http://localhost:4300';
  return {
    [CORS_HEADERS.ALLOW_ORIGIN]: origin,
    [CORS_HEADERS.ALLOW_METHODS]: CORS_METHODS,
    [CORS_HEADERS.ALLOW_HEADERS]: CORS_ALLOWED_HEADERS,
    [CORS_HEADERS.ALLOW_CREDENTIALS]: 'true',
  };
};
