export interface CookieCategoryInfo {
  label: string;
  description: string;
}

/**
 * Cookie category keys used for preferences
 */
export const COOKIE_CATEGORY_KEYS = {
  ESSENTIAL: 'essential',
  ANALYTICS: 'analytics',
  MARKETING: 'marketing',
} as const;

export type CookieCategoryKey =
  (typeof COOKIE_CATEGORY_KEYS)[keyof typeof COOKIE_CATEGORY_KEYS];

/**
 * DOM element IDs used in the cookie consent banner
 */
export const COOKIE_CONSENT_DOM_IDS = {
  PREFERENCES_TITLE: 'cookie-preferences-title',
  CATEGORY_LABEL_PREFIX: 'cookie-category',
} as const;
