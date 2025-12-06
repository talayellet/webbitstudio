import { useMemo } from 'react';
import { useGeoLocation, ISO_COUNTRY_CODES } from '@webbitstudio/shared-utils';
import {
  WEBBIT_STUDIO_PHONE,
  WEBBIT_STUDIO_PHONE_IL,
  WEBBIT_STUDIO_PHONE_IL_DIALABLE,
} from '../../../utils/constants';

export interface PhoneNumberData {
  /**
   * Display phone number (formatted for UI)
   */
  display: string;
  /**
   * Dialable phone number (for tel: links)
   */
  dialable: string;
}

/**
 * Custom hook to get the appropriate phone number based on user's geolocation
 * Israeli visitors see the Israeli number, all others see the UK number
 *
 * @returns Phone number data with display and dialable formats
 *
 * @example
 * ```tsx
 * const { display, dialable } = useGeoBasedPhone();
 *
 * return (
 *   <a href={`tel:${dialable}`}>
 *     {display}
 *   </a>
 * );
 * ```
 */
export const useGeoBasedPhone = (): PhoneNumberData => {
  const { data: userCountry } = useGeoLocation();

  return useMemo(() => {
    const isIsrael = userCountry === ISO_COUNTRY_CODES.IL;

    if (isIsrael) {
      return {
        display: WEBBIT_STUDIO_PHONE_IL,
        dialable: WEBBIT_STUDIO_PHONE_IL_DIALABLE,
      };
    }

    return {
      display: WEBBIT_STUDIO_PHONE,
      dialable: WEBBIT_STUDIO_PHONE.replace(/\s/g, ''),
    };
  }, [userCountry]);
};
