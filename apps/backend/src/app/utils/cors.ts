import { NextResponse } from 'next/server';
import { getCorsHeaders as getSharedCorsHeaders } from '@webbitstudio/data-access/server';

/**
 * Get CORS headers for API responses
 */
export const getCorsHeaders = getSharedCorsHeaders;

/**
 * Handle OPTIONS preflight requests
 */
export const handleCorsPreflightRequest = () => {
  return new NextResponse(null, {
    status: 200,
    headers: getCorsHeaders(),
  });
};
