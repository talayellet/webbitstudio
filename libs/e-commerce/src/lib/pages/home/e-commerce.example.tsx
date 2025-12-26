import { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { ECommerceHomePage } from './e-commerce-home-page';
import { LoginPage } from '../login/login-page';
import {
  ENGLISH_LOCALE,
  ENGLISH_LOGIN_LOCALE,
  HEBREW_LOCALE,
  HEBREW_LOGIN_LOCALE,
  SPANISH_LOCALE,
  SPANISH_LOGIN_LOCALE,
} from '../../locale';
import type { ShoppingCategory, Language, Locale } from './utils/types';
import { LoginPageLocale } from '../../shared';

/**
 * Complete Example: Home Page with Login Integration
 *
 * This example demonstrates how to properly connect the home page
 * with the login page using React Router.
 */

// Helper function to get locale based on language code
const getLocaleForLanguage = (languageCode: string): Locale => {
  switch (languageCode) {
    case 'es':
      return SPANISH_LOCALE;
    case 'he':
      return HEBREW_LOCALE;
    default:
      return ENGLISH_LOCALE;
  }
};

// Helper function to get login locale based on language code
const getLoginLocaleForLanguage = (languageCode: string): LoginPageLocale => {
  switch (languageCode) {
    case 'es':
      return SPANISH_LOGIN_LOCALE;
    case 'he':
      return HEBREW_LOGIN_LOCALE;
    default:
      return ENGLISH_LOGIN_LOCALE;
  }
};

// Sample categories data
const SAMPLE_CATEGORIES: ShoppingCategory[] = [
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

const SAMPLE_LANGUAGES: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'es', name: 'Spanish', nativeName: 'Español' },
  { code: 'he', name: 'Hebrew', nativeName: 'עברית' },
];

// Home Page Container with Navigation
const HomePageContainer = ({
  currentLanguage,
  onLanguageChange,
}: {
  currentLanguage: Language;
  onLanguageChange: (languageCode: string) => void;
}) => {
  const navigate = useNavigate();
  const [cartItemCount] = useState(0);

  const locale = getLocaleForLanguage(currentLanguage.code);

  const handleLogin = () => {
    // Navigate to login page when login button is clicked
    navigate('/login');
  };

  const handleSignup = () => {
    navigate('/signup');
  };

  const handleCartClick = () => {
    navigate('/cart');
  };

  const handleCategoryClick = (categoryId: string) => {
    navigate(`/category/${categoryId}`);
  };

  return (
    <ECommerceHomePage
      cartItemCount={cartItemCount}
      categories={SAMPLE_CATEGORIES}
      currentLanguage={currentLanguage}
      languages={SAMPLE_LANGUAGES}
      locale={locale}
      onLogin={handleLogin}
      onSignup={handleSignup}
      onCartClick={handleCartClick}
      onCategoryClick={handleCategoryClick}
      onLanguageChange={onLanguageChange}
    />
  );
};

// Login Page Container with Navigation
const LoginPageContainer = ({
  currentLanguage,
  onLanguageChange,
}: {
  currentLanguage: Language;
  onLanguageChange: (languageCode: string) => void;
}) => {
  const navigate = useNavigate();

  const loginLocale = getLoginLocaleForLanguage(currentLanguage.code);

  const handleLogin = async (email: string, password: string) => {
    try {
      console.log('Logging in with:', { email, password });

      // Here you would call your authentication API
      // await authService.login(email, password);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // After successful login, navigate to home page
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error);
      // Handle error (show toast notification, etc.)
    }
  };

  const handleSignup = () => {
    navigate('/signup');
  };

  const handleForgotPassword = () => {
    navigate('/forgot-password');
  };

  const handleGoogleLogin = () => {
    console.log('Login with Google');
    // Implement Google OAuth login here
  };

  const handleFacebookLogin = () => {
    console.log('Login with Facebook');
    // Implement Facebook OAuth login here
  };

  const handleAppleLogin = () => {
    console.log('Login with Apple');
    // Implement Apple Sign In here
  };

  return (
    <div style={{ position: 'relative' }}>
      {/* Language Selector for Login Page */}
      <div style={{ position: 'fixed', top: 20, right: 20, zIndex: 100 }}>
        <select
          value={currentLanguage.code}
          onChange={(e) => onLanguageChange(e.target.value)}
          style={{
            padding: '8px 12px',
            borderRadius: '8px',
            border: '1px solid #ccc',
            cursor: 'pointer',
          }}
        >
          {SAMPLE_LANGUAGES.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.nativeName}
            </option>
          ))}
        </select>
      </div>

      <LoginPage
        isRtl={currentLanguage.code === 'he'}
        locale={loginLocale}
        onLogin={handleLogin}
        onSignup={handleSignup}
        onForgotPassword={handleForgotPassword}
        onGoogleLogin={handleGoogleLogin}
        onFacebookLogin={handleFacebookLogin}
        onAppleLogin={handleAppleLogin}
        showSocialLogin={true}
      />
    </div>
  );
};

// Main App with Routing
export const ECommerceExample = () => {
  const [currentLanguage, setCurrentLanguage] = useState(SAMPLE_LANGUAGES[0]);

  const handleLanguageChange = (languageCode: string) => {
    const newLanguage = SAMPLE_LANGUAGES.find(
      (lang) => lang.code === languageCode
    );
    if (newLanguage) {
      setCurrentLanguage(newLanguage);
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <HomePageContainer
              currentLanguage={currentLanguage}
              onLanguageChange={handleLanguageChange}
            />
          }
        />
        <Route
          path="/login"
          element={
            <LoginPageContainer
              currentLanguage={currentLanguage}
              onLanguageChange={handleLanguageChange}
            />
          }
        />
        <Route
          path="/signup"
          element={<div>Signup Page (to be implemented)</div>}
        />
        <Route
          path="/cart"
          element={<div>Cart Page (to be implemented)</div>}
        />
        <Route
          path="/forgot-password"
          element={<div>Forgot Password Page (to be implemented)</div>}
        />
        <Route
          path="/category/:id"
          element={<div>Category Page (to be implemented)</div>}
        />
      </Routes>
    </BrowserRouter>
  );
};
