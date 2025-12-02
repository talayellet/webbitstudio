import {
  CURRENCY_STORAGE_KEY,
  WEBBIT_CURRENCY,
  WebbitCurrency,
} from '@webbitstudio/shared-utils';
import { useState, useEffect } from 'react';

const isBrowser = typeof window !== 'undefined';

export const useCurrency = () => {
  const [currency, setCurrencyState] = useState<WebbitCurrency>(() => {
    if (isBrowser) {
      const stored = window.localStorage.getItem(
        CURRENCY_STORAGE_KEY
      ) as WebbitCurrency | null;
      if (
        stored &&
        (stored === WEBBIT_CURRENCY.USD || stored === WEBBIT_CURRENCY.EUR)
      ) {
        return stored;
      }
    }
    return WEBBIT_CURRENCY.USD;
  });

  const setCurrency = (newCurrency: WebbitCurrency) => {
    setCurrencyState(newCurrency);
    if (isBrowser) {
      window.localStorage.setItem(CURRENCY_STORAGE_KEY, newCurrency);
    }
  };

  useEffect(() => {
    if (isBrowser) {
      window.localStorage.setItem(CURRENCY_STORAGE_KEY, currency);
    }
  }, [currency]);

  return {
    currency,
    setCurrency,
  };
};
