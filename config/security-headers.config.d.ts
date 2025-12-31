/**
 * Type declarations for security-headers.config.js
 */

export const SECURITY_HEADERS: {
  readonly 'X-Frame-Options': 'DENY';
  readonly 'X-Content-Type-Options': 'nosniff';
  readonly 'X-XSS-Protection': '1; mode=block';
  readonly 'Referrer-Policy': 'strict-origin-when-cross-origin';
  readonly 'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), interest-cohort=()';
  readonly 'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload';
};

export const CORS_METHODS: 'GET, POST, PUT, DELETE, OPTIONS';
export const CORS_ALLOWED_HEADERS: 'Content-Type, Authorization';
