import { useForm } from 'react-hook-form';
import { useState } from 'react';
import * as contactSectionStyles from '../utils/styles';
import {
  LocaleStrings,
  ContactFormData,
  CONTACT_FORM_IDS,
  WEBBIT_STUDIO_EMAIL,
} from '../../../shared';
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
import { CONTACT_SECTION } from '../utils';

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
      id={CONTACT_SECTION.ID}
      aria-labelledby={CONTACT_SECTION.HEADING_ID}
      className={contactSectionStyles.section.contact}
    >
      <div className={contactSectionStyles.card.contact}>
        <div className={contactSectionStyles.contact.grid}>
          <div>
            <h2
              id={CONTACT_SECTION.HEADING_ID}
              className={contactSectionStyles.typography.h2}
            >
              {content.title}
            </h2>
            <p className={contactSectionStyles.contact.intro}>
              {content.intro}
            </p>
            <ul className={contactSectionStyles.list.contactPoints}>
              {content.contactPoints.map((point, index) => (
                <li key={index}>• {point}</li>
              ))}
            </ul>
          </div>

          <form
            onSubmit={handleSubmit(onFormSubmit)}
            className={contactSectionStyles.form.root}
          >
            <div className={contactSectionStyles.form.grid}>
              <div className={contactSectionStyles.form.fieldContainer}>
                <label
                  htmlFor={CONTACT_FORM_IDS.NAME}
                  className={contactSectionStyles.typography.label}
                >
                  {content.form.name.label}
                </label>
                <input
                  type="text"
                  id={CONTACT_FORM_IDS.NAME}
                  {...register('name', { required: true })}
                  placeholder={content.form.name.placeholder}
                  className={contactSectionStyles.form.input}
                  aria-required="true"
                  aria-invalid={errors.name ? 'true' : 'false'}
                />
                {errors.name && (
                  <p className={contactSectionStyles.form.error}>
                    {content.form.errors.nameRequired}
                  </p>
                )}
              </div>
              <div className={contactSectionStyles.form.fieldContainer}>
                <label
                  htmlFor={CONTACT_FORM_IDS.EMAIL}
                  className={contactSectionStyles.typography.label}
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
                  className={contactSectionStyles.form.input}
                  aria-required="true"
                  aria-invalid={errors.email ? 'true' : 'false'}
                />
                {errors.email && (
                  <p className={contactSectionStyles.form.error}>
                    {errors.email.type === 'required'
                      ? content.form.errors.emailRequired
                      : content.form.errors.emailInvalid}
                  </p>
                )}
              </div>
            </div>

            <div className={contactSectionStyles.form.fieldContainer}>
              <label
                htmlFor={CONTACT_FORM_IDS.COUNTRY}
                className={contactSectionStyles.typography.label}
              >
                {content.form.country.label}
              </label>
              <input
                type="text"
                id={CONTACT_FORM_IDS.COUNTRY}
                {...register('country')}
                placeholder={content.form.country.placeholder}
                className={contactSectionStyles.form.input}
              />
            </div>

            <CustomSelect
              value={selectedPackage}
              onChange={(value) => setValue('package', value)}
              placeholder={content.form.package.placeholder}
              options={content.form.package.options}
              label={content.form.package.label}
              fieldContainerClassName={contactSectionStyles.form.fieldContainer}
              labelClassName={contactSectionStyles.typography.label}
              wrapperClassName={contactSectionStyles.customSelect.wrapper}
              triggerClassName={contactSectionStyles.customSelect.trigger}
              iconClassName={contactSectionStyles.customSelect.icon}
              menuClassName={contactSectionStyles.customSelect.menu}
              optionClassName={contactSectionStyles.customSelect.option}
              optionSelectedClassName={
                contactSectionStyles.customSelect.optionSelected
              }
            />

            <div className={contactSectionStyles.form.fieldContainer}>
              <label
                htmlFor={CONTACT_FORM_IDS.DETAILS}
                className={contactSectionStyles.typography.label}
              >
                {content.form.details.label}
              </label>
              <textarea
                id={CONTACT_FORM_IDS.DETAILS}
                {...register('details')}
                placeholder={content.form.details.placeholder}
                rows={4}
                maxLength={DEFAULT_INPUT_MAX_LENGTH}
                className={contactSectionStyles.form.textarea}
              />
            </div>

            <div className={contactSectionStyles.form.fieldContainer}>
              <label className={contactSectionStyles.form.consentLabel}>
                <input
                  type="checkbox"
                  {...register('consent', { required: true })}
                  className={contactSectionStyles.form.consentCheckbox}
                  aria-required="true"
                  aria-invalid={errors.consent ? 'true' : 'false'}
                />
                <span>
                  {content.form.consent.label}{' '}
                  <a
                    href={CONTACT_SECTION.PRIVACY_POLICY_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={contactSectionStyles.form.consentLink}
                  >
                    {content.form.consent.privacyPolicy}
                  </a>
                </span>
              </label>
              {errors.consent && (
                <p className={contactSectionStyles.form.error}>
                  {content.form.errors.consentRequired}
                </p>
              )}
            </div>

            {submitError && (
              <div className={contactSectionStyles.form.error}>
                {submitError}
              </div>
            )}

            <button
              type="submit"
              disabled={!isDirty || !isValid || isSubmitting}
              className={contactSectionStyles.button.lightLarge}
            >
              {isSubmitting ? content.form.submitting : content.form.submit}
            </button>

            <p className={contactSectionStyles.form.note}>
              {content.form.note}
            </p>
            <div className={contactSectionStyles.form.emailFallback}>
              <EnvelopeIcon
                className={contactSectionStyles.form.emailFallbackIcon}
              />
              <span>
                {content.form.emailFallback}{' '}
                <a
                  href={`mailto:${WEBBIT_STUDIO_EMAIL}`}
                  className={contactSectionStyles.form.emailFallbackLink}
                >
                  {WEBBIT_STUDIO_EMAIL}
                </a>
              </span>
            </div>
            <div className={contactSectionStyles.form.emailFallback}>
              <PhoneIcon
                className={contactSectionStyles.form.emailFallbackIcon}
              />
              <span>
                {content.form.phoneFallback}{' '}
                <a
                  href={`tel:${phoneNumber.dialable}`}
                  className={contactSectionStyles.form.emailFallbackLink}
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
