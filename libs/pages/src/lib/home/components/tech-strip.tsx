import React from 'react';
import * as styles from '../utils/styles';

export const TechStrip: React.FC = () => {
  return (
    <section className={styles.techStrip.root}>
      <div className={styles.techStrip.container}>
        <p>Built with modern, reliable technology.</p>
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
