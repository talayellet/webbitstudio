import React from 'react';
import * as styles from '../utils/styles';
import type { LocaleStrings } from '../utils/locales';

interface FooterProps {
  content: LocaleStrings['footer'];
}

export const Footer: React.FC<FooterProps> = ({ content }) => {
  const currentYear = new Date().getFullYear();
  const copyrightText = content.copyright
    .replace('{year}', currentYear.toString())
    .replace('{companyName}', 'Webbit Studio');

  return (
    <footer className={styles.footer.root}>
      <div className={styles.footer.container}>
        <p>{copyrightText}</p>
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
