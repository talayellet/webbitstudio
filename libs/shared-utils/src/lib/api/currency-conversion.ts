/**
 * Currency conversion API utilities
 * Using exchangerate-api.com free tier (1,500 requests/month)
 */

export const EXCHANGE_API_BASE_URL =
  'https://api.exchangerate-api.com/v4/latest';

export interface ExchangeRateResponse {
  base: string;
  date: string;
  rates: Record<string, number>;
}

/**
 * Fetch exchange rates from USD to all currencies
 */
export async function fetchExchangeRates(
  baseCurrency = 'USD'
): Promise<ExchangeRateResponse> {
  const response = await fetch(`${EXCHANGE_API_BASE_URL}/${baseCurrency}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch exchange rates: ${response.statusText}`);
  }

  const data = await response.json();
  return data as ExchangeRateResponse;
}

/**
 * Convert amount from one currency to another
 */
export function convertCurrency(
  amount: number,
  fromCurrency: string,
  toCurrency: string,
  rates: Record<string, number>
): number {
  if (fromCurrency === toCurrency) {
    return amount;
  }

  // If base is not USD, convert through USD
  const amountInBase =
    fromCurrency === 'USD' ? amount : amount / rates[fromCurrency];
  const convertedAmount =
    toCurrency === 'USD' ? amountInBase : amountInBase * rates[toCurrency];

  return Math.round(convertedAmount);
}

/**
 * Extract numeric price from a string like "$249" or "€499"
 */
export function extractNumericPrice(priceString: string): number | null {
  const match = priceString.match(/[\d,]+/);
  if (!match) return null;

  const numericString = match[0].replace(/,/g, '');
  const price = parseInt(numericString, 10);

  return isNaN(price) ? null : price;
}

/**
 * Format price with currency symbol
 */
export function formatPrice(
  amount: number,
  currency: string,
  symbol: string
): string {
  // Format with comma separators for thousands
  const formatted = amount.toLocaleString('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return `${symbol}${formatted}`;
}

/**
 * Convert a price string from one currency to another
 * Example: "$249" with EUR target -> "€230"
 */
export function convertPriceString(
  priceString: string,
  targetCurrency: string,
  targetSymbol: string,
  rates: Record<string, number>
): string {
  const numericPrice = extractNumericPrice(priceString);

  if (numericPrice === null) {
    return priceString; // Return original if can't parse
  }

  // Assume source is USD (since that's our base currency in locale files)
  const convertedAmount = convertCurrency(
    numericPrice,
    'USD',
    targetCurrency,
    rates
  );

  return formatPrice(convertedAmount, targetCurrency, targetSymbol);
}
