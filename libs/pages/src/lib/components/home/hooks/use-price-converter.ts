import { useCurrencyContext } from '../contexts';
import { useExchangeRates } from './use-exchange-rates';
import {
  convertPriceString,
  CURRENCY_SYMBOLS,
  type WebbitCurrency,
} from '@webbitstudio/shared-utils';

export interface ConvertedPrice {
  original: string;
  converted: string;
  isConverted: boolean;
  isLoading: boolean;
  error: Error | null;
}

/**
 * Hook to convert prices based on selected currency
 * Handles loading states and errors gracefully
 */
export function usePriceConverter() {
  const { currency } = useCurrencyContext();
  const { data: exchangeRates, isLoading, error } = useExchangeRates();

  /**
   * Convert a price string to the selected currency
   * Returns a function that components can call to convert prices
   */
  const convertPrice = (priceString: string): ConvertedPrice => {
    // If USD or no conversion needed
    if (currency === 'USD') {
      return {
        original: priceString,
        converted: priceString,
        isConverted: false,
        isLoading: false,
        error: null,
      };
    }

    // If still loading rates
    if (isLoading || !exchangeRates) {
      return {
        original: priceString,
        converted: priceString, // Show original while loading
        isConverted: false,
        isLoading: true,
        error: null,
      };
    }

    // If error fetching rates
    if (error) {
      return {
        original: priceString,
        converted: priceString, // Fallback to original on error
        isConverted: false,
        isLoading: false,
        error: error as Error,
      };
    }

    // Convert the price
    try {
      const currencySymbol = CURRENCY_SYMBOLS[currency as WebbitCurrency];
      const converted = convertPriceString(
        priceString,
        currency,
        currencySymbol,
        exchangeRates.rates
      );

      return {
        original: priceString,
        converted,
        isConverted: true,
        isLoading: false,
        error: null,
      };
    } catch (err) {
      // If conversion fails, return original
      return {
        original: priceString,
        converted: priceString,
        isConverted: false,
        isLoading: false,
        error: err as Error,
      };
    }
  };

  return {
    convertPrice,
    currency,
    isLoading,
    error,
    exchangeRates,
  };
}
