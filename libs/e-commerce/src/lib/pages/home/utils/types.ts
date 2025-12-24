/**
 * Type definitions for the eCommerce home page
 */

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface ShoppingCategory {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  subCategories?: string[];
}

export interface Location {
  code: string;
  name: string;
  flag?: string;
}

export interface Language {
  code: string;
  name: string;
  nativeName: string;
}

export interface Locale {
  DEFAULT_STORE_NAME: string;
  SHOP_BY_CATEGORY: string;
  HEADER: {
    LOGIN: string;
    SIGNUP: string;
    CART_ARIA_LABEL: string;
    ITEMS_IN_CART: string;
    LOCATION_ARIA_LABEL: string;
    LANGUAGE_ARIA_LABEL: string;
    LOGO_ALT: string;
  };
  FOOTER: {
    PRIVACY_POLICY: string;
    TERMS_OF_SERVICE: string;
    COOKIE_POLICY: string;
    CONTACT_US: string;
    BACK_TO_TOP: string;
  };
  CATEGORIES: {
    VIEW_ALL: string;
  };
}
