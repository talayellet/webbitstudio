import { NextRequest, NextResponse } from 'next/server';
import {
  CORS_HEADERS,
  CORS_METHODS,
  CORS_ALLOWED_HEADERS,
  ENDPOINTS,
} from '@webbitstudio/data-access/server';

const DEVELOPMENT_ORIGIN = ENDPOINTS.AUTH.CALLBACK.DEVELOPMENT;

/**
 * Proxy to enable CORS for the session endpoint
 * This allows the frontend (port 4300) to call the backend API (port 3000)
 */
export function proxy(request: NextRequest) {
  // Handle preflight requests
  if (request.method === 'OPTIONS') {
    return new NextResponse(null, {
      status: 200,
      headers: {
        [CORS_HEADERS.ALLOW_ORIGIN]: DEVELOPMENT_ORIGIN,
        [CORS_HEADERS.ALLOW_METHODS]: CORS_METHODS,
        [CORS_HEADERS.ALLOW_HEADERS]: CORS_ALLOWED_HEADERS,
        [CORS_HEADERS.ALLOW_CREDENTIALS]: 'true',
      },
    });
  }

  // Add CORS headers to the response
  const response = NextResponse.next();
  response.headers.set(CORS_HEADERS.ALLOW_ORIGIN, DEVELOPMENT_ORIGIN);
  response.headers.set(CORS_HEADERS.ALLOW_CREDENTIALS, 'true');

  return response;
}

// Apply proxy only to API routes
export const config = {
  matcher: '/api/:path*',
};
