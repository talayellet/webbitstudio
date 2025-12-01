import React from 'react';
import * as styles from '../utils/styles';
import type { LocaleStrings } from '../utils/locales';

interface WhySectionProps {
  content: LocaleStrings['whySection'];
}

export const WhySection: React.FC<WhySectionProps> = ({ content }) => {
  return (
    <section aria-labelledby="why-heading" className={styles.section.default}>
      <div className={styles.combined.sectionIntro}>
        <h2 id="why-heading" className={styles.typography.h2}>
          {content.title}
        </h2>
        <p className={styles.combined.bodyWithSpacing}>{content.subtitle}</p>
      </div>

      <div className={styles.layout.grid3Cols}>
        {content.benefits.map((item) => (
          <div key={item.title} className={styles.card.default}>
            <h3 className={styles.typography.h3Small}>{item.title}</h3>
            <p className={styles.combined.cardTextWithSpacing}>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
