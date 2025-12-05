import React, { ReactNode, useState } from 'react';
import * as styles from '../../utils/styles';
import type { LocaleStrings } from '../../utils/locales';
import { Logo } from './components/logo';
import { DesktopNav } from './components/desktop-nav';
import { BurgerButton } from './components/burger-button';
import { MobileMenu } from './components/mobile-menu';
import { LanguageOption } from '@webbitstudio/shared-utils';

interface HeaderProps {
  content: LocaleStrings['header'];
  languageSwitcher: ReactNode;
  currencySwitcher: ReactNode;
  mobileCurrencySwitcher: ReactNode;
  currentLanguage: string;
  languages: LanguageOption[];
  onLanguageChange: (language: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  content,
  languageSwitcher,
  currencySwitcher,
  mobileCurrencySwitcher,
  currentLanguage,
  languages,
  onLanguageChange,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleLinkClick = () => {
    closeMobileMenu();
  };

  return (
    <>
      <header className={styles.header.root}>
        <Logo
          title={content.logo.title}
          subtitle={content.logo.subtitle}
          ariaLabel={content.ariaLabels.scrollToTop}
        />

        <DesktopNav
          content={content.nav}
          languageSwitcher={languageSwitcher}
          currencySwitcher={currencySwitcher}
        />

        <BurgerButton
          isOpen={isMobileMenuOpen}
          onClick={toggleMobileMenu}
          ariaLabel={content.ariaLabels.toggleMenu}
        />
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        content={content}
        languages={languages}
        currentLanguage={currentLanguage}
        currencySwitcher={mobileCurrencySwitcher}
        mobileMenuAriaLabel={content.ariaLabels.mobileMenu}
        onClose={closeMobileMenu}
        onLanguageChange={onLanguageChange}
        onLinkClick={handleLinkClick}
      />
    </>
  );
};
