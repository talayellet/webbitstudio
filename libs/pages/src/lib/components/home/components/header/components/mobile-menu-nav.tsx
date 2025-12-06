import * as styles from '../../../utils/styles';
import { NAV_ITEMS } from '../../../utils';
import type { LocaleStrings } from '../../../../../shared';

interface MobileMenuNavProps {
  content: LocaleStrings['header']['nav'];
  onLinkClick: () => void;
}

export const MobileMenuNav = ({ content, onLinkClick }: MobileMenuNavProps) => {
  return (
    <>
      {NAV_ITEMS.map((item) => {
        const className = item.isButton
          ? styles.header.mobileMenu.menuButton
          : styles.header.mobileMenu.menuLink;

        return (
          <a
            key={item.id}
            href={item.href}
            className={className}
            onClick={onLinkClick}
          >
            {content[item.id]}
          </a>
        );
      })}
    </>
  );
};
