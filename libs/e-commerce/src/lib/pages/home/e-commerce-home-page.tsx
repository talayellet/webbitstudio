import {
  HOME_PAGE_STYLES,
  User,
  ShoppingCategory,
  Language,
  Locale,
} from './utils';
import { Footer, Header, Main } from './components';
import { HEBREW } from '../../locale';

/**
 * eCommerce Home Page Component
 *
 * A comprehensive home page for an eCommerce website featuring:
 * - Sticky header with logo, authentication, cart, location, and language options
 * - Shopping categories grid with cards
 * - Sticky footer with legal and contact links
 *
 * @example
 * ```tsx
 * <ECommerceHomePage
 *   logo={<img src="logo.png" alt="My Store" />}
 *   cartItemCount={3}
 *   categories={categoryData}
 *   user={currentUser}
 *   locale={ENGLISH_LOCALE}
 *   onLogin={handleLogin}
 *   onCategoryClick={handleCategoryClick}
 * />
 * ```
 */
export interface HomePageProps {
  /** Custom logo element (defaults to WebbitLogo if not provided) */
  logo?: React.ReactNode;
  /** Currently signed-in user */
  user?: User;
  /** Number of items in shopping cart */
  cartItemCount: number;
  /** Available shopping categories */
  categories: ShoppingCategory[];
  /** Current selected language */
  currentLanguage?: Language;
  /** Available languages */
  languages?: Language[];
  /** Localized text content */
  locale: Locale;
  /** Callback when login is clicked */
  onLogin?: () => void;
  /** Callback when signup is clicked */
  onSignup?: () => void;
  /** Callback when cart is clicked */
  onCartClick?: () => void;
  /** Callback when category is clicked */
  onCategoryClick?: (categoryId: string) => void;
  /** Callback when language changes */
  onLanguageChange?: (languageCode: string) => void;
  /** Callback for privacy policy link */
  onPrivacyPolicyClick?: () => void;
  /** Callback for terms of service link */
  onTermsClick?: () => void;
  /** Callback for cookie policy link */
  onCookiePolicyClick?: () => void;
  /** Callback for contact us link */
  onContactClick?: () => void;
}

export const ECommerceHomePage = ({
  logo,
  user,
  cartItemCount,
  categories,
  currentLanguage,
  languages = [],
  locale,
  onLogin,
  onSignup,
  onCartClick,
  onCategoryClick,
  onLanguageChange,
  onPrivacyPolicyClick,
  onTermsClick,
  onCookiePolicyClick,
  onContactClick,
}: HomePageProps) => {
  const isRtl = currentLanguage?.code === HEBREW;

  return (
    <div
      className={HOME_PAGE_STYLES.PAGE_CONTAINER}
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      {/* Header */}
      <Header
        logo={logo}
        user={user}
        cartItemCount={cartItemCount}
        currentLanguage={currentLanguage}
        languages={languages}
        isRtl={isRtl}
        locale={{
          DEFAULT_STORE_NAME: locale.DEFAULT_STORE_NAME,
          HEADER: locale.HEADER,
        }}
        onLogin={onLogin}
        onSignup={onSignup}
        onCartClick={onCartClick}
        onLanguageChange={onLanguageChange}
      />

      {/* Main Content */}
      <Main
        categories={categories}
        locale={{ SHOP_BY_CATEGORY: locale.SHOP_BY_CATEGORY }}
        onCategoryClick={onCategoryClick}
      />

      {/* Footer */}
      <Footer
        locale={locale.FOOTER}
        onPrivacyPolicyClick={onPrivacyPolicyClick}
        onTermsClick={onTermsClick}
        onCookiePolicyClick={onCookiePolicyClick}
        onContactClick={onContactClick}
      />
    </div>
  );
};
