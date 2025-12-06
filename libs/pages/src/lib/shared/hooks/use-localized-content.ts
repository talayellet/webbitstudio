import { useState, useEffect } from 'react';
import {
  useGeoLocation,
  getDefaultLanguageForCountry,
  LOCALE_STORAGE_KEY,
  RTL_LOCALES,
  DEFAULT_LANGUAGE,
  type CountryCode,
} from '@webbitstudio/shared-utils';
import { LOCALE_MAP } from '../constants';

const isBrowser = typeof window !== 'undefined';

/**
 * Custom hook to get localized content
 * Manages locale state and provides methods to change language
 * Also manages RTL (right-to-left) direction for applicable languages
 */
export const useLocalizedContent = () => {
  const { data: userCountry, isLoading: isGeoLoading } = useGeoLocation();
  const [isLocaleReady, setIsLocaleReady] = useState(false);

  const [locale, setLocaleState] = useState<CountryCode>(() => {
    if (isBrowser) {
      const stored = window.localStorage.getItem(
        LOCALE_STORAGE_KEY
      ) as CountryCode | null;
      if (stored && stored in LOCALE_MAP) {
        return stored;
      }
    }
    return DEFAULT_LANGUAGE;
  });

  // Set default language based on geolocation when available
  useEffect(() => {
    if (userCountry && isBrowser) {
      const storedLocale = window.localStorage.getItem(LOCALE_STORAGE_KEY);
      // Only set geo-based language if user hasn't manually selected one
      if (!storedLocale) {
        const defaultLanguage = getDefaultLanguageForCountry(userCountry);
        setLocaleState(defaultLanguage);
      }
    }
  }, [userCountry, isGeoLoading]);

  // Mark as ready after geolocation check completes or if locale is already stored
  useEffect(() => {
    if (isBrowser) {
      const storedLocale = window.localStorage.getItem(LOCALE_STORAGE_KEY);
      // Ready if we have a stored locale OR geolocation has finished loading
      if (storedLocale || !isGeoLoading) {
        setIsLocaleReady(true);
      }
    }
  }, [isGeoLoading]);

  const setLocale = (newLocale: CountryCode) => {
    setLocaleState(newLocale);
    if (isBrowser) {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, newLocale);
    }
  };

  useEffect(() => {
    if (isBrowser) {
      // Set document direction based on locale
      document.documentElement.dir = RTL_LOCALES.includes(locale)
        ? 'rtl'
        : 'ltr';
    }
  }, [locale]);

  return {
    locale,
    setLocale,
    content: LOCALE_MAP[locale],
    isRTL: RTL_LOCALES.includes(locale),
    isLocaleReady,
  };
};
