import { useForm } from 'react-hook-form';
import { useState } from 'react';
import * as contactSectionStyles from '../../utils/styles';
import {
  LocaleStrings,
  ContactFormData,
  CONTACT_FORM_IDS,
  WEBBIT_STUDIO_EMAIL,
  WEBBIT_STUDIO_NAME,
} from '../../../../shared';
import { CustomSelect, Toast, Modal } from '@webbitstudio/ui-components';
import { useContactFormSubmit, useGeoBasedPhone } from '../../hooks';
import {
  DEFAULT_INPUT_MAX_LENGTH,
  EMAIL_REG,
} from '@webbitstudio/shared-utils';
import { CONTACT_SECTION } from '../../utils';
import {
  ContactIntro,
  FormField,
  ConsentField,
  ContactFallback,
} from './components';
import { PrivacyPolicyPage } from '../../../privacy-policy';

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
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
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
          <ContactIntro content={content} />

          <form
            onSubmit={handleSubmit(onFormSubmit)}
            className={contactSectionStyles.form.root}
          >
            <div className={contactSectionStyles.form.grid}>
              <FormField
                id={CONTACT_FORM_IDS.NAME}
                label={content.form.name.label}
                type="text"
                placeholder={content.form.name.placeholder}
                register={register('name', { required: true })}
                error={errors.name}
                errorMessage={content.form.errors.nameRequired}
                required
              />
              <FormField
                id={CONTACT_FORM_IDS.EMAIL}
                label={content.form.email.label}
                type="email"
                placeholder={content.form.email.placeholder}
                register={register('email', {
                  required: true,
                  pattern: EMAIL_REG,
                })}
                error={errors.email}
                errorMessage={
                  errors.email?.type === 'required'
                    ? content.form.errors.emailRequired
                    : content.form.errors.emailInvalid
                }
                required
              />
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

            <div className={contactSectionStyles.form.privacyNoticeContainer}>
              <p className={contactSectionStyles.form.privacyNotice}>
                {content.form.privacyNotice}
              </p>
            </div>

            <ConsentField
              register={register('consent', { required: true })}
              error={errors.consent}
              consentLabel={content.form.consent.label}
              privacyPolicyText={content.form.consent.privacyPolicy}
              errorMessage={content.form.errors.consentRequired}
              onPrivacyPolicyClick={() => setShowPrivacyModal(true)}
            />

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

            <ContactFallback
              emailText={content.form.emailFallback}
              phoneText={content.form.phoneFallback}
              phoneNumber={phoneNumber}
              whatsappText={content.form.whatsappFallback}
            />
          </form>
        </div>
      </div>

      <Toast
        message={content.form.successMessage}
        isVisible={showToast}
        onDismiss={() => setShowToast(false)}
      />

      <Modal
        isOpen={showPrivacyModal}
        onClose={() => setShowPrivacyModal(false)}
        ariaLabel={content.form.modal.ariaLabel}
        closeButtonAriaLabel={content.form.modal.closeButtonAriaLabel}
      >
        <PrivacyPolicyPage
          companyName={WEBBIT_STUDIO_NAME}
          companyEmail={WEBBIT_STUDIO_EMAIL}
        />
      </Modal>
    </section>
  );
};
