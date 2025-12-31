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
 * This page immediately redirects to the Google OAuth flow
 * without showing an intermediate screen.
 * Supports localization through URL parameter (e.g., ?locale=es)
 */
function SignInContent() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/';
  const locale = searchParams.get('locale') || DEFAULT_LANGUAGE;
  const localeStrings = getAuthLocaleStrings(locale);

  useEffect(() => {
    // Immediately trigger Google signin
    signIn('google', { callbackUrl });
  }, [callbackUrl]);

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
