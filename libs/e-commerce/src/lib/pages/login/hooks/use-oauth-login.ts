import { useCallback } from 'react';
import {
  initiateOAuthLogin,
  type OAuthProvider,
} from '@webbitstudio/data-access';

export interface UseOAuthLoginOptions {
  callbackUrl?: string;
}

/**
 * Hook for handling OAuth login flows (Google, Facebook, Apple)
 *
 * Provides functions to initiate OAuth flows with proper callback URL handling.
 * The OAuth flow will redirect to the auth provider and then back to the callback URL.
 *
 * @param options - Configuration options including callback URL
 * @returns Object with OAuth login handler functions
 *
 * @example
 * ```tsx
 * const { handleOAuthLogin } = useOAuthLogin({
 *   callbackUrl: window.location.origin
 * });
 *
 * <button onClick={() => handleOAuthLogin('google')}>
 *   Login with Google
 * </button>
 * ```
 */
export const useOAuthLogin = ({
  callbackUrl = typeof window !== 'undefined' ? window.location.origin : '',
}: UseOAuthLoginOptions = {}) => {
  const handleOAuthLogin = useCallback(
    (provider: OAuthProvider) => {
      initiateOAuthLogin(provider, callbackUrl);
    },
    [callbackUrl]
  );

  return {
    handleOAuthLogin,
  };
};
