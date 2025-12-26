import { ENGLISH_LOCALE, HEBREW_LOCALE, SPANISH_LOCALE } from '../../locale';
import { HomePageLocale } from '../types';

// Helper function to get locale based on language code
export const getLocaleForLanguage = (languageCode: string): HomePageLocale => {
  switch (languageCode) {
    case 'es':
      return SPANISH_LOCALE;
    case 'he':
      return HEBREW_LOCALE;
    default:
      return ENGLISH_LOCALE;
  }
};
