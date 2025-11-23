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
  finalCtaTitle: string;
  finalCtaDescription: string;
  finalCtaButton: string;
  finalCtaHref: string;
  addToRefs: (el: HTMLElement | null) => void;
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
  finalCtaTitle,
  finalCtaDescription,
  finalCtaButton,
  finalCtaHref,
  addToRefs,
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
      />
      <FeaturesSection features={features} addToRefs={addToRefs} />
      <StatsSection stats={stats} addToRefs={addToRefs} />
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
