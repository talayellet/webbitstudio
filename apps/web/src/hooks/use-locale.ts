import { useState, useEffect } from 'react';
import {
  LOCALE_STORAGE_KEY,
  DEFAULT_LANGUAGE,
} from '@webbitstudio/shared-utils';

/**
 * Custom hook to manage locale state synchronized with localStorage.
 * Listens for storage changes across tabs and polls for same-tab changes.
 *
 * @returns The current locale string
 */
export const useLocale = (): string => {
  const [locale, setLocale] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return (
        window.localStorage.getItem(LOCALE_STORAGE_KEY) || DEFAULT_LANGUAGE
      );
    }
    return DEFAULT_LANGUAGE;
  });

  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === LOCALE_STORAGE_KEY && e.newValue) {
        setLocale(e.newValue);
      }
    };

    // Also check localStorage periodically in case changes happen in same tab
    const checkLocale = () => {
      if (typeof window !== 'undefined') {
        const storedLocale = window.localStorage.getItem(LOCALE_STORAGE_KEY);
        if (storedLocale && storedLocale !== locale) {
          setLocale(storedLocale);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    const interval = setInterval(checkLocale, 1000);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, [locale]);

  return locale;
};
