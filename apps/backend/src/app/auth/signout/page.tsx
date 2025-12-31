'use client';

import { signOut } from 'next-auth/react';
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  getAuthLocaleStrings,
  DEFAULT_LANGUAGE,
} from '@webbitstudio/shared-utils';
import { ENDPOINTS } from '@webbitstudio/data-access';
import { SIGNOUT_STYLES } from './utils/styles';

/**
 * Custom NextAuth Signout Page
 *
 * Provides a confirmation dialog with both Sign out and Cancel options.
 * Supports localization through URL parameter (e.g., ?locale=es)
 */
function SignOutContent() {
  const searchParams = useSearchParams();
  const callbackUrl =
    searchParams.get('callbackUrl') || ENDPOINTS.AUTH.CALLBACK.DEVELOPMENT;
  const locale = searchParams.get('locale') || DEFAULT_LANGUAGE;
  const localeStrings = getAuthLocaleStrings(locale);

  const handleSignOut = async () => {
    await signOut({
      callbackUrl: ENDPOINTS.AUTH.CALLBACK.DEVELOPMENT,
      redirect: true,
    });
  };

  const handleCancel = () => {
    window.location.href = callbackUrl;
  };

  return (
    <div className={SIGNOUT_STYLES.CONTAINER}>
      <div className={SIGNOUT_STYLES.CARD}>
        <h1 className={SIGNOUT_STYLES.TITLE}>{localeStrings.signout.title}</h1>
        <p className={SIGNOUT_STYLES.MESSAGE}>
          {localeStrings.signout.message}
        </p>
        <div className={SIGNOUT_STYLES.BUTTON_CONTAINER}>
          <button
            onClick={handleSignOut}
            className={SIGNOUT_STYLES.CONFIRM_BUTTON}
          >
            {localeStrings.signout.confirmButton}
          </button>
          <button
            onClick={handleCancel}
            className={SIGNOUT_STYLES.CANCEL_BUTTON}
          >
            {localeStrings.signout.cancelButton}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function SignOutPage() {
  return (
    <Suspense
      fallback={<div className={SIGNOUT_STYLES.CONTAINER}>Loading...</div>}
    >
      <SignOutContent />
    </Suspense>
  );
}
