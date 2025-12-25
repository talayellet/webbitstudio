import { ShoppingCartIcon, WebbitLogo } from '../../../../icons';
import { User, Language, Location, Locale } from '../../utils';
import { HOME_PAGE_STYLES } from '../../utils/styles';

/**
 * eCommerce Header Component
 *
 * A sticky header featuring:
 * - Logo with fallback to store name
 * - User authentication (login/signup) or user greeting
 * - Shopping cart with item count badge
 * - Location selector dropdown
 * - Language selector dropdown
 * - RTL support
 *
 * @example
 * ```tsx
 * <Header
 *   storeName="My Store"
 *   cartItemCount={3}
 *   user={currentUser}
 *   onLogin={handleLogin}
 *   isRtl={false}
 * />
 * ```
 */
export interface HeaderProps {
  /** Store logo URL */
  logoUrl?: string;
  /** Store name (fallback if no logo) */
  storeName?: string;
  /** Currently signed-in user */
  user?: User;
  /** Number of items in shopping cart */
  cartItemCount: number;
  /** Current selected location */
  currentLocation?: Location;
  /** Available locations */
  locations?: Location[];
  /** Current selected language */
  currentLanguage?: Language;
  /** Available languages */
  languages?: Language[];
  /** Whether to use RTL layout */
  isRtl?: boolean;
  /** Custom styles override */
  styles?: Partial<typeof HOME_PAGE_STYLES>;
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
  /** Callback when location changes */
  onLocationChange?: (locationCode: string) => void;
  /** Callback when language changes */
  onLanguageChange?: (languageCode: string) => void;
}

export const Header = ({
  logoUrl,
  storeName,
  user,
  cartItemCount,
  currentLocation,
  locations = [],
  currentLanguage,
  languages = [],
  isRtl = false,
  styles = {},
  locale,
  onLogin,
  onSignup,
  onCartClick,
  onLocationChange,
  onLanguageChange,
}: HeaderProps) => {
  const mergedStyles = { ...HOME_PAGE_STYLES, ...styles };

  return (
    <header className={mergedStyles.HEADER}>
      <div className={mergedStyles.HEADER_CONTAINER}>
        <div className={mergedStyles.HEADER_CONTENT}>
          {/* Logo */}
          <div className={mergedStyles.LOGO_CONTAINER} dir="ltr">
            {logoUrl ? (
              <img
                src={logoUrl}
                alt={locale?.HEADER.LOGO_ALT}
                className={mergedStyles.LOGO_IMAGE}
              />
            ) : (
              <WebbitLogo />
            )}
          </div>

          {/* Location & Language Selectors */}
          <div className={mergedStyles.HEADER_LEFT}>
            {/* Location Selector */}
            {currentLocation && locations.length > 0 && (
              <div>
                <select
                  value={currentLocation.code}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                    onLocationChange?.(e.currentTarget.value)
                  }
                  className={mergedStyles.SELECT_BUTTON}
                  aria-label={locale?.HEADER.LOCATION_ARIA_LABEL}
                >
                  {locations.map((location) => (
                    <option key={location.code} value={location.code}>
                      {location.flag ? `${location.flag} ` : ''}
                      {location.name}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Language Selector */}
            {currentLanguage && languages.length > 0 && (
              <div>
                <select
                  value={currentLanguage.code}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                    onLanguageChange?.(e.currentTarget.value)
                  }
                  className={mergedStyles.SELECT_BUTTON}
                  aria-label={locale?.HEADER.LANGUAGE_ARIA_LABEL}
                >
                  {languages.map((language) => (
                    <option key={language.code} value={language.code}>
                      {language.nativeName || language.name}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>

          {/* User Section */}
          <div className={mergedStyles.USER_SECTION}>
            {user ? (
              <div className={mergedStyles.USER_GREETING}>
                Welcome,{' '}
                <span className={mergedStyles.USER_NAME}>{user.name}</span>
              </div>
            ) : (
              <>
                <button
                  onClick={onLogin}
                  className={mergedStyles.AUTH_BUTTON}
                  type="button"
                >
                  {locale?.HEADER.LOGIN}
                </button>
                <button
                  onClick={onSignup}
                  className={mergedStyles.AUTH_BUTTON_PRIMARY}
                  type="button"
                >
                  {locale?.HEADER.SIGNUP}
                </button>
              </>
            )}

            {/* Cart */}
            <button
              onClick={onCartClick}
              className={mergedStyles.CART_BUTTON}
              aria-label={`${locale?.HEADER.CART_ARIA_LABEL} - ${cartItemCount} ${locale?.HEADER.ITEMS_IN_CART}`}
              type="button"
            >
              <ShoppingCartIcon className={mergedStyles.CART_ICON} />
              {cartItemCount > 0 && (
                <span className={mergedStyles.CART_BADGE}>{cartItemCount}</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
