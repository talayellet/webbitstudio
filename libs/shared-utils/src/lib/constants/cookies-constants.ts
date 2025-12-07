import type { CookiePreferences } from '../types';

/**
 * Custom event name dispatched when cookie consent changes
 */
export const COOKIE_CONSENT_CHANGED_EVENT = 'cookieConsentChanged' as const;

/**
 * Custom event name dispatched to force banner to show (e.g., when manage preferences is clicked)
 */
export const COOKIE_CONSENT_SHOW_BANNER_EVENT =
  'cookie-consent-show-banner' as const;

/**
 * LocalStorage key for storing granular cookie preferences
 */
export const COOKIE_PREFERENCES_STORAGE_KEY =
  'webbit-cookie-preferences' as const;

/**
 * Browser storage event name for cross-tab synchronization
 */
export const STORAGE_EVENT = 'storage' as const;

/**
 * Default preferences - essential cookies are always enabled
 */
export const DEFAULT_PREFERENCES: CookiePreferences = {
  essential: true,
  analytics: false,
  marketing: false,
};
