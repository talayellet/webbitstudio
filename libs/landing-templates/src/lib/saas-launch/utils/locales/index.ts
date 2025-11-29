import type { LocaleStrings } from './en';
import { en } from './en';
import { es } from './es';
import { fr } from './fr';
import { LOCALES, createLocaleStringsGetter } from '../../../shared';

export { en } from './en';
export { es } from './es';
export { fr } from './fr';
export type { LocaleStrings } from './en';
export { DEFAULT_LOCALE } from '../../../shared';

// Available locales
export const AVAILABLE_LOCALES = [LOCALES.EN, LOCALES.ES, LOCALES.FR] as const;
export type AvailableLocale = (typeof AVAILABLE_LOCALES)[number];

/**
 * Get locale strings for a given locale code
 * Falls back to English if locale is not found
 */
export const getLocaleStrings = createLocaleStringsGetter<LocaleStrings>({
  localeMap: {
    [LOCALES.EN]: en,
    [LOCALES.ES]: es,
    [LOCALES.FR]: fr,
  },
});
