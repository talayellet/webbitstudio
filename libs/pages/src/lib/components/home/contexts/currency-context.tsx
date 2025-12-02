import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import {
  CURRENCY_STORAGE_KEY,
  WEBBIT_CURRENCY,
  WebbitCurrency,
} from '@webbitstudio/shared-utils';

interface CurrencyContextValue {
  currency: WebbitCurrency;
  setCurrency: (currency: WebbitCurrency) => void;
}

const CurrencyContext = createContext<CurrencyContextValue | undefined>(
  undefined
);

const isBrowser = typeof window !== 'undefined';

export const CurrencyProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
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

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrencyContext = () => {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error(
      'useCurrencyContext must be used within a CurrencyProvider'
    );
  }
  return context;
};
