import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import {
  CORS_HEADERS,
  CORS_METHODS,
  CORS_ALLOWED_HEADERS,
  ENDPOINTS,
} from '@webbitstudio/data-access/utils';

const ALLOWED_ORIGIN =
  process.env.ALLOWED_ORIGIN || ENDPOINTS.AUTH.CALLBACK.DEVELOPMENT;

export function middleware(request: NextRequest) {
  // Handle preflight
  if (request.method === 'OPTIONS') {
    return new NextResponse(null, {
      status: 200,
      headers: {
        [CORS_HEADERS.ALLOW_ORIGIN]: ALLOWED_ORIGIN,
        [CORS_HEADERS.ALLOW_METHODS]: CORS_METHODS,
        [CORS_HEADERS.ALLOW_HEADERS]: CORS_ALLOWED_HEADERS,
        [CORS_HEADERS.ALLOW_CREDENTIALS]: 'true',
      },
    });
  }

  // Continue with the request
  const response = NextResponse.next();

  // Add CORS headers to response
  response.headers.set(CORS_HEADERS.ALLOW_ORIGIN, ALLOWED_ORIGIN);
  response.headers.set(CORS_HEADERS.ALLOW_CREDENTIALS, 'true');

  return response;
}

export const config = {
  matcher: '/api/:path*',
};
