import { useCallback } from 'react';
import { useExchangeRates } from './use-exchange-rates';
import {
  useCurrencyContext,
  convertPriceString,
  CURRENCY_SYMBOLS,
  WEBBIT_CURRENCY,
} from '@webbitstudio/shared-utils';
import type { ConvertedPrice } from '../../../shared';

/**
 * Convert unknown error to Error instance
 */
const toError = (err: unknown): Error => {
  if (err instanceof Error) return err;
  return new Error(String(err));
};

/**
 * Hook to convert prices based on selected currency
 * Handles loading states and errors gracefully
 */
export const usePriceConverter = () => {
  const { currency } = useCurrencyContext();
  const { data: exchangeRates, isLoading, error } = useExchangeRates();

  /**
   * Convert a price string to the selected currency
   * Returns a function that components can call to convert prices
   */
  const convertPrice = useCallback(
    (priceString: string): ConvertedPrice => {
      // If USD or no conversion needed
      if (currency === WEBBIT_CURRENCY.USD) {
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
          error: toError(error),
        };
      }

      // Convert the price
      try {
        const currencySymbol = CURRENCY_SYMBOLS[currency];
        const converted = convertPriceString({
          priceString,
          targetCurrency: currency,
          targetSymbol: currencySymbol,
          rates: exchangeRates.rates,
        });

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
          error: toError(err),
        };
      }
    },
    [currency, isLoading, exchangeRates, error]
  );

  return {
    convertPrice,
    currency,
    isLoading,
    error,
    exchangeRates,
  };
};
