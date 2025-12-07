import { useNavigate, useLocation } from 'react-router-dom';
import * as styles from '../../../utils/styles';
import { useScrollToTop } from '@webbitstudio/shared-utils';

interface LogoProps {
  title: string;
  subtitle: string;
  ariaLabel: string;
}

export const Logo = ({ title, subtitle, ariaLabel }: LogoProps) => {
  const { scrollToTop } = useScrollToTop();
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    // If we're not on the home page, navigate to it
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      // If we're already on the home page, just scroll to top
      scrollToTop();
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={styles.header.logo.container}
      aria-label={ariaLabel}
    >
      <div className={styles.header.logo.icon}>
        <span className={styles.header.logo.iconText}>W</span>
      </div>
      <div className={styles.header.logo.textContainer}>
        <span className={styles.header.logo.title}>{title}</span>
        <span className={styles.header.logo.subtitle}>{subtitle}</span>
      </div>
    </button>
  );
};
