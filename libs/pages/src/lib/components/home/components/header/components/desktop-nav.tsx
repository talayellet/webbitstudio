import React from 'react';
import * as styles from '../../../utils/styles';
import { LocaleStrings, NAV_ITEMS } from '../../../utils';

interface DesktopNavProps {
  content: LocaleStrings['header']['nav'];
  languageSwitcher: React.ReactNode;
  currencySwitcher: React.ReactNode;
}

export const DesktopNav = ({
  content,
  languageSwitcher,
  currencySwitcher,
}: DesktopNavProps) => {
  return (
    <nav className={styles.header.nav.root}>
      <div className={styles.header.nav.linksContainer}>
        {NAV_ITEMS.map((item) => {
          const className = item.isButton
            ? styles.button.primarySmall
            : styles.header.nav.link;

          return (
            <a key={item.id} href={item.href} className={className}>
              {content[item.id]}
            </a>
          );
        })}
      </div>
      <div className={styles.header.nav.currencySwitcher}>
        {currencySwitcher}
      </div>
      <div className={styles.header.nav.languageSwitcher}>
        {languageSwitcher}
      </div>
    </nav>
  );
};
