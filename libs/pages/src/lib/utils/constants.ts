import { LanguageOption } from '@webbitstudio/shared-utils';

export const WEBBIT_STUDIO_EMAIL = 'info@webbitstudio.com';
export const WEBBIT_STUDIO_PHONE = '+44 (0)7414 902208';
export const WEBBIT_STUDIO_PHONE_IL = '054-227-9572';
export const WEBBIT_STUDIO_PHONE_IL_DIALABLE = '+972542279572';

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
