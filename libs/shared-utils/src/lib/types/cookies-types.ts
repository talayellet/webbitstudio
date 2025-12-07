/**
 * Cookie categories for granular consent management
 */
export const COOKIE_CATEGORY = {
  ESSENTIAL: 'essential',
  ANALYTICS: 'analytics',
  MARKETING: 'marketing',
} as const;

export type CookieCategory =
  (typeof COOKIE_CATEGORY)[keyof typeof COOKIE_CATEGORY];

/**
 * Cookie preferences for granular consent
 */
export interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}
