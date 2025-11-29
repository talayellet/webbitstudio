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
  secondaryCtaText: string;
  secondaryCtaHref: string;

  // Features Section
  features: readonly Feature[];
  featuresSectionTitle?: string;

  // Stats Section
  stats: readonly Stat[];

  // Custom Sections
  aboutSection?: React.ReactNode;
  contactSection?: React.ReactNode;
  contactFieldsConfig?: ContactFieldsConfig;

  // Final CTA Section
  finalCtaTitle: string;
  finalCtaDescription: string;
  finalCtaButton: string;
  finalCtaHref: string;

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
  secondaryCtaText,
  secondaryCtaHref,
  features,
  featuresSectionTitle,
  stats,
  aboutSection,
  contactSection,
  contactFieldsConfig,
  finalCtaTitle,
  finalCtaDescription,
  finalCtaButton,
  finalCtaHref,
  addToRefs,
  tagline,
  locale,
  showSections = DEFAULT_SHOW_SECTIONS,
  customSections,
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
          } as Partial<typeof contactSection.props>)
        : contactSection,
    [contactSection, locale, contactFieldsConfig]
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
          secondaryCtaText={secondaryCtaText}
          secondaryCtaHref={secondaryCtaHref}
          tagline={tagline}
          locale={locale}
        />
      )}
      {showSections.features && (
        <FeaturesSection
          features={features}
          title={featuresSectionTitle}
          addToRefs={addToRefs}
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
