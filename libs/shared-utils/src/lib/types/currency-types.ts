export interface CurrencyOption<T = string> {
  code: T;
  symbol: string;
  label: string;
}

export const WEBBIT_CURRENCY = {
  EUR: 'EUR',
  USD: 'USD',
} as const;

export type WebbitCurrency =
  (typeof WEBBIT_CURRENCY)[keyof typeof WEBBIT_CURRENCY];

export const CURRENCY_SYMBOLS = {
  EUR: '€',
  USD: '$',
} as const;
export type CurrencySymbol =
  (typeof CURRENCY_SYMBOLS)[keyof typeof CURRENCY_SYMBOLS];

export const CURRENCY_STORAGE_KEY = 'webbit-currency';

export const WEBBIT_STUDIO_CURRENCY_OPTIONS: CurrencyOption<WebbitCurrency>[] =
  [
    {
      code: WEBBIT_CURRENCY.USD,
      symbol: CURRENCY_SYMBOLS.USD,
      label: WEBBIT_CURRENCY.USD,
    },
    {
      code: WEBBIT_CURRENCY.EUR,
      symbol: CURRENCY_SYMBOLS.EUR,
      label: WEBBIT_CURRENCY.EUR,
    },
  ];
