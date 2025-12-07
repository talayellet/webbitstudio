import { useQuery } from '@tanstack/react-query';
import { fetchExchangeRates, type ExchangeRateResponse } from '../services';
import {
  CURRENCY_CODES,
  EXCHANGE_RATE_STALE_TIME,
  EXCHANGE_RATE_CACHE_TIME,
  RETRY_BASE_DELAY,
  RETRY_MAX_DELAY,
  RETRY_BACKOFF_MULTIPLIER,
} from '@webbitstudio/shared-utils';

/**
 * Hook to fetch exchange rates with caching
 * Uses TanStack Query for automatic caching and error handling
 */
export const useExchangeRates = () => {
  return useQuery<ExchangeRateResponse, Error>({
    queryKey: ['exchangeRates', CURRENCY_CODES.USD],
    queryFn: () => fetchExchangeRates(CURRENCY_CODES.USD),
    staleTime: EXCHANGE_RATE_STALE_TIME,
    gcTime: EXCHANGE_RATE_CACHE_TIME,
    retry: 2,
    retryDelay: (attemptIndex) =>
      Math.min(
        RETRY_BASE_DELAY * RETRY_BACKOFF_MULTIPLIER ** attemptIndex,
        RETRY_MAX_DELAY
      ),
    // Don't refetch on window focus to avoid excessive API calls
    refetchOnWindowFocus: false,
    // Keep previous data while fetching new data
    placeholderData: (previousData) => previousData,
  });
};
