import type { CountryCode } from '@webbitstudio/shared-utils';
import { en, es, fr, de, he } from './locales';
import type { LocaleStrings } from './locales';

export const MAIN_CONTENT_ID = 'main-content';

export const NAV_ITEMS = [
  { id: 'packages', href: '#packages', isButton: false },
  { id: 'process', href: '#process', isButton: false },
  { id: 'pricing', href: '#pricing', isButton: false },
  { id: 'faq', href: '#faq', isButton: false },
  { id: 'contact', href: '#contact', isButton: true },
] as const;

export type NavItemId = (typeof NAV_ITEMS)[number]['id'];

export const LOCALE_MAP: Record<CountryCode, LocaleStrings> = {
  en,
  es,
  fr,
  de,
  he,
};
