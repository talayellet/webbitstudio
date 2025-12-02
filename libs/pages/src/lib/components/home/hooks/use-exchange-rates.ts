import { useQuery } from '@tanstack/react-query';
import {
  fetchExchangeRates,
  type ExchangeRateResponse,
} from '@webbitstudio/shared-utils';

const STALE_TIME = 1000 * 60 * 60; // 1 hour
const CACHE_TIME = 1000 * 60 * 60 * 24; // 24 hours

/**
 * Hook to fetch exchange rates with caching
 * Uses TanStack Query for automatic caching and error handling
 */
export function useExchangeRates() {
  return useQuery<ExchangeRateResponse, Error>({
    queryKey: ['exchangeRates', 'USD'],
    queryFn: () => fetchExchangeRates('USD'),
    staleTime: STALE_TIME,
    gcTime: CACHE_TIME,
    retry: 2,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    // Don't refetch on window focus to avoid excessive API calls
    refetchOnWindowFocus: false,
    // Keep previous data while fetching new data
    placeholderData: (previousData) => previousData,
  });
}
