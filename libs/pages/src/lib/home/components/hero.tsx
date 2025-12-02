import React from 'react';
import clsx from 'clsx';
import * as styles from '../utils/styles';
import type { LocaleStrings } from '../utils/locales';

interface HeroProps {
  content: LocaleStrings['hero'];
}

export const Hero: React.FC<HeroProps> = ({ content }) => {
  return (
    <section aria-labelledby="hero-heading" className={styles.layout.grid2Cols}>
      <div className={styles.hero.content}>
        <h1 id="hero-heading" className={styles.typography.h1}>
          {content.title}
        </h1>

        <p className={styles.combined.bodyWithMaxWidth}>
          {content.description}
        </p>

        <div className={styles.hero.actions}>
          <a href="#contact" className={styles.button.primary}>
            {content.primaryCta}
          </a>
          <a href="#packages" className={styles.button.secondary}>
            {content.secondaryCta}
          </a>
        </div>

        <p className={styles.hero.trust}>{content.trust}</p>
      </div>

      {/* Hero visual */}
      <div className={styles.hero.visual}>
        <div className={styles.hero.gradient} />
        <div className={styles.card.hero}>
          {/* Browser mock */}
          <div className={styles.hero.browserHeader}>
            <span
              className={clsx(styles.hero.browserDot, styles.colors.rose500)}
            />
            <span
              className={clsx(styles.hero.browserDot, styles.colors.amber400)}
            />
            <span
              className={clsx(styles.hero.browserDot, styles.colors.emerald400)}
            />
            <span className={styles.hero.browserUrl}>webbitstudio.com</span>
          </div>

          <div className={styles.hero.mockContainer}>
            <div className={styles.hero.mockElement} />
            <div className={styles.hero.mockElement2} />
            <div className={styles.hero.mockGrid}>
              <div className={styles.hero.mockCard} />
              <div className={styles.hero.mockColumn}>
                <div className={styles.hero.mockBar1} />
                <div className={styles.hero.mockBar2} />
                <div className={styles.hero.mockBar3} />
              </div>
              <div className={styles.hero.mockColumn}>
                <div className={styles.hero.mockBar4} />
                <div className={styles.hero.mockBar5} />
                <div className={styles.hero.mockButton} />
              </div>
            </div>
            <div className={styles.hero.mockCardsGrid}>
              {content.visual.mockCards.map((card, index) => (
                <div key={index} className={styles.card.heroBrowserMock}>
                  <p className={styles.hero.mockCardText}>{card.title}</p>
                  <p className={styles.hero.mockCardSubtext}>{card.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
