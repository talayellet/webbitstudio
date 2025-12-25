import { useMemo } from 'react';
import { CustomSelect } from '@webbitstudio/ui-components';
import { ShoppingCartIcon, WebbitLogo } from '../../../../icons';
import { ENGLISH_LOCALE } from '../../../../locale';
import { User, Language, Locale, HOME_PAGE_STYLES } from '../../utils';

/**
 * eCommerce Header Component
 *
 * A sticky header featuring:
 * - Logo with fallback to WebbitLogo
 * - User authentication (login/signup) or user greeting
 * - Shopping cart with item count badge
 * - Language selector dropdown
 * - RTL support
 *
 * @example
 * ```tsx
 * <Header
 *   logo={<img src="logo.png" alt="My Store" />}
 *   cartItemCount={3}
 *   user={currentUser}
 *   onLogin={handleLogin}
 *   isRtl={false}
 * />
 * ```
 */
export interface HeaderProps {
  /** Custom logo element (defaults to WebbitLogo if not provided) */
  logo?: React.ReactNode;
  /** Currently signed-in user */
  user?: User;
  /** Number of items in shopping cart */
  cartItemCount: number;
  /** Current selected language */
  currentLanguage?: Language;
  /** Available languages */
  languages?: Language[];
  /** Whether to use RTL layout */
  isRtl?: boolean;
  /** Localized text content */
  locale?: {
    DEFAULT_STORE_NAME: string;
    HEADER: Locale['HEADER'];
  };
  /** Callback when login is clicked */
  onLogin?: () => void;
  /** Callback when signup is clicked */
  onSignup?: () => void;
  /** Callback when cart is clicked */
  onCartClick?: () => void;
  /** Callback when language changes */
  onLanguageChange?: (languageCode: string) => void;
}

export const Header = ({
  logo,
  user,
  cartItemCount,
  currentLanguage,
  languages = [],
  isRtl = false,
  locale,
  onLogin,
  onSignup,
  onCartClick,
  onLanguageChange,
}: HeaderProps) => {
  // Map languages to display strings
  const languageOptions = useMemo(
    () => languages.map((lang) => lang.nativeName || lang.name),
    [languages]
  );
  const currentLanguageDisplay = currentLanguage
    ? currentLanguage.nativeName || currentLanguage.name
    : '';

  const handleLanguageSelect = (displayValue: string) => {
    const selectedLanguage = languages.find(
      (lang) => (lang.nativeName || lang.name) === displayValue
    );
    if (selectedLanguage) {
      onLanguageChange?.(selectedLanguage.code);
    }
  };

  return (
    <header className={HOME_PAGE_STYLES.HEADER}>
      <div className={HOME_PAGE_STYLES.HEADER_CONTAINER}>
        <div className={HOME_PAGE_STYLES.HEADER_CONTENT}>
          {/* Logo */}
          <div className={HOME_PAGE_STYLES.LOGO_CONTAINER} dir="ltr">
            {logo ?? <WebbitLogo />}
          </div>

          {/* User Section */}
          <div className={HOME_PAGE_STYLES.USER_SECTION}>
            {/* Language Selector */}
            {currentLanguage && languages.length > 0 && (
              <div className={isRtl ? HOME_PAGE_STYLES.SELECT_WRAPPER_RTL : ''}>
                <CustomSelect
                  value={currentLanguageDisplay}
                  onChange={handleLanguageSelect}
                  placeholder={
                    locale?.HEADER.LANGUAGE_PLACEHOLDER ??
                    ENGLISH_LOCALE.HEADER.LANGUAGE_PLACEHOLDER
                  }
                  options={languageOptions}
                  triggerClassName={HOME_PAGE_STYLES.SELECT_BUTTON}
                  menuClassName={HOME_PAGE_STYLES.SELECT_MENU}
                  optionClassName={HOME_PAGE_STYLES.SELECT_OPTION}
                  optionSelectedClassName={
                    HOME_PAGE_STYLES.SELECT_OPTION_SELECTED
                  }
                />
              </div>
            )}

            {user ? (
              <div className={HOME_PAGE_STYLES.USER_GREETING}>
                {locale?.HEADER.WELCOME ?? ENGLISH_LOCALE.HEADER.WELCOME},{' '}
                <span className={HOME_PAGE_STYLES.USER_NAME}>{user.name}</span>
              </div>
            ) : (
              <>
                <button
                  onClick={onLogin}
                  className={HOME_PAGE_STYLES.AUTH_BUTTON}
                  type="button"
                >
                  {locale?.HEADER.LOGIN ?? ENGLISH_LOCALE.HEADER.LOGIN}
                </button>
                <button
                  onClick={onSignup}
                  className={HOME_PAGE_STYLES.AUTH_BUTTON_PRIMARY}
                  type="button"
                >
                  {locale?.HEADER.SIGNUP ?? ENGLISH_LOCALE.HEADER.SIGNUP}
                </button>
              </>
            )}

            {/* Cart */}
            <button
              onClick={onCartClick}
              className={HOME_PAGE_STYLES.CART_BUTTON}
              aria-label={`${
                locale?.HEADER.CART_ARIA_LABEL ??
                ENGLISH_LOCALE.HEADER.CART_ARIA_LABEL
              } - ${cartItemCount} ${
                locale?.HEADER.ITEMS_IN_CART ??
                ENGLISH_LOCALE.HEADER.ITEMS_IN_CART
              }`}
              type="button"
            >
              <ShoppingCartIcon className={HOME_PAGE_STYLES.CART_ICON} />
              {cartItemCount > 0 && (
                <span className={HOME_PAGE_STYLES.CART_BADGE}>
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
