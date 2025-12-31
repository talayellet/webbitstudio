/**
 * Locale definitions for the eCommerce Home Page
 */

import type { ShoppingCategory, HomePageLocale } from '../shared';

export const ENGLISH_LOCALE: HomePageLocale = {
  DEFAULT_STORE_NAME: 'Store',
  SHOP_BY_CATEGORY: 'Shop by Category',
  HEADER: {
    LOGIN: 'Login',
    SIGNUP: 'Sign Up',
    LOGOUT: 'Log Out',
    CART_ARIA_LABEL: 'Shopping cart',
    ITEMS_IN_CART: 'items in cart',
    LOCATION_ARIA_LABEL: 'Select location',
    LANGUAGE_ARIA_LABEL: 'Select language',
    LANGUAGE_PLACEHOLDER: 'Select language',
    LOGO_ALT: 'Store logo',
    WELCOME: 'Welcome',
  },
  FOOTER: {
    PRIVACY_POLICY: 'Privacy Policy',
    TERMS_OF_SERVICE: 'Terms of Service',
    COOKIE_POLICY: 'Cookie Policy',
    CONTACT_US: 'Contact Us',
    BACK_TO_TOP: 'Back to Top',
    FOOTER_ARIA_LABEL: 'Footer navigation',
  },
  CATEGORIES: {
    VIEW_ALL: 'View all',
  },
  ROUTER: {
    LOADING: 'Loading...',
    ERROR_LOADING_HOME: 'Error loading home page',
    ERROR_LOADING_LOGIN: 'Error loading login page',
    SIGNUP_PAGE_PLACEHOLDER: 'Signup Page (to be implemented)',
    CART_PAGE_PLACEHOLDER: 'Cart Page (to be implemented)',
    FORGOT_PASSWORD_PAGE_PLACEHOLDER:
      'Forgot Password Page (to be implemented)',
    CATEGORY_PAGE_PLACEHOLDER: 'Category Page (to be implemented)',
  },
};

export const HEBREW_LOCALE: HomePageLocale = {
  DEFAULT_STORE_NAME: 'חנות',
  SHOP_BY_CATEGORY: 'קנו לפי קטגוריה',
  HEADER: {
    LOGIN: 'התחברות',
    SIGNUP: 'הרשמה',
    LOGOUT: 'התנתק',
    CART_ARIA_LABEL: 'עגלת קניות',
    ITEMS_IN_CART: 'פריטים בעגלה',
    LOCATION_ARIA_LABEL: 'בחר מיקום',
    LANGUAGE_ARIA_LABEL: 'בחר שפה',
    LANGUAGE_PLACEHOLDER: 'בחר שפה',
    LOGO_ALT: 'לוגו החנות',
    WELCOME: 'שלום',
  },
  FOOTER: {
    PRIVACY_POLICY: 'מדיניות פרטיות',
    TERMS_OF_SERVICE: 'תנאי שימוש',
    COOKIE_POLICY: 'מדיניות עוגיות',
    CONTACT_US: 'צור קשר',
    BACK_TO_TOP: 'חזרה למעלה',
    FOOTER_ARIA_LABEL: 'ניווט תחתון',
  },
  CATEGORIES: {
    VIEW_ALL: 'צפה בהכל',
  },
  ROUTER: {
    LOADING: 'טוען...',
    ERROR_LOADING_HOME: 'שגיאה בטעינת דף הבית',
    ERROR_LOADING_LOGIN: 'שגיאה בטעינת דף התחברות',
    SIGNUP_PAGE_PLACEHOLDER: 'דף הרשמה (ייושם בקרוב)',
    CART_PAGE_PLACEHOLDER: 'דף עגלת קניות (ייושם בקרוב)',
    FORGOT_PASSWORD_PAGE_PLACEHOLDER: 'דף שכחתי סיסמה (ייושם בקרוב)',
    CATEGORY_PAGE_PLACEHOLDER: 'דף קטגוריה (ייושם בקרוב)',
  },
};

export const SPANISH_LOCALE: HomePageLocale = {
  DEFAULT_STORE_NAME: 'Tienda',
  SHOP_BY_CATEGORY: 'Comprar por Categoría',
  HEADER: {
    LOGIN: 'Iniciar sesión',
    SIGNUP: 'Registrarse',
    LOGOUT: 'Cerrar sesión',
    CART_ARIA_LABEL: 'Carrito de compras',
    ITEMS_IN_CART: 'artículos en el carrito',
    LOCATION_ARIA_LABEL: 'Seleccionar ubicación',
    LANGUAGE_ARIA_LABEL: 'Seleccionar idioma',
    LANGUAGE_PLACEHOLDER: 'Seleccionar idioma',
    LOGO_ALT: 'Logo de la tienda',
    WELCOME: 'Bienvenido',
  },
  FOOTER: {
    PRIVACY_POLICY: 'Política de privacidad',
    TERMS_OF_SERVICE: 'Términos de servicio',
    COOKIE_POLICY: 'Política de cookies',
    CONTACT_US: 'Contáctenos',
    BACK_TO_TOP: 'Volver arriba',
    FOOTER_ARIA_LABEL: 'Navegación del pie de página',
  },
  CATEGORIES: {
    VIEW_ALL: 'Ver todo',
  },
  ROUTER: {
    LOADING: 'Cargando...',
    ERROR_LOADING_HOME: 'Error al cargar la página de inicio',
    ERROR_LOADING_LOGIN: 'Error al cargar la página de inicio de sesión',
    SIGNUP_PAGE_PLACEHOLDER: 'Página de registro (por implementar)',
    CART_PAGE_PLACEHOLDER: 'Página del carrito (por implementar)',
    FORGOT_PASSWORD_PAGE_PLACEHOLDER:
      'Página de contraseña olvidada (por implementar)',
    CATEGORY_PAGE_PLACEHOLDER: 'Página de categoría (por implementar)',
  },
};

export const ENGLISH_CATEGORIES: ShoppingCategory[] = [
  {
    id: 'electronics',
    name: 'Electronics',
    description:
      'Smartphones, Laptops, Tablets, Smart Watches, Headphones & more',
    imageUrl:
      'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400',
    subCategories: ['Phones', 'Computers', 'Audio', 'Cameras'],
  },
  {
    id: 'fashion',
    name: 'Fashion',
    description:
      'Clothing, Shoes, Bags, Jewelry, Accessories for Men, Women & Kids',
    imageUrl:
      'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400',
    subCategories: ['Men', 'Women', 'Kids', 'Accessories'],
  },
  {
    id: 'home-garden',
    name: 'Home & Garden',
    description: 'Furniture, Decor, Kitchen, Garden Tools, Smart Home Devices',
    imageUrl: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=400',
    subCategories: ['Furniture', 'Kitchen', 'Garden', 'Decor'],
  },
  {
    id: 'sports',
    name: 'Sports & Outdoors',
    description:
      'Fitness Equipment, Camping Gear, Sports Apparel, Outdoor Activities',
    imageUrl:
      'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400',
    subCategories: ['Fitness', 'Camping', 'Team Sports', 'Water Sports'],
  },
  {
    id: 'books',
    name: 'Books & Media',
    description: 'Books, E-books, Audiobooks, Movies, Music, Video Games',
    imageUrl:
      'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400',
    subCategories: ['Books', 'E-books', 'Movies', 'Music'],
  },
  {
    id: 'toys',
    name: 'Toys & Games',
    description:
      'Educational Toys, Board Games, Puzzles, Action Figures, Dolls',
    imageUrl:
      'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=400',
    subCategories: [
      'Educational',
      'Board Games',
      'Action Figures',
      'Outdoor Toys',
    ],
  },
  {
    id: 'health',
    name: 'Health & Beauty',
    description: 'Skincare, Makeup, Hair Care, Vitamins, Wellness Products',
    imageUrl: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400',
    subCategories: ['Skincare', 'Makeup', 'Hair Care', 'Wellness'],
  },
  {
    id: 'automotive',
    name: 'Automotive',
    description: 'Car Parts, Tools, Accessories, Car Care, Electronics',
    imageUrl:
      'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400',
    subCategories: ['Parts', 'Tools', 'Accessories', 'Car Care'],
  },
];

export const SPANISH_CATEGORIES: ShoppingCategory[] = [
  {
    id: 'electronics',
    name: 'Electrónica',
    description:
      'Smartphones, Portátiles, Tabletas, Relojes Inteligentes, Auriculares y más',
    imageUrl:
      'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400',
    subCategories: ['Teléfonos', 'Computadoras', 'Audio', 'Cámaras'],
  },
  {
    id: 'fashion',
    name: 'Moda',
    description:
      'Ropa, Zapatos, Bolsos, Joyería, Accesorios para Hombres, Mujeres y Niños',
    imageUrl:
      'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400',
    subCategories: ['Hombres', 'Mujeres', 'Niños', 'Accesorios'],
  },
  {
    id: 'home-garden',
    name: 'Hogar y Jardín',
    description:
      'Muebles, Decoración, Cocina, Herramientas de Jardín, Dispositivos Inteligentes',
    imageUrl: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=400',
    subCategories: ['Muebles', 'Cocina', 'Jardín', 'Decoración'],
  },
  {
    id: 'sports',
    name: 'Deportes y Aire Libre',
    description:
      'Equipos de Fitness, Equipo de Camping, Ropa Deportiva, Actividades al Aire Libre',
    imageUrl:
      'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400',
    subCategories: [
      'Fitness',
      'Camping',
      'Deportes de Equipo',
      'Deportes Acuáticos',
    ],
  },
  {
    id: 'books',
    name: 'Libros y Medios',
    description: 'Libros, E-books, Audiolibros, Películas, Música, Videojuegos',
    imageUrl:
      'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400',
    subCategories: ['Libros', 'E-books', 'Películas', 'Música'],
  },
  {
    id: 'toys',
    name: 'Juguetes y Juegos',
    description:
      'Juguetes Educativos, Juegos de Mesa, Rompecabezas, Figuras de Acción, Muñecas',
    imageUrl:
      'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=400',
    subCategories: [
      'Educativos',
      'Juegos de Mesa',
      'Figuras de Acción',
      'Juguetes de Exterior',
    ],
  },
  {
    id: 'health',
    name: 'Salud y Belleza',
    description:
      'Cuidado de la Piel, Maquillaje, Cuidado del Cabello, Vitaminas, Productos de Bienestar',
    imageUrl: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400',
    subCategories: [
      'Cuidado de la Piel',
      'Maquillaje',
      'Cuidado del Cabello',
      'Bienestar',
    ],
  },
  {
    id: 'automotive',
    name: 'Automotriz',
    description:
      'Piezas de Auto, Herramientas, Accesorios, Cuidado del Auto, Electrónica',
    imageUrl:
      'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400',
    subCategories: ['Piezas', 'Herramientas', 'Accesorios', 'Cuidado del Auto'],
  },
];

export const HEBREW_CATEGORIES: ShoppingCategory[] = [
  {
    id: 'electronics',
    name: 'אלקטרוניקה',
    description:
      'סמארטפונים, מחשבים ניידים, טאבלטים, שעונים חכמים, אוזניות ועוד',
    imageUrl:
      'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400',
    subCategories: ['טלפונים', 'מחשבים', 'אודיו', 'מצלמות'],
  },
  {
    id: 'fashion',
    name: 'אופנה',
    description: 'בגדים, נעליים, תיקים, תכשיטים, אביזרים לגברים, נשים וילדים',
    imageUrl:
      'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400',
    subCategories: ['גברים', 'נשים', 'ילדים', 'אביזרים'],
  },
  {
    id: 'home-garden',
    name: 'בית וגן',
    description: 'רהיטים, עיצוב, מטבח, כלי גינון, מכשירים חכמים',
    imageUrl: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=400',
    subCategories: ['רהיטים', 'מטבח', 'גן', 'עיצוב'],
  },
  {
    id: 'sports',
    name: 'ספורט וחוץ',
    description: 'ציוד כושר, ציוד קמפינג, ביגוד ספורט, פעילויות חוץ',
    imageUrl:
      'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400',
    subCategories: ['כושר', 'קמפינג', 'ספורט קבוצתי', 'ספורט ימי'],
  },
  {
    id: 'books',
    name: 'ספרים ומדיה',
    description: 'ספרים, ספרים דיגיטליים, ספרי שמע, סרטים, מוזיקה, משחקי וידאו',
    imageUrl:
      'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400',
    subCategories: ['ספרים', 'ספרים דיגיטליים', 'סרטים', 'מוזיקה'],
  },
  {
    id: 'toys',
    name: 'צעצועים ומשחקים',
    description: 'צעצועים חינוכיים, משחקי לוח, פאזלים, דמויות אקשן, בובות',
    imageUrl:
      'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=400',
    subCategories: ['חינוכיים', 'משחקי לוח', 'דמויות אקשן', 'צעצועי חוץ'],
  },
  {
    id: 'health',
    name: 'בריאות ויופי',
    description: 'טיפוח עור, איפור, טיפוח שיער, ויטמינים, מוצרי בריאות',
    imageUrl: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400',
    subCategories: ['טיפוח עור', 'איפור', 'טיפוח שיער', 'בריאות'],
  },
  {
    id: 'automotive',
    name: 'רכב',
    description: 'חלקי רכב, כלים, אביזרים, טיפול ברכב, אלקטרוניקה',
    imageUrl:
      'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400',
    subCategories: ['חלקי חילוף', 'כלים', 'אביזרים', 'טיפול ברכב'],
  },
];
