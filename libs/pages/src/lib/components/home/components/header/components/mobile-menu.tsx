import React from 'react';
import * as styles from '../../../utils/styles';
import type { LocaleStrings } from '../../../../../shared';
import { MobileMenuOverlay } from './mobile-menu-overlay';
import { MobileMenuHeader } from './mobile-menu-header';
import { MobileMenuLanguageSwitcher } from './mobile-menu-language-switcher';
import { MobileMenuNav } from './mobile-menu-nav';
import { LanguageOption } from '@webbitstudio/shared-utils';

interface MobileMenuProps {
  isOpen: boolean;
  content: LocaleStrings['header'];
  languages: LanguageOption[];
  currentLanguage: string;
  currencySwitcher: React.ReactNode;
  mobileMenuAriaLabel: string;
  onClose: () => void;
  onLanguageChange: (language: string) => void;
  onLinkClick: () => void;
}

export const MobileMenu = ({
  isOpen,
  content,
  languages,
  currentLanguage,
  currencySwitcher,
  mobileMenuAriaLabel,
  onClose,
  onLanguageChange,
  onLinkClick,
}: MobileMenuProps) => {
  return (
    <>
      <MobileMenuOverlay isOpen={isOpen} onClose={onClose} />

      {/* Mobile Menu */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={mobileMenuAriaLabel}
        className={`${styles.header.mobileMenu.menu} ${
          isOpen
            ? styles.header.mobileMenu.menuVisible
            : styles.header.mobileMenu.menuHidden
        }`}
      >
        <MobileMenuHeader
          logoTitle={content.logo.title}
          logoSubtitle={content.logo.subtitle}
          closeAriaLabel={content.ariaLabels.closeMenu}
          onClose={onClose}
        />

        <nav className={styles.header.mobileMenu.menuContent}>
          <div className={styles.header.mobileMenu.menuSwitchers}>
            <MobileMenuLanguageSwitcher
              languages={languages}
              currentLanguage={currentLanguage}
              onLanguageChange={onLanguageChange}
            />
            <div className={styles.header.mobileMenu.menuCurrencySwitcher}>
              {currencySwitcher}
            </div>
          </div>
          <MobileMenuNav content={content.nav} onLinkClick={onLinkClick} />
        </nav>
      </div>
    </>
  );
};
