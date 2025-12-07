import * as contactSectionStyles from '../../../utils/styles';
import { EnvelopeIcon, PhoneIcon } from '@webbitstudio/ui-components';
import { WEBBIT_STUDIO_EMAIL } from '../../../../../shared';

interface ContactFallbackProps {
  emailText: string;
  phoneText: string;
  phoneNumber: {
    display: string;
    dialable: string;
  };
}

/**
 * ContactFallback displays alternative contact methods (email and phone)
 */
export const ContactFallback = ({
  emailText,
  phoneText,
  phoneNumber,
}: ContactFallbackProps) => {
  return (
    <>
      <div className={contactSectionStyles.form.emailFallback}>
        <EnvelopeIcon className={contactSectionStyles.form.emailFallbackIcon} />
        <span>
          {emailText}{' '}
          <a
            href={`mailto:${WEBBIT_STUDIO_EMAIL}`}
            className={contactSectionStyles.form.emailFallbackLink}
          >
            {WEBBIT_STUDIO_EMAIL}
          </a>
        </span>
      </div>
      <div className={contactSectionStyles.form.emailFallback}>
        <PhoneIcon className={contactSectionStyles.form.emailFallbackIcon} />
        <span>
          {phoneText}{' '}
          <a
            href={`tel:${phoneNumber.dialable}`}
            className={contactSectionStyles.form.emailFallbackLink}
          >
            {phoneNumber.display}
          </a>
        </span>
      </div>
    </>
  );
};
