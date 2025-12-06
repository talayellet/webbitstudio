import * as styles from '../../../utils/styles';
import { Logo } from './logo';
import { CloseIcon } from '@webbitstudio/ui-components';

interface MobileMenuHeaderProps {
  logoTitle: string;
  logoSubtitle: string;
  closeAriaLabel: string;
  onClose: () => void;
}

export const MobileMenuHeader = ({
  logoTitle,
  logoSubtitle,
  closeAriaLabel,
  onClose,
}: MobileMenuHeaderProps) => {
  return (
    <div className={styles.header.mobileMenu.menuHeader}>
      <Logo title={logoTitle} subtitle={logoSubtitle} ariaLabel={logoTitle} />
      <button
        className={styles.header.mobileMenu.closeButton}
        onClick={onClose}
        aria-label={closeAriaLabel}
      >
        <CloseIcon className={styles.header.mobileMenu.closeButtonIcon} />
      </button>
    </div>
  );
};
