import { ReactNode, useMemo, useState, useCallback, useEffect } from 'react';
import '../restaurant-cafe-styles.css';
import '../utils/animations.css';
import { Header, Footer } from './';
import { LanguageSwitcher } from '@webbitstudio/ui-components';
import {
  ThemeSwitcher,
  useTheme,
  THEME_POSITIONS,
  type ThemeName,
  type ColorOverrides,
  THEME_NAMES,
  DEFAULT_THEMES,
  Locale,
} from '../../shared';
import {
  DEFAULT_TEMPLATE,
  DEFAULT_LOCALE,
  DEFAULT_LANGUAGE_OPTIONS,
  getLocaleStrings,
  getDefaultFooterSections,
  type FooterSection,
} from '../utils';
import { type LanguageOption } from '@webbitstudio/shared-utils';
import { RTL_LOCALES } from '@webbitstudio/shared-utils';

interface RestaurantLayoutProps {
  children: ReactNode;
  restaurantName?: string;
  logo?: ReactNode;
  colors?: ColorOverrides;
  theme?: ThemeName;
  locale?: Locale;
  onLocaleChange?: (locale: Locale) => void;
  languageOptions?: LanguageOption[];
  showLanguageSwitcher?: boolean;
  showThemeSwitcher?: boolean;
  showFooter?: boolean;
  footerSections?: FooterSection[];
}

/**
 * RestaurantLayout - Provides the header, footer, theme, and locale management wrapper
 */
export const RestaurantLayout = ({
  children,
  restaurantName = DEFAULT_TEMPLATE.restaurantName,
  logo = DEFAULT_TEMPLATE.logo,
  colors,
  theme = THEME_NAMES.WARM,
  locale = DEFAULT_LOCALE,
  onLocaleChange,
  languageOptions = DEFAULT_LANGUAGE_OPTIONS,
  showLanguageSwitcher = true,
  showThemeSwitcher = true,
  showFooter = true,
  footerSections,
}: RestaurantLayoutProps) => {
  // Theme management
  const { currentTheme, setTheme, colorStyles } = useTheme({
    initialTheme: theme,
    colorOverrides: colors,
  });

  // Manage locale internally if not provided as a non-default value (uncontrolled)
  const [internalLocale, setInternalLocale] = useState<Locale>(DEFAULT_LOCALE);
  const currentLocale = locale !== DEFAULT_LOCALE ? locale : internalLocale;

  // Handle locale change
  const handleLocaleChange = useCallback(
    (newLocale: Locale) => {
      if (locale === DEFAULT_LOCALE) {
        setInternalLocale(newLocale);
      }
      onLocaleChange?.(newLocale);
    },
    [locale, onLocaleChange]
  );

  // Get locale strings
  const localeStrings = useMemo(
    () => getLocaleStrings(currentLocale),
    [currentLocale]
  );

  // Determine if current locale is RTL
  const isRTL = useMemo(
    () => RTL_LOCALES.includes(currentLocale as never),
    [currentLocale]
  );

  /**
   * Update HTML lang and dir attributes for accessibility (WCAG 3.1.1)
   * Sets document.documentElement.lang to current locale (e.g., 'en', 'es', 'fr', 'he')
   * Sets document.documentElement.dir to 'rtl' for Hebrew and other RTL languages
   * This ensures screen readers use the correct pronunciation and language rules
   */
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = currentLocale;
      document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    }
  }, [currentLocale, isRTL]);

  // Create nav links from locale strings
  const navLinks = useMemo(
    () => [
      { href: '#about', label: localeStrings.header.nav.about },
      { href: '#menu', label: localeStrings.header.nav.menu },
      { href: '#contact', label: localeStrings.header.nav.contact },
    ],
    [localeStrings]
  );

  // Generate localized footer sections (or use provided override)
  const localizedFooterSections = useMemo(
    () => footerSections ?? getDefaultFooterSections(localeStrings),
    [footerSections, localeStrings]
  );

  // Generate localized theme options
  const localizedThemes = useMemo(() => {
    return DEFAULT_THEMES.map((theme) => ({
      ...theme,
      label:
        theme.name === THEME_NAMES.WARM
          ? localeStrings.themes.warm
          : theme.name === THEME_NAMES.ELEGANT
          ? localeStrings.themes.elegant
          : theme.name === THEME_NAMES.MODERN
          ? localeStrings.themes.modern
          : theme.name === THEME_NAMES.RUSTIC
          ? localeStrings.themes.rustic
          : localeStrings.themes.coastal,
    }));
  }, [localeStrings]);

  return (
    <div
      className="rc-template-wrapper"
      style={colorStyles}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Language Switcher */}
      {showLanguageSwitcher && (
        <LanguageSwitcher
          currentLanguage={currentLocale}
          languages={
            languageOptions as Array<{
              code: Locale;
              flag: string;
              label: string;
            }>
          }
          onLanguageChange={handleLocaleChange}
        />
      )}

      {/* Theme Switcher */}
      {showThemeSwitcher && (
        <ThemeSwitcher
          currentTheme={currentTheme}
          onThemeChange={setTheme}
          position={THEME_POSITIONS.TOP_LEFT}
          themes={localizedThemes}
        />
      )}

      <Header
        restaurantName={restaurantName}
        logo={logo}
        navLinks={navLinks}
        ariaMainNavigation={localeStrings.header.aria.mainNavigation}
        ariaReturnToTop={localeStrings.header.aria.returnToTop}
      />

      {children}

      {showFooter && (
        <Footer
          restaurantName={restaurantName}
          tagline={localeStrings.footer.tagline}
          footerSections={localizedFooterSections}
          copyright={localeStrings.footer.copyright}
        />
      )}
    </div>
  );
};
