import { ENDPOINTS } from '@webbitstudio/data-access';

/**
 * Get the appropriate OAuth callback URL based on environment
 */
export const getOAuthCallbackUrl = (): string => {
  if (typeof window === 'undefined') {
    return ENDPOINTS.OAUTH_CALLBACK_DEVELOPMENT;
  }

  return window.location.origin;
};
