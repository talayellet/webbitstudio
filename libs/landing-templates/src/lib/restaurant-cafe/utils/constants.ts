import { DEFAULT_COLORS } from './styles';
import { ShowSections, LanguageOption } from './types';
import { en } from './locales';
import { LOCALES } from '../../shared';

export * from './locales';

// ============================================================================
// Default Locale Strings
// ============================================================================

export const DEFAULT_LOCALE_STRINGS = en;

// ============================================================================
// Language Options
// ============================================================================

export const DEFAULT_LANGUAGE_OPTIONS: LanguageOption[] = [
  { code: LOCALES.EN, flag: '🇺🇸', label: 'English' },
  { code: LOCALES.ES, flag: '🇪🇸', label: 'Español' },
  { code: LOCALES.FR, flag: '🇫🇷', label: 'Français' },
] as const;

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
