import React, { useMemo, useState, useCallback } from 'react';
import clsx from 'clsx';
import '../../styles.css';
import './utils/animations.css';
import {
  DEFAULT_TEMPLATE,
  SaasLaunchProps,
  STYLES,
  getLocaleStrings,
  DEFAULT_LOCALE,
  DEFAULT_LANGUAGE_OPTIONS,
} from './utils';
import { useScrollReveal, useLocalizedContent } from './hooks';
import { Header, Main, Footer } from './components';
import {
  LanguageSwitcher,
  ThemeSwitcher,
  useTheme,
  THEME_POSITIONS,
} from '../shared';

export const SaasLaunch: React.FC<SaasLaunchProps> = ({
  aboutSection = DEFAULT_TEMPLATE.aboutSection,
  colors = DEFAULT_TEMPLATE.colors,
  companyName = DEFAULT_TEMPLATE.companyName,
  contactSection = DEFAULT_TEMPLATE.contactSection,
  contactFieldsConfig,
  content,
  footerLinks,
  languageOptions = DEFAULT_LANGUAGE_OPTIONS,
  locale = DEFAULT_LOCALE,
  logoLetter = DEFAULT_TEMPLATE.logoLetter,
  onLocaleChange,
  showFooter = true,
  showLanguageSwitcher = true,
  showThemeSwitcher = true,
}) => {
  const addToRefs = useScrollReveal();

  // Theme management - pass color overrides for backwards compatibility
  const { currentTheme, setTheme, colorStyles } = useTheme({
    colorOverrides: colors,
  });

  // Manage locale internally if not provided as a non-default value (uncontrolled)
  const [internalLocale, setInternalLocale] = useState(DEFAULT_LOCALE);
  const currentLocale = locale !== DEFAULT_LOCALE ? locale : internalLocale;

  // Handle locale change - update internal state and call callback if provided
  const handleLocaleChange = useCallback(
    (newLocale: string) => {
      if (locale === DEFAULT_LOCALE) {
        // Uncontrolled mode - update internal state
        setInternalLocale(newLocale);
      }
      // Always call the callback if provided
      onLocaleChange?.(newLocale);
    },
    [locale, onLocaleChange]
  );

  // Get locale strings
  const localeStrings = useMemo(
    () => getLocaleStrings(currentLocale),
    [currentLocale]
  );

  // Get localized content with overrides
  const displayContent = useLocalizedContent(localeStrings, content);

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
        logo={logoLetter}
        locale={localeStrings}
      />

      <div className={showFooter ? STYLES.FIXED_FOOTER_SPACER : ''}>
        <Main
          launchBadgeText={displayContent.launchBadgeText}
          heroTitle={displayContent.heroTitle}
          heroDescription={displayContent.heroDescription}
          primaryCtaText={displayContent.primaryCtaText}
          primaryCtaHref={displayContent.primaryCtaHref}
          secondaryCtaText={displayContent.secondaryCtaText}
          secondaryCtaHref={displayContent.secondaryCtaHref}
          features={displayContent.features}
          stats={displayContent.stats}
          aboutSection={aboutSection}
          contactSection={contactSection}
          contactFieldsConfig={contactFieldsConfig}
          finalCtaTitle={displayContent.finalCtaTitle}
          finalCtaDescription={displayContent.finalCtaDescription}
          finalCtaButton={displayContent.finalCtaButton}
          finalCtaHref={displayContent.finalCtaHref}
          addToRefs={addToRefs}
          tagline={displayContent.tagline}
          locale={localeStrings}
        />
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

export default SaasLaunch;
