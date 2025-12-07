import { LanguageOption, type CountryCode } from '@webbitstudio/shared-utils';
import { en, es, fr, de, he, type LocaleStrings } from './locales';

export const CONTACT_FORM_IDS = {
  NAME: 'contact-name',
  EMAIL: 'contact-email',
  COUNTRY: 'contact-country',
  DETAILS: 'contact-details',
} as const;

export const WEBBIT_STUDIO_LANG_OPTIONS: LanguageOption[] = [
  {
    code: 'en',
    flag: '🇺🇸',
    label: 'English',
  },
  {
    code: 'es',
    flag: '🇪🇸',
    label: 'Español',
  },
  {
    code: 'fr',
    flag: '🇫🇷',
    label: 'Français',
  },
  {
    code: 'de',
    flag: '🇩🇪',
    label: 'Deutsch',
  },
  {
    code: 'he',
    flag: '🇮🇱',
    label: 'עברית',
  },
];

// Exchange Rate Configuration
export const EXCHANGE_RATE_STALE_TIME = 1000 * 60 * 60; // 1 hour
export const EXCHANGE_RATE_CACHE_TIME = 1000 * 60 * 60 * 24; // 24 hours
export const RETRY_BASE_DELAY = 1000; // 1 second
export const RETRY_MAX_DELAY = 30000; // 30 seconds
export const RETRY_BACKOFF_MULTIPLIER = 2;

// Route Constants
export const ROUTES = {
  PRIVACY_POLICY: '/privacy-policy',
  TERMS_OF_SERVICE: '/terms-of-service',
  COOKIE_POLICY: '/cookie-policy',
  ACCESSIBILITY_STATEMENT: '/accessibility-statement',
} as const;

// Locale mapping
export const LOCALE_MAP: Record<CountryCode, LocaleStrings> = {
  en,
  es,
  fr,
  de,
  he,
};
