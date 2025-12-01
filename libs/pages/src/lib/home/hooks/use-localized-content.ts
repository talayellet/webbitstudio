import { useState, useEffect } from 'react';
import type { LocaleStrings } from '../utils/locales';
import { en, es, fr, de } from '../utils/locales';

export type Locale = 'en' | 'es' | 'fr' | 'de';

const LOCALE_STORAGE_KEY = 'webbit-locale';

const localeMap: Record<Locale, LocaleStrings> = {
  en,
  es,
  fr,
  de,
};

const isBrowser = typeof window !== 'undefined';

/**
 * Custom hook to get localized content
 * Manages locale state and provides methods to change language
 */
export const useLocalizedContent = () => {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (isBrowser) {
      const stored = window.localStorage.getItem(
        LOCALE_STORAGE_KEY
      ) as Locale | null;
      if (
        stored &&
        (stored === 'en' ||
          stored === 'es' ||
          stored === 'fr' ||
          stored === 'de')
      ) {
        return stored;
      }
    }
    return 'en';
  });

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    if (isBrowser) {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, newLocale);
    }
  };

  useEffect(() => {
    if (isBrowser) {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
    }
  }, [locale]);

  return {
    locale,
    setLocale,
    content: localeMap[locale],
  };
};
