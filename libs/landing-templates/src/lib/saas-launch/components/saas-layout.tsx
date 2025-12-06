import React, { useMemo, useState, useCallback, ReactNode } from 'react';
import clsx from 'clsx';
import '../../../styles.css';
import '../utils/animations.css';
import {
  DEFAULT_TEMPLATE,
  STYLES,
  getLocaleStrings,
  DEFAULT_LOCALE,
  DEFAULT_LANGUAGE_OPTIONS,
} from '../utils';
import { Header, Footer } from './';
import { LanguageSwitcher } from '@webbitstudio/ui-components';
import {
  ThemeSwitcher,
  useTheme,
  THEME_POSITIONS,
  type ThemeName,
  type ColorOverrides,
  THEME_NAMES,
  Locale,
} from '../../shared';
import type { LanguageOption, FooterLink } from '../utils';

export interface SaasLayoutProps {
  children: ReactNode;
  companyName?: string;
  logo?: ReactNode;
  colors?: ColorOverrides;
  theme?: ThemeName;
  locale?: Locale;
  onLocaleChange?: (locale: Locale) => void;
  languageOptions?: LanguageOption[];
  showLanguageSwitcher?: boolean;
  showThemeSwitcher?: boolean;
  showFooter?: boolean;
  footerLinks?: FooterLink[];
  onNavClick?: () => boolean;
}

/**
 * SaasLayout - Provides the header, footer, theme, and locale management wrapper
 * This can be used to wrap any content (Main sections, feature pages, etc.)
 */
export const SaasLayout: React.FC<SaasLayoutProps> = ({
  children,
  companyName = DEFAULT_TEMPLATE.companyName,
  logo = DEFAULT_TEMPLATE.logo,
  colors,
  theme = THEME_NAMES.DARK,
  locale = DEFAULT_LOCALE,
  onLocaleChange,
  languageOptions = DEFAULT_LANGUAGE_OPTIONS,
  showLanguageSwitcher = true,
  showThemeSwitcher = true,
  showFooter = true,
  footerLinks = [],
  onNavClick,
}) => {
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

  return (
    <div className={clsx(STYLES.MAIN_CONTAINER)} style={colorStyles}>
      {/* Animated gradient background */}
      <div className={STYLES.GRADIENT_BG_WRAPPER}>
        <div className={STYLES.GRADIENT_BG_INNER} />
      </div>

      {/* Language Switcher */}
      {showLanguageSwitcher && (
        <LanguageSwitcher
          currentLanguage={currentLocale}
          languages={languageOptions}
          onLanguageChange={handleLocaleChange}
        />
      )}

      {/* Theme Switcher */}
      {showThemeSwitcher && (
        <ThemeSwitcher
          currentTheme={currentTheme}
          onThemeChange={setTheme}
          position={THEME_POSITIONS.TOP_LEFT}
        />
      )}

      {/* Add padding to account for fixed header */}
      <div className={STYLES.FIXED_HEADER_SPACER} />

      <Header
        companyName={companyName}
        logo={logo}
        locale={localeStrings}
        onNavClick={onNavClick}
      />

      <div className={showFooter ? STYLES.FIXED_FOOTER_SPACER : ''}>
        {children}
      </div>

      {showFooter && (
        <Footer
          companyName={companyName}
          locale={localeStrings}
          links={footerLinks}
        />
      )}
    </div>
  );
};
