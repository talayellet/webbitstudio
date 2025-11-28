import clsx from 'clsx';
import { STYLES, LocaleStrings, DEFAULT_LOCALE_STRINGS } from '../../../utils';

interface HeroSectionProps {
  launchBadgeText: string;
  heroTitle: string;
  heroDescription: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
  tagline?: string;
  locale?: LocaleStrings;
}

export const HeroSection = ({
  launchBadgeText,
  heroTitle,
  heroDescription,
  primaryCtaText,
  primaryCtaHref,
  secondaryCtaText,
  secondaryCtaHref,
  tagline,
  locale = DEFAULT_LOCALE_STRINGS,
}: HeroSectionProps) => {
  return (
    <section className={STYLES.HERO_SECTION}>
      <div className={STYLES.CONTAINER}>
        <div className={clsx(STYLES.BADGE_WITH_ANIMATION)}>
          <span role="img" aria-label={locale.aria.rocket}>
            🚀
          </span>{' '}
          {launchBadgeText}
        </div>
        <h1 className={clsx(STYLES.HERO_TITLE, STYLES.TEXT_GRADIENT)}>
          {heroTitle}
        </h1>
        {tagline && <p className={clsx(STYLES.HERO_TAGLINE)}>{tagline}</p>}
        <p className={clsx(STYLES.HERO_DESCRIPTION)}>{heroDescription}</p>
        <div className={STYLES.HERO_CTA_WRAPPER}>
          <a href={primaryCtaHref} className={clsx(STYLES.PRIMARY_BUTTON)}>
            {primaryCtaText}
          </a>
          <a href={secondaryCtaHref} className={clsx(STYLES.SECONDARY_BUTTON)}>
            {secondaryCtaText}
          </a>
        </div>
      </div>
    </section>
  );
};
