import { LanguageOption } from '@webbitstudio/shared-utils';

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
];

// Exchange Rate Configuration
export const EXCHANGE_RATE_STALE_TIME = 1000 * 60 * 60; // 1 hour
export const EXCHANGE_RATE_CACHE_TIME = 1000 * 60 * 60 * 24; // 24 hours
export const RETRY_BASE_DELAY = 1000; // 1 second
export const RETRY_MAX_DELAY = 30000; // 30 seconds
export const RETRY_BACKOFF_MULTIPLIER = 2;
