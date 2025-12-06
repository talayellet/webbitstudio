export const COUNTRY_CODES = {
  DE: 'de',
  EN: 'en',
  ES: 'es',
  FR: 'fr',
  HE: 'he',
} as const;
export type CountryCode = (typeof COUNTRY_CODES)[keyof typeof COUNTRY_CODES];

export const COUNTRY_LABELS = {
  DE: 'Deutsch',
  EN: 'English',
  ES: 'Español',
  FR: 'Français',
  HE: 'עברית',
} as const;
export type CountryLabel = (typeof COUNTRY_LABELS)[keyof typeof COUNTRY_LABELS];

export const COUNTRY_FLAGS = {
  DE: '🇩🇪',
  EN: '🇺🇸',
  ES: '🇪🇸',
  FR: '🇫🇷',
  HE: '🇮🇱',
} as const;

export type CountryFlag = (typeof COUNTRY_FLAGS)[keyof typeof COUNTRY_FLAGS];

/**
 * ISO 3166-1 alpha-2 country codes
 * Add more country codes as needed for geo-filtering
 */
export const ISO_COUNTRY_CODES = {
  IL: 'IL', // Israel (Hebrew)
  US: 'US', // United States (English)
  DE: 'DE', // Germany (German)
  FR: 'FR', // France (French)
  ES: 'ES', // Spain (Spanish)
} as const;

export type ISOCountryCode =
  (typeof ISO_COUNTRY_CODES)[keyof typeof ISO_COUNTRY_CODES];

export interface GeoLocationCache {
  country: string; // Keep as string since API can return any country code
  timestamp: number;
}

export interface LanguageFilter {
  /**
   * Language code to filter (e.g., 'he', 'ar')
   */
  languageCode: CountryCode;
  /**
   * Country codes that should see this language (e.g., ['IL'] for Hebrew)
   */
  allowedCountries: ISOCountryCode[];
}

export interface LanguageOption {
  code: CountryCode;
  flag: CountryFlag;
  label: CountryLabel;
}
