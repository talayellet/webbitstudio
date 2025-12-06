import { useMemo } from 'react';
import { LanguageOption, LanguageFilter, ISOCountryCode } from '../types';
import { UNKNOWN_COUNTRY } from '../constants';
import { useGeoLocation } from './use-geo-location';

export interface UseGeoFilteredLanguagesProps {
  /**
   * All available language options
   */
  languages: LanguageOption[];
  /**
   * Language filters to apply based on user's country
   * Languages not in this list will be shown to all users
   */
  filters?: LanguageFilter[];
}

export interface UseGeoFilteredLanguagesResponse {
  /**
   * Filtered language options based on user's country
   */
  languages: LanguageOption[];
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
 * Custom hook to filter language options based on user's geographic location
 * Uses TanStack Query for automatic caching and request management
 *
 * @example
 * ```tsx
 * const { languages, isLoading, error } = useGeoFilteredLanguages({
 *   languages: ALL_LANGUAGES,
 *   filters: [
 *     { languageCode: 'he', allowedCountries: ['IL'] },
 *     { languageCode: 'ar', allowedCountries: ['SA', 'AE', 'EG'] }
 *   ]
 * });
 *
 * if (error) {
 *   // Handle error in UI
 * }
 * ```
 */
export const useGeoFilteredLanguages = ({
  languages,
  filters = [],
}: UseGeoFilteredLanguagesProps): UseGeoFilteredLanguagesResponse => {
  const { data: userCountry, isLoading, error } = useGeoLocation();

  const filteredLanguages = useMemo(() => {
    // If no filters provided, return all languages
    if (filters.length === 0) {
      return languages;
    }

    // While loading or on error, hide all filtered languages by default
    if (isLoading || error) {
      const filteredCodes = new Set(filters.map((f) => f.languageCode));
      return languages.filter((lang) => !filteredCodes.has(lang.code));
    }

    // Filter languages based on user's country
    return languages.filter((lang) => {
      const filter = filters.find((f) => f.languageCode === lang.code);

      // If language is not in filters, show it to everyone
      if (!filter) {
        return true;
      }

      // If language is in filters, show only if user is from allowed country
      return userCountry && userCountry !== UNKNOWN_COUNTRY
        ? filter.allowedCountries.includes(userCountry as ISOCountryCode)
        : false;
    });
  }, [languages, filters, userCountry, isLoading, error]);

  return {
    languages: filteredLanguages,
    isLoading,
    error,
  };
};
