import { useForm } from 'react-hook-form';
import * as styles from '../utils/styles';
import type { LocaleStrings } from '../utils/locales';
import type { ContactFormData } from '../utils/types';
import { CustomSelect } from '@webbitstudio/ui-components';
import { useContactFormSubmit } from '../hooks';
import { CONTACT_DETAILS_MAX_LENGTH } from '../utils';

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

const EMAIL_REG = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i);

export const ContactSection = ({
  content,
  web3formsAccessKey,
  apiEndpoint,
  onSubmit,
}: ContactSectionProps) => {
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
    successMessage: content.form.successMessage,
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
                  htmlFor="contact-name"
                  className={styles.typography.label}
                >
                  {content.form.name.label}
                </label>
                <input
                  type="text"
                  id="contact-name"
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
                  htmlFor="contact-email"
                  className={styles.typography.label}
                >
                  {content.form.email.label}
                </label>
                <input
                  type="email"
                  id="contact-email"
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
                htmlFor="contact-country"
                className={styles.typography.label}
              >
                {content.form.country.label}
              </label>
              <input
                type="text"
                id="contact-country"
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
                htmlFor="contact-details"
                className={styles.typography.label}
              >
                {content.form.details.label}
              </label>
              <textarea
                id="contact-details"
                {...register('details')}
                placeholder={content.form.details.placeholder}
                rows={4}
                maxLength={CONTACT_DETAILS_MAX_LENGTH}
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
          </form>
        </div>
      </div>
    </section>
  );
};
