import React from 'react';
import * as styles from '../utils/styles';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer.root}>
      <div className={styles.footer.container}>
        <p>© {new Date().getFullYear()} Webbit Studio. All rights reserved.</p>
        <div className={styles.footer.links}>
          <a href="#hero" className={styles.footer.link}>
            Back to top
          </a>
          <span className={styles.footer.separator} />
          <span>webbitstudio.com</span>
        </div>
      </div>
    </footer>
  );
};
