import clsx from 'clsx';
import { STYLES } from './utils';

export interface FooterProps {
  companyName: string;
}

export const Footer = ({ companyName }: FooterProps) => {
  return (
    <footer className={STYLES.FOOTER}>
      <div className={STYLES.CONTAINER}>
        <div className={STYLES.FOOTER_CONTENT}>
          <div className={STYLES.FOOTER_COPYRIGHT}>
            © {new Date().getFullYear()} {companyName}. All rights reserved.
          </div>
          <ul className={STYLES.FOOTER_LIST}>
            <li>
              <a href="/privacy" className={clsx(STYLES.FOOTER_LINK)}>
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className={clsx(STYLES.FOOTER_LINK)}>
                Terms of Service
              </a>
            </li>
            <li>
              <a href="/contact" className={clsx(STYLES.FOOTER_LINK)}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
