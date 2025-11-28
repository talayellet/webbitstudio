import { useMemo, useState, useCallback } from 'react';
import clsx from 'clsx';
import '../../styles.css';
import './utils/animations.css';
import {
  DEFAULT_COLORS,
  DEFAULT_TEMPLATE,
  SaasLaunchProps,
  STYLES,
  getLocaleStrings,
  DEFAULT_LOCALE,
  DEFAULT_LANGUAGE_OPTIONS,
} from './utils';
import { useScrollReveal, useLocalizedContent } from './hooks';
import { Header, Main, Footer } from './components';
import { LanguageSwitcher } from '../shared';

export const SaasLaunch = ({
  productName = DEFAULT_TEMPLATE.productName,
  companyName = DEFAULT_TEMPLATE.companyName,
  logoLetter = DEFAULT_TEMPLATE.logoLetter,
  content,
  aboutSection = DEFAULT_TEMPLATE.aboutSection,
  contactSection = DEFAULT_TEMPLATE.contactSection,
  colors = DEFAULT_TEMPLATE.colors,
  showLanguageSwitcher = true,
  locale = DEFAULT_LOCALE,
  onLocaleChange,
  languageOptions = DEFAULT_LANGUAGE_OPTIONS,
  footerLinks,
}: SaasLaunchProps) => {
  const addToRefs = useScrollReveal();

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

  const colorStyles = useMemo(
    () =>
      ({
        '--primary': colors.primary || DEFAULT_COLORS.PRIMARY,
        '--primary-dark': colors.primaryDark || DEFAULT_COLORS.PRIMARY_DARK,
        '--secondary': colors.secondary || DEFAULT_COLORS.SECONDARY,
        '--background': colors.background || DEFAULT_COLORS.BACKGROUND,
        '--surface': colors.surface || DEFAULT_COLORS.SURFACE,
        '--text': colors.text || DEFAULT_COLORS.TEXT,
        '--text-muted': colors.textMuted || DEFAULT_COLORS.TEXT_MUTED,
        '--accent': colors.accent || DEFAULT_COLORS.ACCENT,
      } as React.CSSProperties),
    [colors]
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

      {/* Add padding to account for fixed header */}
      <div className={STYLES.FIXED_HEADER_SPACER} />

      <Header
        companyName={companyName}
        logoLetter={logoLetter}
        productName={productName}
        locale={localeStrings}
      />

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
        finalCtaTitle={displayContent.finalCtaTitle}
        finalCtaDescription={displayContent.finalCtaDescription}
        finalCtaButton={displayContent.finalCtaButton}
        finalCtaHref={displayContent.finalCtaHref}
        addToRefs={addToRefs}
        tagline={displayContent.tagline}
        locale={localeStrings}
      />

      <Footer
        companyName={companyName}
        locale={localeStrings}
        links={footerLinks}
      />
    </div>
  );
};

export default SaasLaunch;
