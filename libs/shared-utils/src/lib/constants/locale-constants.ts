import { COUNTRY_CODES, ISO_COUNTRY_CODES, LanguageFilter } from '../types';

/**
 * Default locale for number and currency formatting
 */
export const DEFAULT_FORMAT_LOCALE = 'en-US' as const;

/**
 * LocalStorage key for caching user's country from geolocation API
 */
export const GEOLOCATION_STORAGE_KEY = 'webbit-user-country' as const;

/**
 * Cache duration for geolocation data (24 hours in milliseconds)
 */
export const GEOLOCATION_CACHE_DURATION = 1000 * 60 * 60 * 24;

/**
 * Number of retry attempts for geolocation API requests
 */
export const GEOLOCATION_RETRY_COUNT = 2;

/**
 * Base delay for exponential backoff in geolocation retries (milliseconds)
 */
export const GEOLOCATION_RETRY_BASE_DELAY = 1000;

/**
 * Maximum retry delay for geolocation API requests (milliseconds)
 */
export const GEOLOCATION_RETRY_MAX_DELAY = 30000;

export const UNKNOWN_COUNTRY = 'unknown';

/**
 * Default language filters for geo-based language availability
 * Hebrew is restricted to Israel only
 */
export const DEFAULT_LANGUAGE_FILTERS: LanguageFilter[] = [
  {
    languageCode: COUNTRY_CODES.HE,
    allowedCountries: [ISO_COUNTRY_CODES.IL],
  },
];
