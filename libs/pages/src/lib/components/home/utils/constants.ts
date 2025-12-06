export const NAV_ITEMS = [
  { id: 'packages', href: '#packages', isButton: false },
  { id: 'process', href: '#process', isButton: false },
  { id: 'pricing', href: '#pricing', isButton: false },
  { id: 'faq', href: '#faq', isButton: false },
  { id: 'contact', href: '#contact', isButton: true },
] as const;

export type NavItemId = (typeof NAV_ITEMS)[number]['id'];

export const CONTACT_DETAILS_MAX_LENGTH = 1000;
