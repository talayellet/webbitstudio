import { Locale, LOCALES } from '../../../shared';
import { LocaleStrings } from '../types';
import { en, es, fr, he } from '../locales';

/**
 * Get locale strings for the specified locale
 */
export const getLocaleStrings = (locale: Locale): LocaleStrings => {
  switch (locale) {
    case LOCALES.ES:
      return es;
    case LOCALES.FR:
      return fr;
    case LOCALES.HE:
      return he;
    case LOCALES.EN:
    default:
      return en;
  }
};
