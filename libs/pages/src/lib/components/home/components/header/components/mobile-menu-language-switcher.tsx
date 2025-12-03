import { LanguageOption } from '@webbitstudio/shared-utils';
import * as styles from '../../../utils/styles';

interface MobileMenuLanguageSwitcherProps {
  languages: LanguageOption[];
  currentLanguage: string;
  onLanguageChange: (language: string) => void;
}

export const MobileMenuLanguageSwitcher = ({
  languages,
  currentLanguage,
  onLanguageChange,
}: MobileMenuLanguageSwitcherProps) => {
  return (
    <div className={styles.header.mobileMenu.menuLanguageGroupWrapper}>
      <div className={styles.header.mobileMenu.menuLanguageGroup}>
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => onLanguageChange(lang.code)}
            className={`${styles.header.mobileFlagButton} ${
              currentLanguage === lang.code
                ? styles.header.mobileFlagButtonActive
                : ''
            }`}
            aria-label={lang.label}
            title={lang.label}
          >
            {lang.flag}
          </button>
        ))}
      </div>
      <div className={styles.header.mobileMenu.menuSeparator} />
    </div>
  );
};
