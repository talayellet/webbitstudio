import * as styles from '../../../utils/styles';

interface BurgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
  ariaLabel: string;
}

export const BurgerButton = ({
  isOpen,
  onClick,
  ariaLabel,
}: BurgerButtonProps) => {
  return (
    <button
      className={styles.header.mobileMenu.burgerButton}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      <span
        className={`${styles.header.mobileMenu.burgerLine} ${
          styles.header.mobileMenu.burgerLineTop
        } ${isOpen ? styles.header.mobileMenu.burgerLineTopOpen : ''}`}
      />
      <span
        className={`${styles.header.mobileMenu.burgerLine} ${
          isOpen
            ? styles.header.mobileMenu.burgerLineMiddleOpen
            : styles.header.mobileMenu.burgerLineMiddleClosed
        }`}
      />
      <span
        className={`${styles.header.mobileMenu.burgerLine} ${
          styles.header.mobileMenu.burgerLineBottom
        } ${isOpen ? styles.header.mobileMenu.burgerLineBottomOpen : ''}`}
      />
    </button>
  );
};
