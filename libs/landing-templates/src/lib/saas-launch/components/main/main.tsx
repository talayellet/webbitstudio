import { cloneElement, isValidElement, useMemo } from 'react';
import {
  HeroSection,
  FeaturesSection,
  StatsSection,
  FinalCtaSection,
} from './sections';
import {
  LocaleStrings,
  ShowSections,
  DEFAULT_SHOW_SECTIONS,
  ContactFieldsConfig,
  Feature,
  Stat,
} from '../../utils';

interface MainProps {
  // Hero Section
  launchBadgeText: string;
  heroTitle: string;
  heroDescription: string;
  tagline?: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  primaryCtaOnClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  secondaryCtaText: string;
  secondaryCtaHref: string;
  secondaryCtaOnClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;

  // Features Section
  features: readonly Feature[];
  featuresSectionTitle?: string;
  onFeatureClick?: (feature: Feature) => void;

  // Stats Section
  stats: readonly Stat[];

  // Custom Sections
  aboutSection?: React.ReactNode;
  contactSection?: React.ReactNode;
  contactFieldsConfig?: ContactFieldsConfig;
  web3formsAccessKey?: string;

  // Final CTA Section
  finalCtaTitle: string;
  finalCtaDescription: string;
  finalCtaButton: string;
  finalCtaHref: string;
  finalCtaOnClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;

  // Infrastructure
  addToRefs: (el: HTMLElement | null) => void;
  locale: LocaleStrings;
  showSections?: ShowSections;
  customSections?: React.ReactElement[];
}

export const Main: React.FC<MainProps> = ({
  launchBadgeText,
  heroTitle,
  heroDescription,
  primaryCtaText,
  primaryCtaHref,
  primaryCtaOnClick,
  secondaryCtaText,
  secondaryCtaHref,
  secondaryCtaOnClick,
  features,
  featuresSectionTitle,
  onFeatureClick,
  stats,
  aboutSection,
  contactSection,
  contactFieldsConfig,
  finalCtaTitle,
  finalCtaDescription,
  finalCtaButton,
  finalCtaHref,
  finalCtaOnClick,
  addToRefs,
  tagline,
  locale,
  showSections = DEFAULT_SHOW_SECTIONS,
  customSections,
  web3formsAccessKey,
}) => {
  // Clone about and contact sections with locale prop if they are React elements
  const aboutSectionWithLocale = useMemo(
    () =>
      aboutSection && isValidElement(aboutSection)
        ? cloneElement(aboutSection, { locale } as Partial<
            typeof aboutSection.props
          >)
        : aboutSection,
    [aboutSection, locale]
  );

  const contactSectionWithLocale = useMemo(
    () =>
      contactSection && isValidElement(contactSection)
        ? cloneElement(contactSection, {
            locale,
            contactFieldsConfig,
            web3formsAccessKey,
          } as Partial<typeof contactSection.props>)
        : contactSection,
    [contactSection, locale, contactFieldsConfig, web3formsAccessKey]
  );

  return (
    <main>
      {showSections.hero && (
        <HeroSection
          launchBadgeText={launchBadgeText}
          heroTitle={heroTitle}
          heroDescription={heroDescription}
          primaryCtaText={primaryCtaText}
          primaryCtaHref={primaryCtaHref}
          primaryCtaOnClick={primaryCtaOnClick}
          secondaryCtaText={secondaryCtaText}
          secondaryCtaHref={secondaryCtaHref}
          secondaryCtaOnClick={secondaryCtaOnClick}
          tagline={tagline}
          locale={locale}
        />
      )}
      {showSections.features && (
        <FeaturesSection
          features={features}
          title={featuresSectionTitle}
          addToRefs={addToRefs}
          onFeatureClick={onFeatureClick}
          locale={locale}
        />
      )}
      {showSections.stats && (
        <StatsSection stats={stats} addToRefs={addToRefs} />
      )}
      {aboutSectionWithLocale && (
        <section id="about" ref={addToRefs}>
          {aboutSectionWithLocale}
        </section>
      )}
      {contactSectionWithLocale && (
        <section id="contact" ref={addToRefs}>
          {contactSectionWithLocale}
        </section>
      )}
      {showSections.finalCta && (
        <FinalCtaSection
          finalCtaTitle={finalCtaTitle}
          finalCtaDescription={finalCtaDescription}
          finalCtaButton={finalCtaButton}
          finalCtaHref={finalCtaHref}
          finalCtaOnClick={finalCtaOnClick}
          addToRefs={addToRefs}
        />
      )}
      {customSections?.map((section, index) => (
        <section key={index} ref={addToRefs}>
          {section}
        </section>
      ))}
    </main>
  );
};
