import React from 'react';
import * as styles from '../utils/styles';
import type { LocaleStrings } from '../utils/locales';

interface ProcessSectionProps {
  content: LocaleStrings['processSection'];
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ content }) => {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className={styles.section.withBorder}
    >
      <div className={styles.combined.sectionIntro}>
        <h2 id="process-heading" className={styles.typography.h2}>
          {content.title}
        </h2>
        <p className={styles.combined.bodyWithSpacing}>{content.subtitle}</p>
      </div>

      <div className={styles.layout.grid4Cols}>
        {content.steps.map((item) => (
          <div key={item.number} className={styles.card.process}>
            <div className={styles.processStep.header}>
              <span className={styles.processStep.badge}>{item.number}</span>
              <h3 className={styles.typography.h3Small}>{item.title}</h3>
            </div>
            <p className={styles.processStep.text}>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
