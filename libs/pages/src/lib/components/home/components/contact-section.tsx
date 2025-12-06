import { useForm } from 'react-hook-form';
import { useState } from 'react';
import * as styles from '../utils/styles';
import type { LocaleStrings } from '../utils/locales';
import type { ContactFormData } from '../utils/types';
import {
  CustomSelect,
  EnvelopeIcon,
  PhoneIcon,
  Toast,
} from '@webbitstudio/ui-components';
import { useContactFormSubmit, useGeoBasedPhone } from '../hooks';
import {
  DEFAULT_INPUT_MAX_LENGTH,
  EMAIL_REG,
} from '@webbitstudio/shared-utils';
import {
  CONTACT_FORM_IDS,
  WEBBIT_STUDIO_EMAIL,
} from '../../../utils/constants';

interface ContactSectionProps {
  content: LocaleStrings['contactSection'];
  /**
   * Web3Forms access key (get free key at https://web3forms.com)
   * If not provided, falls back to apiEndpoint for custom backend
   */
  web3formsAccessKey?: string;
  /**
   * Custom API endpoint (only used if web3formsAccessKey is not provided)
   */
  apiEndpoint?: string;
  /**
   * Custom submit handler that bypasses the default submission logic
   */
  onSubmit?: (data: ContactFormData) => void;
}

export const ContactSection = ({
  content,
  web3formsAccessKey,
  apiEndpoint,
  onSubmit,
}: ContactSectionProps) => {
  const [showToast, setShowToast] = useState(false);
  const phoneNumber = useGeoBasedPhone();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors, isValid, isDirty },
  } = useForm<ContactFormData>({
    mode: 'all',
  });

  const selectedPackage = watch('package') || '';

  const { mutate, isSubmitting, submitError } = useContactFormSubmit({
    web3formsAccessKey,
    apiEndpoint,
    onSubmit,
    onShowToast: () => setShowToast(true),
    onSuccess: reset,
    errorMessages: {
      serverError: content.form.errors.serverError,
      rateLimitError: content.form.errors.rateLimitError,
      submissionFailed: content.form.errors.submissionFailed,
    },
  });

  const onFormSubmit = (data: ContactFormData) => {
    mutate(data);
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className={styles.section.contact}
    >
      <div className={styles.card.contact}>
        <div className={styles.contact.grid}>
          <div>
            <h2 id="contact-heading" className={styles.typography.h2}>
              {content.title}
            </h2>
            <p className={styles.contact.intro}>{content.intro}</p>
            <ul className={styles.list.contactPoints}>
              {content.contactPoints.map((point, index) => (
                <li key={index}>• {point}</li>
              ))}
            </ul>
          </div>

          <form
            onSubmit={handleSubmit(onFormSubmit)}
            className={styles.form.root}
          >
            <div className={styles.form.grid}>
              <div className={styles.form.fieldContainer}>
                <label
                  htmlFor={CONTACT_FORM_IDS.NAME}
                  className={styles.typography.label}
                >
                  {content.form.name.label}
                </label>
                <input
                  type="text"
                  id={CONTACT_FORM_IDS.NAME}
                  {...register('name', { required: true })}
                  placeholder={content.form.name.placeholder}
                  className={styles.form.input}
                  aria-required="true"
                  aria-invalid={errors.name ? 'true' : 'false'}
                />
                {errors.name && (
                  <p className={styles.form.error}>
                    {content.form.errors.nameRequired}
                  </p>
                )}
              </div>
              <div className={styles.form.fieldContainer}>
                <label
                  htmlFor={CONTACT_FORM_IDS.EMAIL}
                  className={styles.typography.label}
                >
                  {content.form.email.label}
                </label>
                <input
                  type="email"
                  id={CONTACT_FORM_IDS.EMAIL}
                  {...register('email', {
                    required: true,
                    pattern: EMAIL_REG,
                  })}
                  placeholder={content.form.email.placeholder}
                  className={styles.form.input}
                  aria-required="true"
                  aria-invalid={errors.email ? 'true' : 'false'}
                />
                {errors.email && (
                  <p className={styles.form.error}>
                    {errors.email.type === 'required'
                      ? content.form.errors.emailRequired
                      : content.form.errors.emailInvalid}
                  </p>
                )}
              </div>
            </div>

            <div className={styles.form.fieldContainer}>
              <label
                htmlFor={CONTACT_FORM_IDS.COUNTRY}
                className={styles.typography.label}
              >
                {content.form.country.label}
              </label>
              <input
                type="text"
                id={CONTACT_FORM_IDS.COUNTRY}
                {...register('country')}
                placeholder={content.form.country.placeholder}
                className={styles.form.input}
              />
            </div>

            <CustomSelect
              value={selectedPackage}
              onChange={(value) => setValue('package', value)}
              placeholder={content.form.package.placeholder}
              options={content.form.package.options}
              label={content.form.package.label}
              fieldContainerClassName={styles.form.fieldContainer}
              labelClassName={styles.typography.label}
              wrapperClassName={styles.customSelect.wrapper}
              triggerClassName={styles.customSelect.trigger}
              iconClassName={styles.customSelect.icon}
              menuClassName={styles.customSelect.menu}
              optionClassName={styles.customSelect.option}
              optionSelectedClassName={styles.customSelect.optionSelected}
            />

            <div className={styles.form.fieldContainer}>
              <label
                htmlFor={CONTACT_FORM_IDS.DETAILS}
                className={styles.typography.label}
              >
                {content.form.details.label}
              </label>
              <textarea
                id={CONTACT_FORM_IDS.DETAILS}
                {...register('details')}
                placeholder={content.form.details.placeholder}
                rows={4}
                maxLength={DEFAULT_INPUT_MAX_LENGTH}
                className={styles.form.textarea}
              />
            </div>

            {submitError && (
              <div className={styles.form.error}>{submitError}</div>
            )}

            <button
              type="submit"
              disabled={!isDirty || !isValid || isSubmitting}
              className={styles.button.lightLarge}
            >
              {isSubmitting ? content.form.submitting : content.form.submit}
            </button>

            <p className={styles.form.note}>{content.form.note}</p>
            <div className={styles.form.emailFallback}>
              <EnvelopeIcon className={styles.form.emailFallbackIcon} />
              <span>
                {content.form.emailFallback}{' '}
                <a
                  href={`mailto:${WEBBIT_STUDIO_EMAIL}`}
                  className={styles.form.emailFallbackLink}
                >
                  {WEBBIT_STUDIO_EMAIL}
                </a>
              </span>
            </div>
            <div className={styles.form.emailFallback}>
              <PhoneIcon className={styles.form.emailFallbackIcon} />
              <span>
                {content.form.phoneFallback}{' '}
                <a
                  href={`tel:${phoneNumber.dialable}`}
                  className={styles.form.emailFallbackLink}
                >
                  {phoneNumber.display}
                </a>
              </span>
            </div>
          </form>
        </div>
      </div>

      <Toast
        message={content.form.successMessage}
        isVisible={showToast}
        onDismiss={() => setShowToast(false)}
      />
    </section>
  );
};
