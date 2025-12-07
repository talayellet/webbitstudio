import {
  CURRENCY_CODES,
  CurrencyConversionProps,
  PriceFormattingProps,
  PriceConversionProps,
} from '../types';
import { DEFAULT_FORMAT_LOCALE } from '../constants';

/**
 * Convert amount from one currency to another
 */
export const convertCurrency = ({
  amount,
  fromCurrency,
  toCurrency,
  rates,
}: CurrencyConversionProps): number => {
  if (fromCurrency === toCurrency) {
    return amount;
  }

  // If base is not USD, convert through USD
  const amountInBase =
    fromCurrency === CURRENCY_CODES.USD ? amount : amount / rates[fromCurrency];
  const convertedAmount =
    toCurrency === CURRENCY_CODES.USD
      ? amountInBase
      : amountInBase * rates[toCurrency];

  return Math.round(convertedAmount);
};

/**
 * Extract numeric price from a string like "$249" or "€499"
 */
export const extractNumericPrice = (priceString: string): number | null => {
  const match = priceString.match(/[\d,]+/);
  if (!match) return null;

  const numericString = match[0].replace(/,/g, '');
  const price = parseInt(numericString, 10);

  return isNaN(price) ? null : price;
};

/**
 * Format price with currency symbol
 */
export const formatPrice = ({
  amount,
  symbol,
}: PriceFormattingProps): string => {
  // Format with comma separators for thousands
  const formatted = amount.toLocaleString(DEFAULT_FORMAT_LOCALE, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return `${symbol}${formatted}`;
};

/**
 * Convert a price string from one currency to another
 * Example: "$249" with EUR target -> "€230"
 */
export const convertPriceString = ({
  priceString,
  targetCurrency,
  targetSymbol,
  rates,
}: PriceConversionProps): string => {
  const numericPrice = extractNumericPrice(priceString);

  if (numericPrice === null) {
    return priceString; // Return original if can't parse
  }

  // Assume source is USD (since that's our base currency in locale files)
  const convertedAmount = convertCurrency({
    amount: numericPrice,
    fromCurrency: CURRENCY_CODES.USD,
    toCurrency: targetCurrency,
    rates,
  });

  return formatPrice({
    amount: convertedAmount,
    symbol: targetSymbol,
  });
};
