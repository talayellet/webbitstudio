import React from 'react';
import clsx from 'clsx';
import * as heroStyles from '../utils/styles';
import type { LocaleStrings } from '../../../shared';
import { HERO_SECTION } from '../utils';

interface HeroProps {
  content: LocaleStrings['hero'];
}

export const Hero: React.FC<HeroProps> = ({ content }) => {
  return (
    <section
      aria-labelledby={HERO_SECTION.HEADING_ID}
      className={heroStyles.layout.grid2Cols}
    >
      <div className={heroStyles.hero.content}>
        <h1 id={HERO_SECTION.HEADING_ID} className={heroStyles.typography.h1}>
          {content.title}
        </h1>

        <p className={heroStyles.combined.bodyWithMaxWidth}>
          {content.description}
        </p>

        <div className={heroStyles.hero.actions}>
          <a
            href={HERO_SECTION.CONTACT_HREF}
            className={heroStyles.button.primary}
          >
            {content.primaryCta}
          </a>
          <a
            href={HERO_SECTION.PACKAGES_HREF}
            className={heroStyles.button.secondary}
          >
            {content.secondaryCta}
          </a>
          {content.tertiaryCta && content.tertiaryCtaHref && (
            <a
              href={content.tertiaryCtaHref}
              className={heroStyles.button.secondary}
              target="_blank"
              rel="noopener noreferrer"
            >
              {content.tertiaryCta}
            </a>
          )}
        </div>
      </div>

      {/* Hero visual */}
      <div className={heroStyles.hero.visual} aria-hidden="true">
        <div className={heroStyles.hero.gradient} />
        <div className={heroStyles.card.hero}>
          {/* Browser mock */}
          <div className={heroStyles.hero.browserHeader} aria-hidden="true">
            <span
              className={clsx(
                heroStyles.hero.browserDot,
                heroStyles.colors.rose500
              )}
            />
            <span
              className={clsx(
                heroStyles.hero.browserDot,
                heroStyles.colors.amber400
              )}
            />
            <span
              className={clsx(
                heroStyles.hero.browserDot,
                heroStyles.colors.emerald400
              )}
            />
            <span className={heroStyles.hero.browserUrl}>
              {HERO_SECTION.BROWSER_URL}
            </span>
          </div>

          <div className={heroStyles.hero.mockContainer} aria-hidden="true">
            <div className={heroStyles.hero.mockElement} />
            <div className={heroStyles.hero.mockElement2} />
            <div className={heroStyles.hero.mockGrid}>
              <div className={heroStyles.hero.mockCard} />
              <div className={heroStyles.hero.mockColumn}>
                <div className={heroStyles.hero.mockBar1} />
                <div className={heroStyles.hero.mockBar2} />
                <div className={heroStyles.hero.mockBar3} />
              </div>
              <div className={heroStyles.hero.mockColumn}>
                <div className={heroStyles.hero.mockBar4} />
                <div className={heroStyles.hero.mockBar5} />
                <div className={heroStyles.hero.mockButton} />
              </div>
            </div>
            <div className={heroStyles.hero.mockCardsGrid}>
              {content.visual.mockCards.map((card, index) => (
                <div key={index} className={heroStyles.card.heroBrowserMock}>
                  <p className={heroStyles.hero.mockCardText}>{card.title}</p>
                  <p className={heroStyles.hero.mockCardSubtext}>
                    {card.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
