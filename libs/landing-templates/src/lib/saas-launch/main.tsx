import {
  HeroSection,
  FeaturesSection,
  StatsSection,
  FinalCtaSection,
  Feature,
  Stat,
} from './main-sections';

interface MainProps {
  launchBadgeText: string;
  heroTitle: string;
  heroDescription: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
  features: Feature[];
  stats: Stat[];
  aboutSection?: React.ReactNode;
  contactSection?: React.ReactNode;
  finalCtaTitle: string;
  finalCtaDescription: string;
  finalCtaButton: string;
  finalCtaHref: string;
  addToRefs: (el: HTMLElement | null) => void;
  tagline?: string;
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
}: MainProps) => {
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
      />
      <FeaturesSection features={features} addToRefs={addToRefs} />
      <StatsSection stats={stats} addToRefs={addToRefs} />
      {aboutSection && (
        <section id="about" ref={addToRefs}>
          {aboutSection}
        </section>
      )}
      {contactSection && (
        <section id="contact" ref={addToRefs}>
          {contactSection}
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
