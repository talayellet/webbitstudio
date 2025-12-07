import { CURRENCY_CODES, type CurrencyCode, ISO_COUNTRY_CODES } from '../types';
import { EU_COUNTRY_CODES } from '../constants';

/**
 * Get default currency based on user's country
 * @param countryCode - ISO 3166-1 alpha-2 country code
 * @returns Currency code (ILS for Israel, EUR for EU countries, USD for others)
 */
export const getDefaultCurrencyForCountry = (
  countryCode: string | null | undefined
): CurrencyCode => {
  if (!countryCode) {
    return CURRENCY_CODES.USD;
  }

  // Israel -> ILS
  if (countryCode === ISO_COUNTRY_CODES.IL) {
    return CURRENCY_CODES.ILS;
  }

  // EU countries -> EUR
  if (
    EU_COUNTRY_CODES.includes(countryCode as (typeof EU_COUNTRY_CODES)[number])
  ) {
    return CURRENCY_CODES.EUR;
  }

  // Default -> USD
  return CURRENCY_CODES.USD;
};
