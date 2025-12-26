import { useState } from 'react';
import { useSession } from '@webbitstudio/data-access';
import { ECommerceHomePage } from './components';
import { useECommerceNavigation } from './hooks';
import {
  getCategoriesForLanguage,
  E_COMMERCE_DEFAULT_LANGUAGES,
  Language,
} from './utils';
import { getLocaleForLanguage } from '../../shared';

export interface HomePageContainerProps {
  currentLanguage: Language;
  onLanguageChange: (languageCode: string) => void;
}

/**
 * Home Page Container with Navigation
 *
 * Reusable container component that handles:
 * - Authentication state via useSession hook
 * - Navigation handlers via useECommerceNavigation hook
 * - Data fetching and transformation
 * - Clean separation of concerns
 *
 * @example
 * ```tsx
 * <HomePageContainer
 *   currentLanguage={currentLanguage}
 *   onLanguageChange={handleLanguageChange}
 * />
 * ```
 */
export const HomePageContainer = ({
  currentLanguage,
  onLanguageChange,
}: HomePageContainerProps) => {
  const [cartItemCount] = useState(0);
  const { user, isLoading } = useSession();
  const {
    handleLogin,
    handleSignup,
    handleLogout,
    handleCartClick,
    handleCategoryClick,
  } = useECommerceNavigation();

  const locale = getLocaleForLanguage(currentLanguage.code);

  if (isLoading) {
    return <div>{locale.ROUTER.LOADING}</div>;
  }

  return (
    <ECommerceHomePage
      cartItemCount={cartItemCount}
      categories={getCategoriesForLanguage(currentLanguage.code)}
      currentLanguage={currentLanguage}
      languages={E_COMMERCE_DEFAULT_LANGUAGES}
      locale={locale}
      onLogin={handleLogin}
      onSignup={handleSignup}
      onLogout={user ? handleLogout : undefined}
      onCartClick={handleCartClick}
      onCategoryClick={handleCategoryClick}
      onLanguageChange={onLanguageChange}
      user={user || undefined}
    />
  );
};
