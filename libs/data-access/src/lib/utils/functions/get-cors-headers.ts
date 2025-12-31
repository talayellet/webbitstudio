import {
  CORS_ALLOWED_HEADERS,
  CORS_HEADERS,
  CORS_METHODS,
} from '../headers';

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
