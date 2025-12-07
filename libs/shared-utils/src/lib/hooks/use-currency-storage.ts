import { useState } from 'react';
import { CURRENCY_CODES, type CurrencyCode } from '../types';
import { CURRENCY_STORAGE_KEY, CURRENCY_USER_SELECTED_KEY } from '../constants';

const isBrowser = typeof window !== 'undefined';

/**
 * Custom hook to manage currency state with localStorage persistence
 * Handles reading from and writing to localStorage
 * Does NOT set initial localStorage value to allow geo-based defaults
 *
 * @returns Object with currency state and setter function
 */
export const useCurrencyStorage = () => {
  const [currency, setCurrencyState] = useState<CurrencyCode>(() => {
    if (isBrowser) {
      const stored = window.localStorage.getItem(
        CURRENCY_STORAGE_KEY
      ) as CurrencyCode | null;
      if (stored && Object.values(CURRENCY_CODES).includes(stored)) {
        return stored;
      }
    }
    return CURRENCY_CODES.USD;
  });

  const setCurrency = (newCurrency: CurrencyCode, isUserSelection = false) => {
    setCurrencyState(newCurrency);

    // Only persist to localStorage if it's a user selection
    // Geo-based defaults should not be persisted
    if (isBrowser && isUserSelection) {
      window.localStorage.setItem(CURRENCY_STORAGE_KEY, newCurrency);
      window.localStorage.setItem(CURRENCY_USER_SELECTED_KEY, 'true');
    }
  };

  return { currency, setCurrency };
};
