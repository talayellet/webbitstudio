import { useMemo } from 'react';
import { useBrowserLocale } from './use-browser-locale';
import {
  LOCALE_CODE_MAPPING,
  LANGUAGE_CURRENCY_MAP,
  DEFAULT_LANGUAGE,
} from '../constants';
import type { CountryCode, CurrencyCode } from '../types';

export interface UseLocaleFromBrowserProps {
  /**
   * Detected locale code
   */
  locale: CountryCode;
  /**
   * Suggested currency based on language
   */
  suggestedCurrency: CurrencyCode;
}

/**
 * Hook to detect user's locale from browser settings
 * Provides immediate language/currency suggestions without requiring consent
 * This is privacy-friendly as it only reads browser preferences
 *
 * @param supportedLocales - Array of supported locale codes
 * @param fallbackLocale - Locale to use if browser language not supported
 * @returns Detected locale and suggested currency
 *
 * @example
 * ```tsx
 * const { locale, suggestedCurrency } = useLocaleFromBrowser(['en', 'he', 'fr']);
 * // Israeli user: { locale: 'he', suggestedCurrency: 'ILS' }
 * // French user: { locale: 'fr', suggestedCurrency: 'EUR' }
 * ```
 */
export const useLocaleFromBrowser = (
  supportedLocales: CountryCode[],
  fallbackLocale: CountryCode = DEFAULT_LANGUAGE
): UseLocaleFromBrowserProps => {
  const browserLocale = useBrowserLocale();

  return useMemo(() => {
    // Normalize browser locale
    const normalizedLocale =
      LOCALE_CODE_MAPPING[browserLocale] || fallbackLocale;

    // Check if supported
    const locale = supportedLocales.includes(normalizedLocale)
      ? normalizedLocale
      : fallbackLocale;

    // Get suggested currency
    const suggestedCurrency =
      LANGUAGE_CURRENCY_MAP[locale] || LANGUAGE_CURRENCY_MAP[fallbackLocale];

    return {
      locale,
      suggestedCurrency,
    };
  }, [browserLocale, supportedLocales, fallbackLocale]);
};
