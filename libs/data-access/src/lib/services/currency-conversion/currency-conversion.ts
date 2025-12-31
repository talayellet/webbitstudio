import { CURRENCY_CODES } from '@webbitstudio/shared-utils';
import { ENDPOINTS } from '../../utils';
import { EXCHANGE_RATES_ERROR, ExchangeRateResponse } from './utils';

/**
 * Fetch exchange rates from USD to all currencies
 */
export const fetchExchangeRates = async (
  baseCurrency = CURRENCY_CODES.USD
): Promise<ExchangeRateResponse> => {
  const response = await fetch(
    `${ENDPOINTS.EXCHANGE.API_BASE_URL}/${baseCurrency}`
  );

  if (!response.ok) {
    throw new Error(`${EXCHANGE_RATES_ERROR}: ${response.statusText}`);
  }

  const data = await response.json();
  return data as ExchangeRateResponse;
};
