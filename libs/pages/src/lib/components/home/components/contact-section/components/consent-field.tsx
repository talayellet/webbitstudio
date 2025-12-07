import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import * as contactSectionStyles from '../../../utils/styles';
import { CONTACT_SECTION } from '../../../utils';

interface ConsentFieldProps {
  register: UseFormRegisterReturn;
  error?: FieldError;
  consentLabel: string;
  privacyPolicyText: string;
  errorMessage: string;
  onPrivacyPolicyClick: () => void;
}

/**
 * ConsentField component for privacy policy consent checkbox
 */
export const ConsentField = ({
  register,
  error,
  consentLabel,
  privacyPolicyText,
  errorMessage,
  onPrivacyPolicyClick,
}: ConsentFieldProps) => {
  return (
    <div className={contactSectionStyles.form.fieldContainer}>
      <label className={contactSectionStyles.form.consentLabel}>
        <input
          type="checkbox"
          {...register}
          className={contactSectionStyles.form.consentCheckbox}
          aria-required="true"
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={
            error ? CONTACT_SECTION.CONSENT_ERROR_ID : undefined
          }
        />
        <span>
          {consentLabel}{' '}
          <button
            type="button"
            onClick={onPrivacyPolicyClick}
            className={contactSectionStyles.form.consentLink}
          >
            {privacyPolicyText}
          </button>
        </span>
      </label>
      {error && (
        <p
          id={CONTACT_SECTION.CONSENT_ERROR_ID}
          role="alert"
          className={contactSectionStyles.form.error}
        >
          {errorMessage}
        </p>
      )}
    </div>
  );
};
