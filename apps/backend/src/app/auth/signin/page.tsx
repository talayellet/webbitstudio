'use client';

import { signIn } from 'next-auth/react';
import { useEffect } from 'react';
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
export default function SignInPage() {
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
