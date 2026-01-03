import NextAuth, { NextAuthOptions } from 'next-auth';
import type { NextRequest } from 'next/server';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
import { ENDPOINTS } from '@webbitstudio/data-access/server';
import { SESSION_MAX_AGE } from '../../../utils';
import {
  getCorsHeaders,
  handleCorsPreflightRequest,
} from '../../../utils/cors';

/**
 * NextAuth Configuration for Google and Facebook OAuth
 *
 * This provides secure authentication using Google and Facebook OAuth 2.0.
 * The configuration handles:
 * - Google sign-in flow
 * - Facebook sign-in flow
 * - Session management with JWT
 * - Secure token handling
 */

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
      authorization: {
        params: {
          prompt: 'select_account', // Forces Google to show account picker
        },
      },
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID ?? '',
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET ?? '',
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: SESSION_MAX_AGE,
  },
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Handle undefined or empty url
      if (!url || url === 'undefined') {
        return ENDPOINTS.AUTH.CALLBACK.DEVELOPMENT;
      }

      // Allow redirects to the frontend app (port 4300)
      if (url.startsWith(ENDPOINTS.AUTH.CALLBACK.DEVELOPMENT)) {
        return url;
      }

      // Allow relative callback URLs - redirect to frontend
      if (url.startsWith('/')) {
        return ENDPOINTS.AUTH.CALLBACK.DEVELOPMENT;
      }

      // Try to parse as URL, if it fails, default to frontend
      try {
        const parsedUrl = new URL(url);
        if (parsedUrl.origin === baseUrl) {
          return url;
        }
      } catch {
        // Invalid URL, default to frontend
        return ENDPOINTS.AUTH.CALLBACK.DEVELOPMENT;
      }

      // Default to frontend home
      return ENDPOINTS.AUTH.CALLBACK.DEVELOPMENT;
    },
    async jwt({ token, account, user }) {
      // Add user info to the token on sign in
      if (account && user) {
        token.accessToken = account.access_token;
        token.userId = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      // Add user info to the session
      if (session.user) {
        session.user.id = token.userId as string;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

const applyCorsHeaders = (response: Response): Response => {
  const corsHeaders = getCorsHeaders();

  Object.entries(corsHeaders).forEach(([key, value]) => {
    response.headers.set(key, value);
  });

  return response;
};

export const GET = async (
  request: NextRequest,
  context: { params: Promise<{ nextauth: string[] }> }
) => {
  const params = await context.params;
  const response = await handler(request, { params });

  return applyCorsHeaders(response);
};

export const POST = async (
  request: NextRequest,
  context: { params: Promise<{ nextauth: string[] }> }
) => {
  const params = await context.params;
  const response = await handler(request, { params });

  return applyCorsHeaders(response);
};

export const OPTIONS = async () => handleCorsPreflightRequest();
