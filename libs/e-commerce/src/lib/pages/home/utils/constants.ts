/**
 * Constants for the eCommerce home page
 */

export const DEFAULT_LOCALE = {
  DEFAULT_STORE_NAME: 'Store',
  SHOP_BY_CATEGORY: 'Shop by Category',
  HEADER: {
    LOGIN: 'Login',
    SIGNUP: 'Sign Up',
    CART_ARIA_LABEL: 'Shopping cart',
    ITEMS_IN_CART: 'items in cart',
    LOCATION_ARIA_LABEL: 'Select location',
    LANGUAGE_ARIA_LABEL: 'Select language',
    LOGO_ALT: 'Store logo',
  },
  FOOTER: {
    PRIVACY_POLICY: 'Privacy Policy',
    TERMS_OF_SERVICE: 'Terms of Service',
    COOKIE_POLICY: 'Cookie Policy',
    CONTACT_US: 'Contact Us',
    BACK_TO_TOP: 'Back to Top',
  },
  CATEGORIES: {
    VIEW_ALL: 'View all',
  },
} as const;

export type LocaleType = {
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
};

/**
 * Hebrew locale
 */
export const HEBREW_LOCALE: LocaleType = {
  DEFAULT_STORE_NAME: 'חנות',
  SHOP_BY_CATEGORY: 'קנו לפי קטגוריה',
  HEADER: {
    LOGIN: 'התחברות',
    SIGNUP: 'הרשמה',
    CART_ARIA_LABEL: 'עגלת קניות',
    ITEMS_IN_CART: 'פריטים בעגלה',
    LOCATION_ARIA_LABEL: 'בחר מיקום',
    LANGUAGE_ARIA_LABEL: 'בחר שפה',
    LOGO_ALT: 'לוגו החנות',
  },
  FOOTER: {
    PRIVACY_POLICY: 'מדיניות פרטיות',
    TERMS_OF_SERVICE: 'תנאי שימוש',
    COOKIE_POLICY: 'מדיניות עוגיות',
    CONTACT_US: 'צור קשר',
    BACK_TO_TOP: 'חזרה למעלה',
  },
  CATEGORIES: {
    VIEW_ALL: 'צפה בהכל',
  },
};

/**
 * Spanish locale
 */
export const SPANISH_LOCALE: LocaleType = {
  DEFAULT_STORE_NAME: 'Tienda',
  SHOP_BY_CATEGORY: 'Comprar por Categoría',
  HEADER: {
    LOGIN: 'Iniciar sesión',
    SIGNUP: 'Registrarse',
    CART_ARIA_LABEL: 'Carrito de compras',
    ITEMS_IN_CART: 'artículos en el carrito',
    LOCATION_ARIA_LABEL: 'Seleccionar ubicación',
    LANGUAGE_ARIA_LABEL: 'Seleccionar idioma',
    LOGO_ALT: 'Logo de la tienda',
  },
  FOOTER: {
    PRIVACY_POLICY: 'Política de privacidad',
    TERMS_OF_SERVICE: 'Términos de servicio',
    COOKIE_POLICY: 'Política de cookies',
    CONTACT_US: 'Contáctenos',
    BACK_TO_TOP: 'Volver arriba',
  },
  CATEGORIES: {
    VIEW_ALL: 'Ver todo',
  },
};
