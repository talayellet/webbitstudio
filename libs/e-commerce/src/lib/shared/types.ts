/**
 * Shared type definitions for the eCommerce library
 */

export interface ShoppingCategory {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  subCategories?: string[];
}

export interface HomePageLocale {
  DEFAULT_STORE_NAME: string;
  SHOP_BY_CATEGORY: string;
  HEADER: {
    LOGIN: string;
    SIGNUP: string;
    LOGOUT: string;
    CART_ARIA_LABEL: string;
    ITEMS_IN_CART: string;
    LOCATION_ARIA_LABEL: string;
    LANGUAGE_ARIA_LABEL: string;
    LANGUAGE_PLACEHOLDER: string;
    LOGO_ALT: string;
    WELCOME: string;
  };
  FOOTER: {
    PRIVACY_POLICY: string;
    TERMS_OF_SERVICE: string;
    COOKIE_POLICY: string;
    CONTACT_US: string;
    BACK_TO_TOP: string;
    FOOTER_ARIA_LABEL: string;
  };
  CATEGORIES: {
    VIEW_ALL: string;
  };
  ROUTER: {
    LOADING: string;
    ERROR_LOADING_HOME: string;
    ERROR_LOADING_LOGIN: string;
    SIGNUP_PAGE_PLACEHOLDER: string;
    CART_PAGE_PLACEHOLDER: string;
    FORGOT_PASSWORD_PAGE_PLACEHOLDER: string;
    CATEGORY_PAGE_PLACEHOLDER: string;
  };
}

export interface LoginPageLocale {
  PAGE_TITLE: string;
  EMAIL_LABEL: string;
  EMAIL_PLACEHOLDER: string;
  PASSWORD_LABEL: string;
  PASSWORD_PLACEHOLDER: string;
  LOGIN_BUTTON: string;
  FORGOT_PASSWORD: string;
  NO_ACCOUNT: string;
  SIGNUP_LINK: string;
  OR_DIVIDER: string;
  CONTINUE_WITH_GOOGLE: string;
  CONTINUE_WITH_FACEBOOK: string;
  EMAIL_REQUIRED: string;
  EMAIL_INVALID: string;
  PASSWORD_REQUIRED: string;
  PASSWORD_MIN_LENGTH: string;
  LOGGING_IN: string;
  LOGIN_ERROR_GENERIC: string;
  LANGUAGE_PLACEHOLDER: string;
}
