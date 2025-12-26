import { signIn, signOut } from 'next-auth/react';

/**
 * Authentication utilities for Google OAuth
 *
 * These functions provide a simple interface to NextAuth's authentication methods.
 * All security is handled by NextAuth - you don't need to manage tokens or sessions.
 */

export interface GoogleLoginOptions {
  /** URL to redirect to after successful login */
  callbackUrl?: string;
}

/**
 * Initiate Google OAuth login flow
 *
 * This triggers the secure Google OAuth flow:
 * 1. Redirects user to Google login
 * 2. User authorizes your app
 * 3. Google redirects back to your app
 * 4. NextAuth creates a secure session
 *
 * @param options - Configuration options
 * @returns Promise that resolves when redirect starts
 *
 * @example
 * ```tsx
 * const handleGoogleLogin = async () => {
 *   await loginWithGoogle({ callbackUrl: '/' });
 * };
 * ```
 */
export const loginWithGoogle = async (
  options: GoogleLoginOptions = {}
): Promise<void> => {
  await signIn('google', {
    callbackUrl: options.callbackUrl ?? '/',
  });
};

/**
 * Log out the current user
 *
 * This clears the user's session and redirects them to the specified URL.
 *
 * @param callbackUrl - URL to redirect to after logout (defaults to home page)
 * @returns Promise that resolves when redirect starts
 *
 * @example
 * ```tsx
 * const handleLogout = async () => {
 *   await logout({ callbackUrl: '/login' });
 * };
 * ```
 */
export const logout = async (callbackUrl = '/'): Promise<void> => {
  await signOut({ callbackUrl });
};
