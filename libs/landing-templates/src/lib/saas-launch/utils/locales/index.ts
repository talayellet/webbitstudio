import type { LocaleStrings } from './en';
import { en } from './en';
import { es } from './es';
import { fr } from './fr';

export { en } from './en';
export { es } from './es';
export { fr } from './fr';
export type { LocaleStrings } from './en';

// Default locale
export const DEFAULT_LOCALE = 'en';

// Available locales
export const AVAILABLE_LOCALES = ['en', 'es', 'fr'] as const;
export type AvailableLocale = (typeof AVAILABLE_LOCALES)[number];

/**
 * Get locale strings for a given locale code
 * Falls back to English if locale is not found
 */
export const getLocaleStrings = (locale: string): LocaleStrings => {
  switch (locale) {
    case 'es':
      return es;
    case 'fr':
      return fr;
    case 'en':
    default:
      return en;
  }
};
