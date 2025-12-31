import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { getCorsHeaders } from '@webbitstudio/data-access/server';
import { authOptions } from '../[...nextauth]/route';
import { DEFAULT_USER_ID } from '../../../utils';

const corsHeaders = getCorsHeaders();

/**
 * API endpoint to check if user is logged in
 *
 * This allows your frontend app (running on a different port) to check
 * if the user has an active session.
 *
 * GET /api/auth/session
 * Returns: { user: {...} } if logged in, { user: null } if not
 */
export async function GET() {
  const session = await getServerSession(authOptions);

  return NextResponse.json(
    {
      user: session?.user
        ? {
            id: session.user.id || session.user.email || DEFAULT_USER_ID,
            name: session.user.name || '',
            email: session.user.email || '',
            avatar: session.user.image,
          }
        : null,
    },
    {
      headers: corsHeaders,
    }
  );
}

/**
 * Handle CORS preflight requests
 */
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: corsHeaders,
  });
}
