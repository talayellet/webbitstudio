import { STYLES } from '../../../utils';

interface HeroSectionProps {
  subtitle: string;
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  ctaOnClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  addToRefs: (el: HTMLElement | null) => void;
}

/**
 * Hero section component for restaurant-cafe template
 */
export const HeroSection = ({
  subtitle,
  title,
  description,
  ctaText,
  ctaHref,
  ctaOnClick,
  addToRefs,
}: HeroSectionProps) => {
  return (
    <section className={STYLES.HERO} aria-label="Hero section">
      <div className={STYLES.HERO_CONTENT} ref={addToRefs}>
        <div className={STYLES.HERO_SUBTITLE}>{subtitle}</div>
        <h1 className={STYLES.HERO_TITLE}>{title}</h1>
        <div className={STYLES.ORNAMENT} aria-hidden="true"></div>
        <p className={STYLES.HERO_DESCRIPTION}>{description}</p>
        <a
          href={ctaHref}
          className={STYLES.BTN}
          onClick={ctaOnClick}
          aria-label={`${ctaText} - ${title}`}
        >
          {ctaText}
        </a>
      </div>
    </section>
  );
};
