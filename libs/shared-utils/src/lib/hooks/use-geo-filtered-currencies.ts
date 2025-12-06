import { useMemo } from 'react';
import { CurrencyOption, CurrencyFilter, ISOCountryCode } from '../types';
import { UNKNOWN_COUNTRY } from '../constants';
import { useGeoLocation } from './use-geo-location';

export interface UseGeoFilteredCurrenciesProps<T extends string = string> {
  /**
   * All available currency options
   */
  currencies: CurrencyOption<T>[];
  /**
   * Currency filters to apply based on user's country
   * Currencies not in this list will be shown to all users
   */
  filters?: CurrencyFilter[];
}

export interface UseGeoFilteredCurrenciesResponse<T extends string = string> {
  /**
   * Filtered currency options based on user's country
   */
  currencies: CurrencyOption<T>[];
  /**
   * Whether geolocation data is currently being fetched
   */
  isLoading: boolean;
  /**
   * Error object if geolocation fetch failed, null otherwise
   */
  error: Error | null;
}

/**
 * Custom hook to filter currency options based on user's geographic location
 * Uses TanStack Query for automatic caching and request management
 *
 * @example
 * ```tsx
 * const { currencies, isLoading, error } = useGeoFilteredCurrencies({
 *   currencies: ALL_CURRENCIES,
 *   filters: [
 *     { currencyCode: 'ILS', allowedCountries: ['IL'] }
 *   ]
 * });
 *
 * if (error) {
 *   // Handle error in UI
 * }
 * ```
 */
export const useGeoFilteredCurrencies = <T extends string = string>({
  currencies,
  filters = [],
}: UseGeoFilteredCurrenciesProps<T>): UseGeoFilteredCurrenciesResponse<T> => {
  const { data: userCountry, isLoading, error } = useGeoLocation();

  const filteredCurrencies = useMemo(() => {
    // If no filters provided, return all currencies
    if (filters.length === 0) {
      return currencies;
    }

    // While loading or on error, hide all filtered currencies by default
    if (isLoading || error) {
      const filteredCodes = new Set(filters.map((f) => f.currencyCode));
      return currencies.filter((curr) => !filteredCodes.has(curr.code));
    }

    // Filter currencies based on user's country
    return currencies.filter((curr) => {
      const filter = filters.find((f) => f.currencyCode === curr.code);

      // If currency is not in filters, show it to everyone
      if (!filter) {
        return true;
      }

      // If currency is in filters, show only if user is from allowed country
      return userCountry && userCountry !== UNKNOWN_COUNTRY
        ? filter.allowedCountries.includes(userCountry as ISOCountryCode)
        : false;
    });
  }, [currencies, filters, userCountry, isLoading, error]);

  return {
    currencies: filteredCurrencies,
    isLoading,
    error,
  };
};
