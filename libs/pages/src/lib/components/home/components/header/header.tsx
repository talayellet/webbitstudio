import React, { ReactNode, useState } from 'react';
import * as styles from '../../utils/styles';
import type { LocaleStrings } from '../../utils/locales';
import { Logo } from './components/logo';
import { DesktopNav } from './components/desktop-nav';
import { BurgerButton } from './components/burger-button';
import { MobileMenu } from './components/mobile-menu';

interface HeaderProps {
  content: LocaleStrings['header'];
  languageSwitcher: ReactNode;
  currencySwitcher: ReactNode;
  currentLanguage: string;
  languages: Array<{ code: string; flag: string; label: string }>;
  onLanguageChange: (language: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  content,
  languageSwitcher,
  currencySwitcher,
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
      {currencySwitcher}
      <header className={styles.header.root}>
        <Logo title={content.logo.title} subtitle={content.logo.subtitle} />

        <DesktopNav content={content.nav} languageSwitcher={languageSwitcher} />

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
        onClose={closeMobileMenu}
        onLanguageChange={onLanguageChange}
        onLinkClick={handleLinkClick}
      />
    </>
  );
};
