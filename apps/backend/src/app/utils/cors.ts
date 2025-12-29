import { NextResponse } from 'next/server';

/**
 * CORS configuration for API routes
 */
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || 'http://localhost:4300';

/**
 * Get CORS headers for API responses
 */
export const getCorsHeaders = (): Record<string, string> => {
  return {
    'Access-Control-Allow-Origin': ALLOWED_ORIGIN,
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Credentials': 'true',
  };
};

/**
 * Handle OPTIONS preflight requests
 */
export const handleCorsPreflightRequest = () => {
  return new NextResponse(null, {
    status: 200,
    headers: getCorsHeaders(),
  });
};
