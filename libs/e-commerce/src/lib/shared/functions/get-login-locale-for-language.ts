import { LoginPageLocale } from '../types';
import {
  ENGLISH_LOGIN_LOCALE,
  HEBREW_LOGIN_LOCALE,
  SPANISH_LOGIN_LOCALE,
} from '../../locale';

// Helper function to get login locale based on language code
export const getLoginLocaleForLanguage = (
  languageCode: string
): LoginPageLocale => {
  switch (languageCode) {
    case 'es':
      return SPANISH_LOGIN_LOCALE;
    case 'he':
      return HEBREW_LOGIN_LOCALE;
    default:
      return ENGLISH_LOGIN_LOCALE;
  }
};
