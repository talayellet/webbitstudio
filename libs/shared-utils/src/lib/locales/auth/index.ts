import { DEFAULT_LANGUAGE } from '../../constants';
import { en } from './en';
import { es } from './es';
import { fr } from './fr';
import { de } from './de';
import { he } from './he';

export { en } from './en';
export { es } from './es';
export { fr } from './fr';
export { de } from './de';
export { he } from './he';
export type { AuthLocaleStrings } from './en';

/**
 * Available auth locales
 */
export const AUTH_LOCALES = {
  en,
  es,
  fr,
  de,
  he,
} as const;

export type AuthLocale = keyof typeof AUTH_LOCALES;

/**
 * Get localized strings for authentication pages
 * Falls back to English if locale not found
 *
 * @param locale - Language code (e.g., 'en', 'es', 'fr', 'de', 'he')
 * @returns Localized auth strings
 */
export const getAuthLocaleStrings = (locale: string = DEFAULT_LANGUAGE) => {
  return AUTH_LOCALES[locale as AuthLocale] || AUTH_LOCALES[DEFAULT_LANGUAGE];
};
