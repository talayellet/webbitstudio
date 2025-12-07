import React from 'react';
import { useForm } from 'react-hook-form';
import {
  STYLES,
  LocaleStrings,
  ContactFormData,
  CONTACT_FORM,
} from '../../../../utils';
import { cx, EMAIL_REG } from '../../../../../shared';
import { API_ENDPOINTS } from '@webbitstudio/shared';
import { useContactFormSubmit } from '../../../../hooks';

export interface ContactFormProps {
  formTitle: string;
  localeStrings: LocaleStrings;
  onSubmit?: (data: ContactFormData) => void;
  /**
   * Web3Forms access key (get free key at https://web3forms.com)
   * If not provided, falls back to apiEndpoint for custom backend
   */
  web3formsAccessKey?: string;
  /**
   * Custom API endpoint (only used if web3formsAccessKey is not provided)
   * @default API_ENDPOINTS.CONTACT
   */
  apiEndpoint?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  formTitle,
  localeStrings,
  onSubmit,
  web3formsAccessKey,
  apiEndpoint = API_ENDPOINTS.CONTACT,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isDirty },
  } = useForm<ContactFormData>({
    mode: 'all',
  });

  const { mutate, isSubmitting, submitError } = useContactFormSubmit({
    web3formsAccessKey,
    apiEndpoint,
    onSubmit,
    successMessage: localeStrings.contact.form.successMessage,
    onSuccess: reset,
    errorMessages: {
      serverError: localeStrings.contact.form.errors.serverError,
      rateLimitError: localeStrings.contact.form.errors.rateLimitError,
      submissionFailed: localeStrings.contact.form.errors.submissionFailed,
    },
  });

  const onFormSubmit = (data: ContactFormData) => {
    mutate(data);
  };

  return (
    <div className={cx(STYLES.CONTACT_FORM_WRAPPER)}>
      <h3 className={STYLES.CONTACT_FORM_TITLE}>{formTitle}</h3>
      <form
        onSubmit={handleSubmit(onFormSubmit)}
        className={STYLES.CONTACT_FORM}
      >
        <div>
          <label htmlFor="name" className={STYLES.CONTACT_FORM_LABEL}>
            {localeStrings.contact.form.name.label}{' '}
            <span className={STYLES.CONTACT_FORM_REQUIRED}>*</span>
          </label>
          <input
            type="text"
            id="name"
            {...register('name', { required: true })}
            className={cx(STYLES.CONTACT_FORM_INPUT)}
            placeholder={localeStrings.contact.form.name.placeholder}
            aria-required="true"
            aria-invalid={errors.name ? 'true' : 'false'}
            aria-describedby={
              errors.name ? CONTACT_FORM.ERROR_IDS.NAME : undefined
            }
          />
          <div className={STYLES.CONTACT_FORM_ERROR_CONTAINER}>
            {errors.name && (
              <span
                id={CONTACT_FORM.ERROR_IDS.NAME}
                role="alert"
                className={STYLES.CONTACT_FORM_ERROR}
              >
                {localeStrings.contact.form.errors.nameRequired}
              </span>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="email" className={STYLES.CONTACT_FORM_LABEL}>
            {localeStrings.contact.form.email.label}{' '}
            <span className={STYLES.CONTACT_FORM_REQUIRED}>*</span>
          </label>
          <input
            type="email"
            id="email"
            {...register('email', {
              required: true,
              pattern: EMAIL_REG,
            })}
            className={cx(STYLES.CONTACT_FORM_INPUT)}
            placeholder={localeStrings.contact.form.email.placeholder}
            aria-required="true"
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-describedby={
              errors.email ? CONTACT_FORM.ERROR_IDS.EMAIL : undefined
            }
          />
          <div className={STYLES.CONTACT_FORM_ERROR_CONTAINER}>
            {errors.email && (
              <span
                id={CONTACT_FORM.ERROR_IDS.EMAIL}
                role="alert"
                className={STYLES.CONTACT_FORM_ERROR}
              >
                {errors.email.type === 'required'
                  ? localeStrings.contact.form.errors.emailRequired
                  : localeStrings.contact.form.errors.emailInvalid}
              </span>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="message" className={STYLES.CONTACT_FORM_LABEL}>
            {localeStrings.contact.form.message.label}{' '}
            <span className={STYLES.CONTACT_FORM_REQUIRED}>*</span>
          </label>
          <textarea
            id="message"
            {...register('message', { required: true, maxLength: 1000 })}
            rows={5}
            className={cx(STYLES.CONTACT_FORM_TEXTAREA)}
            placeholder={localeStrings.contact.form.message.placeholder}
            aria-required="true"
            aria-invalid={errors.message ? 'true' : 'false'}
            aria-describedby={
              errors.message ? CONTACT_FORM.ERROR_IDS.MESSAGE : undefined
            }
          />
          <div className={STYLES.CONTACT_FORM_ERROR_CONTAINER}>
            {errors.message && (
              <span
                id={CONTACT_FORM.ERROR_IDS.MESSAGE}
                role="alert"
                className={STYLES.CONTACT_FORM_ERROR}
              >
                {errors.message.type === 'maxLength'
                  ? localeStrings.contact.form.errors.messageTooLong
                  : localeStrings.contact.form.errors.messageRequired}
              </span>
            )}
          </div>
        </div>

        <div className={cx(STYLES.CONTACT_FORM_PRIVACY_NOTICE_CONTAINER)}>
          <p className={STYLES.CONTACT_FORM_PRIVACY_NOTICE}>
            {localeStrings.contact.form.privacyNotice}
          </p>
        </div>

        <div>
          <label className={STYLES.CONTACT_FORM_CONSENT_LABEL}>
            <input
              type="checkbox"
              {...register('consent', { required: true })}
              className={cx(STYLES.CONTACT_FORM_CONSENT_CHECKBOX)}
              aria-required="true"
              aria-invalid={errors.consent ? 'true' : 'false'}
              aria-describedby={
                errors.consent ? CONTACT_FORM.ERROR_IDS.CONSENT : undefined
              }
            />
            <span>
              {localeStrings.contact.form.consent.label}{' '}
              <a
                href={CONTACT_FORM.PRIVACY_POLICY_PATH}
                target="_blank"
                rel="noopener noreferrer"
                className={cx(STYLES.CONTACT_FORM_CONSENT_LINK)}
              >
                {localeStrings.contact.form.consent.privacyPolicy}
              </a>
            </span>
          </label>
          <div className={STYLES.CONTACT_FORM_ERROR_CONTAINER}>
            {errors.consent && (
              <span
                id={CONTACT_FORM.ERROR_IDS.CONSENT}
                role="alert"
                className={STYLES.CONTACT_FORM_ERROR}
              >
                {localeStrings.contact.form.errors.consentRequired}
              </span>
            )}
          </div>
        </div>

        {submitError && (
          <div className={STYLES.CONTACT_FORM_ERROR_ALERT}>{submitError}</div>
        )}

        <button
          type="submit"
          disabled={!isDirty || !isValid || isSubmitting}
          tabIndex={0}
          className={cx(STYLES.CONTACT_FORM_BUTTON)}
        >
          {isSubmitting
            ? localeStrings.contact.form.submitting
            : localeStrings.contact.form.submit}
        </button>
      </form>
    </div>
  );
};
