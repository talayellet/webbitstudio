import { useState, useEffect } from 'react';
import type { LocaleStrings } from '../utils/locales';
import { en, es, fr } from '../utils/locales';

export type Locale = 'en' | 'es' | 'fr';

const LOCALE_STORAGE_KEY = 'webbit-locale';

const localeMap: Record<Locale, LocaleStrings> = {
  en,
  es,
  fr,
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
      if (stored && (stored === 'en' || stored === 'es' || stored === 'fr')) {
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
