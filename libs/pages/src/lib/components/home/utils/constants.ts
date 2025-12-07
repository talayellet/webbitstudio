import { ROUTES } from '../../../shared';

export const MAIN_CONTENT_ID = 'main-content';

export const NAV_ITEMS = [
  { id: 'packages', href: '#packages', isButton: false },
  { id: 'process', href: '#process', isButton: false },
  { id: 'pricing', href: '#pricing', isButton: false },
  { id: 'faq', href: '#faq', isButton: false },
  { id: 'contact', href: '#contact', isButton: true },
] as const;

export type NavItemId = (typeof NAV_ITEMS)[number]['id'];

export const WHY_SECTION = {
  HEADING_ID: 'why-heading',
} as const;

export const PROCESS_SECTION = {
  ID: 'process',
  HEADING_ID: 'process-heading',
} as const;

export const PRICING_SECTION = {
  ID: 'pricing',
  HEADING_ID: 'pricing-heading',
} as const;

export const PACKAGES_SECTION = {
  ID: 'packages',
  HEADING_ID: 'packages-heading',
  CONTACT_HREF: '#contact',
} as const;

export const HERO_SECTION = {
  HEADING_ID: 'hero-heading',
  CONTACT_HREF: '#contact',
  PACKAGES_HREF: '#packages',
  BROWSER_URL: 'webbitstudio.com',
} as const;

export const FOOTER = {
  PRIVACY_POLICY_HREF: ROUTES.PRIVACY_POLICY,
  TERMS_OF_SERVICE_HREF: ROUTES.TERMS_OF_SERVICE,
  COOKIE_POLICY_HREF: ROUTES.COOKIE_POLICY,
  ACCESSIBILITY_STATEMENT_HREF: ROUTES.ACCESSIBILITY_STATEMENT,
} as const;

export const FAQ_SECTION = {
  ID: 'faq',
  HEADING_ID: 'faq-heading',
  ICON_COLLAPSED: '+',
  ICON_EXPANDED: '–',
} as const;

export const CONTACT_SECTION = {
  ID: 'contact',
  HEADING_ID: 'contact-heading',
  PRIVACY_POLICY_HREF: ROUTES.PRIVACY_POLICY,
  CONSENT_ERROR_ID: 'consent-error',
} as const;
