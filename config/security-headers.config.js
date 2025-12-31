/**
 * Security headers configuration
 * Shared between vite.config.mts and next.config.js
 */

/**
 * Common security headers for all platforms
 */
export const SECURITY_HEADERS = {
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy':
    'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
};

/**
 * CORS configuration constants
 */
export const CORS_METHODS = 'GET, POST, PUT, DELETE, OPTIONS';
export const CORS_ALLOWED_HEADERS = 'Content-Type, Authorization';
