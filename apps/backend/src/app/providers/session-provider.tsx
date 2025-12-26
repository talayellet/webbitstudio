'use client';

import { SessionProvider as NextAuthSessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';

/**
 * Session Provider Component
 *
 * Wraps the application with NextAuth's SessionProvider to enable
 * session management and authentication state across all components.
 *
 * This must be a client component because SessionProvider uses React Context.
 */
export const SessionProvider = ({ children }: { children: ReactNode }) => {
  return <NextAuthSessionProvider>{children}</NextAuthSessionProvider>;
};
