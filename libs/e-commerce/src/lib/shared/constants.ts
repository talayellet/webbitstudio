export interface Language {
  code: string;
  name: string;
  nativeName: string;
}

export const E_COMMERCE_DEFAULT_LANGUAGES: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'es', name: 'Spanish', nativeName: 'Español' },
  { code: 'he', name: 'Hebrew', nativeName: 'עברית' },
];

export const E_COMMERCE_ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  SIGNUP: '/signup',
  CART: '/cart',
  FORGOT_PASSWORD: '/forgot-password',
  CATEGORY: '/category',
} as const;
