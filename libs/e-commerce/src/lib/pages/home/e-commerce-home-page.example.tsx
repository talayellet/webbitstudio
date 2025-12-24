/**
 * Example usage of the ECommerceHomePage component
 * This file demonstrates how to use the component with sample data
 */

import { useState, useMemo } from 'react';
import { ECommerceHomePage } from './e-commerce-home-page';
import type { ShoppingCategory, User, Location, Language } from './utils';
import {
  DEFAULT_LOCALE,
  HEBREW_LOCALE,
  SPANISH_LOCALE,
} from './utils/constants';

/**
 * Sample data for demonstration purposes
 */
export const SAMPLE_USER: User = {
  id: 'user-123',
  name: 'Jane Smith',
  email: 'jane.smith@example.com',
};

export const SAMPLE_CATEGORIES: ShoppingCategory[] = [
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
      'Teléfonos, Laptops, Tablets, Relojes Inteligentes, Auriculares y más',
    imageUrl:
      'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400',
    subCategories: ['Teléfonos', 'Computadoras', 'Audio', 'Cámaras'],
  },
  {
    id: 'fashion',
    name: 'Moda',
    description:
      'Ropa, Zapatos, Bolsas, Joyas, Accesorios para Hombres, Mujeres y Niños',
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
    name: 'Deportes y Actividades Outdoor',
    description:
      'Equipo de Fitness, Equipamiento de Camping, Ropa Deportiva, Actividades Outdoor',
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
    description:
      'Libros, Libros Electrónicos, Audiolibros, Películas, Música, Videojuegos',
    imageUrl:
      'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400',
    subCategories: ['Libros', 'Libros Electrónicos', 'Películas', 'Música'],
  },
  {
    id: 'toys',
    name: 'Juguetes y Juegos',
    description:
      'Juguetes Educativos, Juegos de Mesa, Rompecabezas, Figuras de Acción, Muñecas',
    imageUrl:
      'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=400',
    subCategories: [
      'Educativo',
      'Juegos de Mesa',
      'Figuras de Acción',
      'Juguetes Outdoor',
    ],
  },
  {
    id: 'health',
    name: 'Salud y Belleza',
    description:
      'Cuidado de Piel, Maquillaje, Cuidado del Cabello, Vitaminas, Productos de Bienestar',
    imageUrl: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400',
    subCategories: [
      'Cuidado de Piel',
      'Maquillaje',
      'Cuidado del Cabello',
      'Bienestar',
    ],
  },
  {
    id: 'automotive',
    name: 'Automoción',
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
    description: 'טלפונים, מחשבים נישמים, טאבלטים, שעונים חכמים, אוזניות ועוד',
    imageUrl:
      'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400',
    subCategories: ['טלפונים', 'מחשבים', 'אודיו', 'מצלמות'],
  },
  {
    id: 'fashion',
    name: 'אופנה',
    description: 'ביגוד, נעליים, תיקים, תכשיטים, אביזרים לגברים, נשים וילדים',
    imageUrl:
      'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400',
    subCategories: ['גברים', 'נשים', 'ילדים', 'אביזרים'],
  },
  {
    id: 'home-garden',
    name: 'בית וגן',
    description: 'רהיטים, קישוט, מטבח, כלים לגן, מכשירים חכמים',
    imageUrl: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=400',
    subCategories: ['רהיטים', 'מטבח', 'גן', 'קישוט'],
  },
  {
    id: 'sports',
    name: 'ספורט וטבע',
    description: 'ציוד כושר, ציוד קמפינג, ביגוד ספורט, פעילויות בטבע',
    imageUrl:
      'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400',
    subCategories: ['כושר', 'קמפינג', 'ספורט קבוצתי', 'ספורט מימי'],
  },
  {
    id: 'books',
    name: 'ספרים ומדיה',
    description:
      'ספרים, ספרים דיגיטליים, ספרי אודיו, סרטים, מוזיקה, משחקי וידיאו',
    imageUrl:
      'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400',
    subCategories: ['ספרים', 'ספרים דיגיטליים', 'סרטים', 'מוזיקה'],
  },
  {
    id: 'toys',
    name: 'צעצועים ומשחקים',
    description: 'צעצועים חינוכיים, משחקי לוח, חידות, דמויות אקשן, בובות',
    imageUrl:
      'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=400',
    subCategories: ['חינוכי', 'משחקי לוח', 'דמויות אקשן', 'צעצועי חוץ'],
  },
  {
    id: 'health',
    name: 'בריאות ויופי',
    description: 'טיפול בעור, איפור, טיפול בשיער, ויטמינים, מוצרי wellness',
    imageUrl: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400',
    subCategories: ['טיפול בעור', 'איפור', 'טיפול בשיער', 'wellness'],
  },
  {
    id: 'automotive',
    name: 'אוטומוטיבי',
    description: 'חלקי רכב, כלים, אביזרים, טיפול ברכב, אלקטרוניקה',
    imageUrl:
      'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400',
    subCategories: ['חלקים', 'כלים', 'אביזרים', 'טיפול ברכב'],
  },
];

export const SAMPLE_LOCATIONS: Location[] = [
  { code: 'us', name: 'United States', flag: '🇺🇸' },
  { code: 'uk', name: 'United Kingdom', flag: '🇬🇧' },
  { code: 'ca', name: 'Canada', flag: '🇨🇦' },
  { code: 'au', name: 'Australia', flag: '🇦🇺' },
  { code: 'de', name: 'Germany', flag: '🇩🇪' },
  { code: 'fr', name: 'France', flag: '🇫🇷' },
];

export const SAMPLE_LANGUAGES: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'es', name: 'Spanish', nativeName: 'Español' },
  { code: 'he', name: 'Hebrew', nativeName: 'עברית' },
];

/**
 * Example component demonstrating the ECommerceHomePage usage
 */
export const ECommerceHomePageExample = () => {
  const handleLogin = () => {
    console.log('Navigate to login page');
  };

  const handleSignup = () => {
    console.log('Navigate to signup page');
  };

  const handleCartClick = () => {
    console.log('Navigate to cart page');
  };

  const handleCategoryClick = (categoryId: string) => {
    console.log('Navigate to category:', categoryId);
  };

  const handleLocationChange = (locationCode: string) => {
    console.log('Location changed to:', locationCode);
  };

  const handleLanguageChange = (languageCode: string) => {
    console.log('Language changed to:', languageCode);
  };

  const handlePrivacyPolicyClick = () => {
    console.log('Navigate to privacy policy');
  };

  const handleTermsClick = () => {
    console.log('Navigate to terms of service');
  };

  const handleCookiePolicyClick = () => {
    console.log('Navigate to cookie policy');
  };

  const handleContactClick = () => {
    console.log('Navigate to contact page');
  };

  return (
    <ECommerceHomePage
      storeName="WebbitStore"
      cartItemCount={3}
      categories={SAMPLE_CATEGORIES}
      user={SAMPLE_USER}
      currentLocation={SAMPLE_LOCATIONS[0]}
      locations={SAMPLE_LOCATIONS}
      currentLanguage={SAMPLE_LANGUAGES[0]}
      languages={SAMPLE_LANGUAGES}
      onLogin={handleLogin}
      onSignup={handleSignup}
      onCartClick={handleCartClick}
      onCategoryClick={handleCategoryClick}
      onLocationChange={handleLocationChange}
      onLanguageChange={handleLanguageChange}
      onPrivacyPolicyClick={handlePrivacyPolicyClick}
      onTermsClick={handleTermsClick}
      onCookiePolicyClick={handleCookiePolicyClick}
      onContactClick={handleContactClick}
    />
  );
};

/**
 * Example without user (showing login/signup)
 */
export const ECommerceHomePageGuestExample = () => {
  const [currentLanguage, setCurrentLanguage] = useState(SAMPLE_LANGUAGES[0]);
  const [currentLocation, setCurrentLocation] = useState(SAMPLE_LOCATIONS[0]);

  const locale = useMemo(() => {
    switch (currentLanguage.code) {
      case 'es':
        return SPANISH_LOCALE;
      case 'he':
        return HEBREW_LOCALE;
      default:
        return DEFAULT_LOCALE;
    }
  }, [currentLanguage.code]);

  const categories = useMemo(() => {
    switch (currentLanguage.code) {
      case 'es':
        return SPANISH_CATEGORIES;
      case 'he':
        return HEBREW_CATEGORIES;
      default:
        return SAMPLE_CATEGORIES;
    }
  }, [currentLanguage.code]);

  const handleLanguageChange = (languageCode: string) => {
    const language = SAMPLE_LANGUAGES.find(
      (lang) => lang.code === languageCode
    );
    if (language) {
      setCurrentLanguage(language);
      console.log('Language changed to:', languageCode);
    }
  };

  const handleLocationChange = (locationCode: string) => {
    const location = SAMPLE_LOCATIONS.find((loc) => loc.code === locationCode);
    if (location) {
      setCurrentLocation(location);
      console.log('Location changed to:', locationCode);
    }
  };

  return (
    <ECommerceHomePage
      storeName="WebbitStore"
      cartItemCount={0}
      categories={categories}
      currentLocation={currentLocation}
      locations={SAMPLE_LOCATIONS}
      currentLanguage={currentLanguage}
      languages={SAMPLE_LANGUAGES}
      locale={locale}
      onLogin={() => console.log('Login')}
      onSignup={() => console.log('Signup')}
      onCategoryClick={(id) => console.log('Category:', id)}
      onLanguageChange={handleLanguageChange}
      onLocationChange={handleLocationChange}
    />
  );
};
