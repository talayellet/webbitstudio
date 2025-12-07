import { useEffect } from 'react';
import { type CurrencyCode } from '../types';
import { useGeoLocation } from './use-geo-location';
import { getDefaultCurrencyForCountry } from '../functions';
import { CURRENCY_USER_SELECTED_KEY } from '../constants';

const isBrowser = typeof window !== 'undefined';

/**
 * Custom hook to set default currency based on user's geolocation
 * Only sets currency if user hasn't manually selected one before
 *
 * @param setCurrency - Function to update currency state
 */
export const useGeoBasedCurrency = (
  setCurrency: (currency: CurrencyCode) => void
) => {
  const { data: userCountry } = useGeoLocation();

  useEffect(() => {
    if (userCountry && isBrowser) {
      const userSelected = window.localStorage.getItem(
        CURRENCY_USER_SELECTED_KEY
      );

      // Only set geo-based currency if user hasn't manually selected one
      if (!userSelected || userSelected === 'false') {
        const defaultCurrency = getDefaultCurrencyForCountry(userCountry);
        setCurrency(defaultCurrency);
      }
    }
  }, [userCountry, setCurrency]);
};
