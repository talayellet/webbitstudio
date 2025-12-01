import React from 'react';
import clsx from 'clsx';
import * as styles from '../utils/styles';

export const Hero: React.FC = () => {
  return (
    <section aria-labelledby="hero-heading" className={styles.layout.grid2Cols}>
      <div className={styles.hero.content}>
        <p className={styles.typography.badge}>
          <span className={styles.hero.badge} />
          Serving clients in Israel, India, Europe, US & Canada
        </p>

        <h1 id="hero-heading" className={styles.typography.h1}>
          Websites that make your business look great - delivered fast.
        </h1>

        <p className={styles.combined.bodyWithMaxWidth}>
          Webbit Studio builds landing pages, business websites, hosting setups,
          deployments, and custom admin panels so you can manage your content
          with ease. Designed for small businesses worldwide.
        </p>

        <div className={styles.hero.actions}>
          <a href="#contact" className={styles.button.primary}>
            Start your project
          </a>
          <a href="#packages" className={styles.button.secondary}>
            See packages
          </a>
        </div>

        <p className={styles.hero.trust}>
          Trusted by small businesses and startups worldwide. Most projects
          completed in under 7 days.
        </p>
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
              <div className={styles.card.heroBrowserMock}>
                <p className={styles.hero.mockCardText}>Landing</p>
                <p className={styles.hero.mockCardSubtext}>
                  Fast, simple, effective.
                </p>
              </div>
              <div className={styles.card.heroBrowserMock}>
                <p className={styles.hero.mockCardText}>Pro Site</p>
                <p className={styles.hero.mockCardSubtext}>
                  Multi-page & hosted.
                </p>
              </div>
              <div className={styles.card.heroBrowserMock}>
                <p className={styles.hero.mockCardText}>Premium CMS</p>
                <p className={styles.hero.mockCardSubtext}>
                  Edit content yourself.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
