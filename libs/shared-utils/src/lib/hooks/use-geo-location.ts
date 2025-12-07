import { useQuery } from '@tanstack/react-query';
import {
  GEOLOCATION_CACHE_DURATION,
  GEOLOCATION_RETRY_COUNT,
  GEOLOCATION_RETRY_BASE_DELAY,
  GEOLOCATION_RETRY_MAX_DELAY,
  UNKNOWN_COUNTRY,
} from '../constants';
import {
  API_ENDPOINTS,
  CONTENT_TYPES,
  HTTP_METHODS,
} from '@webbitstudio/shared';

/**
 * Custom hook to fetch and cache user's geolocation data
 * Uses TanStack Query for automatic caching, refetching, and request deduplication
 *
 * This request is considered ESSENTIAL for website functionality as it enables:
 * - Automatic language selection for better user experience
 * - Appropriate currency display
 * - Country-specific content and formatting
 *
 * No consent required under GDPR Article 6(1)(f) - Legitimate Interest:
 * - Only country-level detection (not precise location)
 * - No tracking or profiling of users
 * - Documented in cookie/privacy policy
 * - Essential for core website functionality
 *
 * @returns Query result with user's country code or UNKNOWN_COUNTRY if detection fails
 *
 * @example
 * ```tsx
 * const { data: userCountry, isLoading, error } = useGeoLocation();
 *
 * if (error) {
 *   // Handle error
 * }
 *
 * if (userCountry === 'US') {
 *   // Show US-specific content
 * }
 * ```
 */
export const useGeoLocation = () => {
  return useQuery({
    queryKey: ['geolocation'],
    queryFn: async (): Promise<string> => {
      const response = await fetch(API_ENDPOINTS.GEO_JS, {
        method: HTTP_METHODS.GET,
        headers: {
          Accept: CONTENT_TYPES.JSON,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data.country || UNKNOWN_COUNTRY;
    },
    staleTime: GEOLOCATION_CACHE_DURATION, // 24 hours - data stays fresh
    gcTime: Infinity, // Keep in cache indefinitely
    retry: GEOLOCATION_RETRY_COUNT, // Retry failed requests twice
    retryDelay: (attemptIndex) =>
      Math.min(
        GEOLOCATION_RETRY_BASE_DELAY * 2 ** attemptIndex,
        GEOLOCATION_RETRY_MAX_DELAY
      ), // Exponential backoff
  });
};
