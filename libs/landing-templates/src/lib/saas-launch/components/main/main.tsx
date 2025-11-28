import { cloneElement, isValidElement, useMemo } from 'react';
import {
  HeroSection,
  FeaturesSection,
  StatsSection,
  FinalCtaSection,
  Feature,
  Stat,
} from './sections';
import { LocaleStrings } from '../../utils';

interface MainProps {
  launchBadgeText: string;
  heroTitle: string;
  heroDescription: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
  features: readonly Feature[];
  stats: readonly Stat[];
  aboutSection?: React.ReactNode;
  contactSection?: React.ReactNode;
  finalCtaTitle: string;
  finalCtaDescription: string;
  finalCtaButton: string;
  finalCtaHref: string;
  addToRefs: (el: HTMLElement | null) => void;
  tagline?: string;
  locale: LocaleStrings;
}

export const Main = ({
  launchBadgeText,
  heroTitle,
  heroDescription,
  primaryCtaText,
  primaryCtaHref,
  secondaryCtaText,
  secondaryCtaHref,
  features,
  stats,
  aboutSection,
  contactSection,
  finalCtaTitle,
  finalCtaDescription,
  finalCtaButton,
  finalCtaHref,
  addToRefs,
  tagline,
  locale,
}: MainProps) => {
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
        ? cloneElement(contactSection, { locale } as Partial<
            typeof contactSection.props
          >)
        : contactSection,
    [contactSection, locale]
  );

  return (
    <main>
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
      <FeaturesSection features={features} addToRefs={addToRefs} />
      <StatsSection stats={stats} addToRefs={addToRefs} />
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
      <FinalCtaSection
        finalCtaTitle={finalCtaTitle}
        finalCtaDescription={finalCtaDescription}
        finalCtaButton={finalCtaButton}
        finalCtaHref={finalCtaHref}
        addToRefs={addToRefs}
      />
    </main>
  );
};
