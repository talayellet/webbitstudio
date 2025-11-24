import { useMemo } from 'react';
import clsx from 'clsx';
import '../../styles.css';
import './utils/animations.css';
import {
  DEFAULT_COLORS,
  DEFAULT_TEMPLATE,
  SaasLaunchProps,
  STYLES,
} from './utils';
import { useScrollReveal } from './hooks';
import { Header } from './header';
import { Main } from './main';
import { Footer } from './footer';

export const SaasLaunch = ({
  productName = DEFAULT_TEMPLATE.productName,
  tagline = DEFAULT_TEMPLATE.tagline,
  companyName = DEFAULT_TEMPLATE.companyName,
  logoLetter = DEFAULT_TEMPLATE.logoLetter,
  launchBadgeText = DEFAULT_TEMPLATE.launchBadgeText,
  heroTitle = DEFAULT_TEMPLATE.heroTitle,
  heroDescription = DEFAULT_TEMPLATE.heroDescription,
  primaryCtaText = DEFAULT_TEMPLATE.primaryCtaText,
  secondaryCtaText = DEFAULT_TEMPLATE.secondaryCtaText,
  primaryCtaHref = DEFAULT_TEMPLATE.primaryCtaHref,
  secondaryCtaHref = DEFAULT_TEMPLATE.secondaryCtaHref,
  features = DEFAULT_TEMPLATE.features,
  stats = DEFAULT_TEMPLATE.stats,
  finalCtaTitle = DEFAULT_TEMPLATE.finalCtaTitle,
  finalCtaDescription = DEFAULT_TEMPLATE.finalCtaDescription,
  finalCtaButton = DEFAULT_TEMPLATE.finalCtaButton,
  finalCtaHref = DEFAULT_TEMPLATE.finalCtaHref,
  colors = DEFAULT_TEMPLATE.colors,
}: SaasLaunchProps) => {
  const addToRefs = useScrollReveal();

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

      {/* Add padding to account for fixed header */}
      <div className={STYLES.FIXED_HEADER_SPACER} />

      <Header
        companyName={companyName}
        logoLetter={logoLetter}
        productName={productName}
      />

      <Main
        launchBadgeText={launchBadgeText}
        heroTitle={heroTitle}
        heroDescription={heroDescription}
        primaryCtaText={primaryCtaText}
        primaryCtaHref={primaryCtaHref}
        secondaryCtaText={secondaryCtaText}
        secondaryCtaHref={secondaryCtaHref}
        features={features}
        stats={stats}
        finalCtaTitle={finalCtaTitle}
        finalCtaDescription={finalCtaDescription}
        finalCtaButton={finalCtaButton}
        finalCtaHref={finalCtaHref}
        addToRefs={addToRefs}
        tagline={tagline}
      />

      <Footer companyName={companyName} />
    </div>
  );
};

export default SaasLaunch;
