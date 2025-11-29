import React, { ReactNode, useMemo, useState } from 'react';
import {
  DEFAULT_TEMPLATE,
  getLocaleStrings,
  DEFAULT_LOCALE,
  DEFAULT_LANGUAGE_OPTIONS,
  DEFAULT_CONTACT_FIELDS,
  ContentOverrides,
  ContactFieldsConfig,
  ColorScheme,
  FooterLink,
  Feature,
} from './utils';
import { useScrollReveal, useLocalizedContent } from './hooks';
import { Main, SaasLayout } from './components';
import {
  LanguageOption,
  Locale,
  THEME_NAMES,
  ThemeName,
  PageUnderConstruction,
} from '../shared';

export interface SaasLaunchProps {
  // Brand/Company
  productName?: string;
  companyName?: string;
  logo?: ReactNode;

  // Content overrides (optional - falls back to locale strings)
  content?: ContentOverrides;

  // About Section
  aboutSection?: ReactNode;

  // Contact Section
  contactSection?: ReactNode;
  contactFieldsConfig?: ContactFieldsConfig;
  /**
   * Web3Forms access key for contact form email delivery
   * Get free key at https://web3forms.com
   */
  web3formsAccessKey?: string;

  // Theme
  theme?: ThemeName;

  // Color scheme (overrides theme colors)
  colors?: ColorScheme;

  // Language switcher
  showLanguageSwitcher?: boolean;
  locale?: Locale;
  onLocaleChange?: (locale: Locale) => void;
  languageOptions?: LanguageOption[];

  // Theme switcher
  showThemeSwitcher?: boolean;

  // Footer
  showFooter?: boolean;
  footerLinks?: FooterLink[];
  onFooterLinkClick?: (href: string, label: string) => void;

  // Feature navigation
  onFeatureClick?: (feature: Feature) => void;
}

export const SaasLaunch: React.FC<SaasLaunchProps> = ({
  aboutSection = DEFAULT_TEMPLATE.aboutSection,
  colors,
  companyName = DEFAULT_TEMPLATE.companyName,
  contactSection = DEFAULT_TEMPLATE.contactSection,
  contactFieldsConfig = DEFAULT_CONTACT_FIELDS,
  content,
  footerLinks = DEFAULT_TEMPLATE.footerLinks,
  languageOptions = DEFAULT_LANGUAGE_OPTIONS,
  locale = DEFAULT_LOCALE,
  logo = DEFAULT_TEMPLATE.logo,
  onLocaleChange,
  onFeatureClick,
  onFooterLinkClick,
  showFooter = true,
  showLanguageSwitcher = true,
  showThemeSwitcher = true,
  theme = THEME_NAMES.DARK,
  web3formsAccessKey,
}) => {
  const addToRefs = useScrollReveal();

  // State to track current page
  const [currentPage, setCurrentPage] = useState<string | null>(null);

  // Get locale strings
  const localeStrings = useMemo(() => getLocaleStrings(locale), [locale]);

  // Get localized content with overrides
  const displayContent = useLocalizedContent(localeStrings, content);

  // Create footer links with onClick handlers
  const enhancedFooterLinks = useMemo(() => {
    return footerLinks.map((link) => ({
      ...link,
      onClick:
        link.onClick ||
        ((e: React.MouseEvent<HTMLAnchorElement>) => {
          e.preventDefault();
          if (onFooterLinkClick) {
            onFooterLinkClick(link.href, link.label);
          } else {
            // Default behavior: show under construction page
            setCurrentPage(link.label);
          }
        }),
    }));
  }, [footerLinks, onFooterLinkClick]);

  return (
    <SaasLayout
      companyName={companyName}
      logo={logo}
      colors={colors}
      theme={theme}
      locale={locale}
      onLocaleChange={onLocaleChange}
      languageOptions={languageOptions}
      showLanguageSwitcher={showLanguageSwitcher}
      showThemeSwitcher={showThemeSwitcher}
      showFooter={showFooter}
      footerLinks={enhancedFooterLinks}
    >
      {currentPage ? (
        <PageUnderConstruction
          pageName={currentPage}
          onBackClick={() => setCurrentPage(null)}
          locale={localeStrings.pageUnderConstruction}
        />
      ) : (
        <Main
          launchBadgeText={displayContent.launchBadgeText}
          heroTitle={displayContent.heroTitle}
          heroDescription={displayContent.heroDescription}
          primaryCtaText={displayContent.primaryCtaText}
          primaryCtaHref={displayContent.primaryCtaHref}
          secondaryCtaText={displayContent.secondaryCtaText}
          secondaryCtaHref={displayContent.secondaryCtaHref}
          features={displayContent.features}
          featuresSectionTitle={displayContent.featuresSectionTitle}
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
          onFeatureClick={onFeatureClick}
          web3formsAccessKey={web3formsAccessKey}
        />
      )}
    </SaasLayout>
  );
};

export default SaasLaunch;
