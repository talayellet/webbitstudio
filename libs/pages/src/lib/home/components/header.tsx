import React from 'react';
import * as styles from '../utils/styles';
import type { LocaleStrings } from '../utils/locales';

interface HeaderProps {
  content: LocaleStrings['header'];
  languageSwitcher: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ({
  content,
  languageSwitcher,
}) => {
  return (
    <header className={styles.header.root}>
      <div className={styles.header.logo.container}>
        <div className={styles.header.logo.icon}>
          <span className={styles.header.logo.iconText}>W</span>
        </div>
        <div className={styles.header.logo.textContainer}>
          <span className={styles.header.logo.title}>{content.logo.title}</span>
          <span className={styles.header.logo.subtitle}>
            {content.logo.subtitle}
          </span>
        </div>
      </div>
      <nav className={styles.header.nav.root}>
        <a href="#packages" className={styles.header.nav.link}>
          {content.nav.packages}
        </a>
        <a href="#process" className={styles.header.nav.link}>
          {content.nav.process}
        </a>
        <a href="#pricing" className={styles.header.nav.link}>
          {content.nav.pricing}
        </a>
        <a href="#faq" className={styles.header.nav.link}>
          {content.nav.faq}
        </a>
        {languageSwitcher}
        <a href="#contact" className={styles.button.primarySmall}>
          {content.nav.contact}
        </a>
      </nav>
    </header>
  );
};
