import {
  CURRENCY_CODES,
  CURRENCY_SYMBOLS,
  ISO_COUNTRY_CODES,
  type CurrencyCode,
  type CurrencyOption,
  type CurrencyFilter,
} from '../types';

// ============================================================================
// Storage Keys
// ============================================================================

export const CURRENCY_STORAGE_KEY = 'webbit-currency';
export const CURRENCY_USER_SELECTED_KEY = 'webbit-currency-user-selected';

// ============================================================================
// Currency Options
// ============================================================================

export const WEBBIT_STUDIO_CURRENCY_OPTIONS: CurrencyOption<CurrencyCode>[] = [
  {
    code: CURRENCY_CODES.USD,
    symbol: CURRENCY_SYMBOLS.USD,
    label: CURRENCY_CODES.USD,
  },
  {
    code: CURRENCY_CODES.EUR,
    symbol: CURRENCY_SYMBOLS.EUR,
    label: CURRENCY_CODES.EUR,
  },
  {
    code: CURRENCY_CODES.ILS,
    symbol: CURRENCY_SYMBOLS.ILS,
    label: CURRENCY_CODES.ILS,
  },
];

// ============================================================================
// Currency Filters
// ============================================================================

/**
 * Default currency filters for geo-restricted currencies
 * ILS is only shown to users browsing from Israel
 */
export const DEFAULT_CURRENCY_FILTERS: CurrencyFilter[] = [
  {
    currencyCode: CURRENCY_CODES.ILS,
    allowedCountries: [ISO_COUNTRY_CODES.IL],
  },
];

// ============================================================================
// Exchange Rate Configuration
// ============================================================================

/**
 * How long exchange rate data is considered fresh (1 hour)
 */
export const EXCHANGE_RATE_STALE_TIME = 1000 * 60 * 60;

/**
 * How long to keep exchange rate data in cache (24 hours)
 */
export const EXCHANGE_RATE_CACHE_TIME = 1000 * 60 * 60 * 24;

/**
 * Base delay for retry attempts (1 second)
 */
export const RETRY_BASE_DELAY = 1000;

/**
 * Maximum delay for retry attempts (30 seconds)
 */
export const RETRY_MAX_DELAY = 30000;

/**
 * Multiplier for exponential backoff
 */
export const RETRY_BACKOFF_MULTIPLIER = 2;
