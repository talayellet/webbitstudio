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
          {content.badges.map((badge) => (
            <span key={badge} className={styles.typography.techBadge}>
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
