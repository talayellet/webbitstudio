import { ISOCountryCode } from './locale-types';

// ============================================================================
// Domain Types
// ============================================================================

export interface CurrencyOption<T = string> {
  code: T;
  symbol: string;
  label: string;
}

export interface CurrencyFilter {
  currencyCode: string;
  allowedCountries: ISOCountryCode[];
}

// ============================================================================
// Currency Codes
// ============================================================================

/**
 * Currency codes (ISO 4217)
 */
export const CURRENCY_CODES = {
  USD: 'USD',
  EUR: 'EUR',
  ILS: 'ILS',
} as const;

export type CurrencyCode = (typeof CURRENCY_CODES)[keyof typeof CURRENCY_CODES];

// ============================================================================
// Currency Symbols
// ============================================================================

export const CURRENCY_SYMBOLS = {
  EUR: '€',
  USD: '$',
  ILS: '₪',
} as const;

export type CurrencySymbol =
  (typeof CURRENCY_SYMBOLS)[keyof typeof CURRENCY_SYMBOLS];

// ============================================================================
// Utility Function Options
// ============================================================================

export interface CurrencyConversionProps {
  amount: number;
  fromCurrency: string;
  toCurrency: string;
  rates: Record<string, number>;
}

export interface PriceFormattingProps {
  amount: number;
  symbol: string;
}

export interface PriceConversionProps {
  priceString: string;
  targetCurrency: string;
  targetSymbol: string;
  rates: Record<string, number>;
}

/**
 * Converted price result with metadata
 */
export interface ConvertedPrice {
  original: string;
  converted: string;
  isConverted: boolean;
  isLoading: boolean;
  error: Error | null;
}
