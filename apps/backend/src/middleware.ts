import { NextRequest, NextResponse } from 'next/server';
import {
  ENDPOINTS,
  CORS_HEADERS,
  CORS_METHODS,
  CORS_ALLOWED_HEADERS,
} from '@webbitstudio/data-access';

/**
 * Middleware to enable CORS for the session endpoint
 * This allows the frontend (port 4300) to call the backend API (port 3000)
 */
export function middleware(request: NextRequest) {
  // Handle preflight requests
  if (request.method === 'OPTIONS') {
    return new NextResponse(null, {
      status: 200,
      headers: {
        [CORS_HEADERS.ALLOW_ORIGIN]: ENDPOINTS.AUTH.CALLBACK.DEVELOPMENT,
        [CORS_HEADERS.ALLOW_METHODS]: CORS_METHODS,
        [CORS_HEADERS.ALLOW_HEADERS]: CORS_ALLOWED_HEADERS,
        [CORS_HEADERS.ALLOW_CREDENTIALS]: 'true',
      },
    });
  }

  // Add CORS headers to the response
  const response = NextResponse.next();
  response.headers.set(
    CORS_HEADERS.ALLOW_ORIGIN,
    ENDPOINTS.AUTH.CALLBACK.DEVELOPMENT
  );
  response.headers.set(CORS_HEADERS.ALLOW_CREDENTIALS, 'true');

  return response;
}

// Apply middleware only to API routes
export const config = {
  matcher: '/api/:path*',
};
