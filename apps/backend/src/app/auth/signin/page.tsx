'use client';

import { signIn } from 'next-auth/react';
import { useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  getAuthLocaleStrings,
  DEFAULT_LANGUAGE,
} from '@webbitstudio/shared-utils';
import { SIGNIN_STYLES } from './utils/styles';

/**
 * Custom NextAuth Signin Page
 *
 * This page immediately redirects to the specified OAuth provider flow
 * without showing an intermediate screen.
 *
 * Supports:
 * - Multiple OAuth providers (google, facebook, apple)
 * - Localization through URL parameter (e.g., ?locale=es)
 * - Custom callback URLs
 *
 * URL Parameters:
 * - provider: The OAuth provider to use (default: 'google')
 * - callbackUrl: Where to redirect after successful login
 * - locale: Language code for localization
 */
function SignInContent() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/';
  const provider = searchParams.get('provider') || 'google';
  const locale = searchParams.get('locale') || DEFAULT_LANGUAGE;
  const localeStrings = getAuthLocaleStrings(locale);

  useEffect(() => {
    // Trigger OAuth signin with the specified provider
    signIn(provider, { callbackUrl });
  }, [callbackUrl, provider]);

  return (
    <div className={SIGNIN_STYLES.CONTAINER}>
      <p className={SIGNIN_STYLES.MESSAGE}>
        {localeStrings.signin.redirecting}
      </p>
    </div>
  );
}

export default function SignInPage() {
  return (
    <Suspense
      fallback={
        <div className={SIGNIN_STYLES.CONTAINER}>
          <p className={SIGNIN_STYLES.MESSAGE}>Loading...</p>
        </div>
      }
    >
      <SignInContent />
    </Suspense>
  );
}
