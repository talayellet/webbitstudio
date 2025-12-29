import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || '';

/**
 * Middleware to handle CORS for all API routes
 * This ensures CORS headers are present on ALL responses, including errors
 */
export function middleware(request: NextRequest) {
  // Handle preflight requests
  if (request.method === 'OPTIONS') {
    return new NextResponse(null, {
      status: 200,
      headers: getCorsHeaders(),
    });
  }

  // Clone the response and add CORS headers
  const response = NextResponse.next();

  if (ALLOWED_ORIGIN) {
    response.headers.set('Access-Control-Allow-Origin', ALLOWED_ORIGIN);
    response.headers.set(
      'Access-Control-Allow-Methods',
      'GET, POST, PUT, DELETE, OPTIONS'
    );
    response.headers.set(
      'Access-Control-Allow-Headers',
      'Content-Type, Authorization'
    );
    response.headers.set('Access-Control-Allow-Credentials', 'true');
  }

  return response;
}

function getCorsHeaders(): Record<string, string> {
  if (!ALLOWED_ORIGIN) {
    return {};
  }

  return {
    'Access-Control-Allow-Origin': ALLOWED_ORIGIN,
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Credentials': 'true',
  };
}

/**
 * Configure which routes this middleware runs on
 */
export const config = {
  matcher: '/api/:path*',
};
