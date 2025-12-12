import { DEFAULT_COLORS } from './styles';
import { ShowSections } from './types';
import { en } from './locales';
import { LOCALES } from '../../shared';
import {
  type LanguageFilter,
  type LanguageOption,
  ISO_COUNTRY_CODES,
  COUNTRY_CODES,
  COUNTRY_FLAGS,
  COUNTRY_LABELS,
} from '@webbitstudio/shared-utils';

export * from './locales';
export type { LanguageOption } from '@webbitstudio/shared-utils';

// ============================================================================
// Default Locale Strings
// ============================================================================

export const DEFAULT_LOCALE_STRINGS = en;

// ============================================================================
// Language Options
// ============================================================================

export const DEFAULT_LANGUAGE_OPTIONS: LanguageOption[] = [
  { code: COUNTRY_CODES.EN, flag: COUNTRY_FLAGS.EN, label: COUNTRY_LABELS.EN },
  { code: COUNTRY_CODES.ES, flag: COUNTRY_FLAGS.ES, label: COUNTRY_LABELS.ES },
  { code: COUNTRY_CODES.FR, flag: COUNTRY_FLAGS.FR, label: COUNTRY_LABELS.FR },
  { code: COUNTRY_CODES.HE, flag: COUNTRY_FLAGS.HE, label: COUNTRY_LABELS.HE },
];

// ============================================================================
// Language Filters (Geo-based)
// ============================================================================

/**
 * Language filters for geo-based language availability
 * Hebrew is restricted to Israel only
 */
export const DEFAULT_LANGUAGE_FILTERS: LanguageFilter[] = [
  {
    languageCode: COUNTRY_CODES.HE,
    allowedCountries: [ISO_COUNTRY_CODES.IL],
  },
];

// ============================================================================
// Default Locale
// ============================================================================

export const DEFAULT_LOCALE = LOCALES.EN;

// ============================================================================
// Show Sections
// ============================================================================

export const DEFAULT_SHOW_SECTIONS: ShowSections = {
  hero: true,
  about: true,
  menu: true,
  info: true,
  reservation: true,
} as const;

// ============================================================================
// Footer
// ============================================================================

export const FOOTER_PATHS = {
  ABOUT: '#about',
  MENU: '#menu',
  CONTACT: '#contact',
  INSTAGRAM: 'https://instagram.com',
  FACEBOOK: 'https://facebook.com',
  TWITTER: 'https://twitter.com',
} as const;

// ============================================================================
// Default Template Values
// ============================================================================

export const DEFAULT_TEMPLATE = {
  restaurantName: 'Restaurant Name',
  logo: null,
  colors: DEFAULT_COLORS,
} as const;
