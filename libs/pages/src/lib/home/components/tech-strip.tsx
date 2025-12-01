import React from 'react';
import * as styles from '../utils/styles';
import type { LocaleStrings } from '../utils/locales';

interface TechStripProps {
  content: LocaleStrings['techStrip'];
}

export const TechStrip: React.FC<TechStripProps> = ({ content }) => {
  return (
    <section className={styles.techStrip.root}>
      <div className={styles.techStrip.container}>
        <p>{content.title}</p>
        <div className={styles.techStrip.badges}>
          <span className={styles.typography.techBadge}>React</span>
          <span className={styles.typography.techBadge}>TypeScript</span>
          <span className={styles.typography.techBadge}>Tailwind</span>
          <span className={styles.typography.techBadge}>Vite</span>
          <span className={styles.typography.techBadge}>Modern hosting</span>
        </div>
      </div>
    </section>
  );
};
