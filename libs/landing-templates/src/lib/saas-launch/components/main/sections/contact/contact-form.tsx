import React from 'react';
import { useForm } from 'react-hook-form';
import { STYLES, LocaleStrings } from '../../../../utils';
import { EMAIL_REG } from '../../../../../shared';

const cx = (...classes: (string | readonly string[])[]) =>
  classes.flat().join(' ');

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ContactFormProps {
  formTitle: string;
  localeStrings: LocaleStrings;
  onSubmit?: (data: ContactFormData) => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  formTitle,
  localeStrings,
  onSubmit,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isDirty },
  } = useForm<ContactFormData>({
    mode: 'all',
  });

  const onFormSubmit = (data: ContactFormData) => {
    if (onSubmit) {
      onSubmit(data);
    } else {
      // Default behavior if no onSubmit handler provided
      console.log('Form submitted:', data);
      alert(localeStrings.contact.form.successMessage);
    }
    reset();
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
          />
          <div className={STYLES.CONTACT_FORM_ERROR_CONTAINER}>
            {errors.name && (
              <span className={STYLES.CONTACT_FORM_ERROR}>
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
          />
          <div className={STYLES.CONTACT_FORM_ERROR_CONTAINER}>
            {errors.email && (
              <span className={STYLES.CONTACT_FORM_ERROR}>
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
          />
          <div className={STYLES.CONTACT_FORM_ERROR_CONTAINER}>
            {errors.message && (
              <span className={STYLES.CONTACT_FORM_ERROR}>
                {errors.message.type === 'maxLength'
                  ? localeStrings.contact.form.errors.messageTooLong
                  : localeStrings.contact.form.errors.messageRequired}
              </span>
            )}
          </div>
        </div>

        <button
          type="submit"
          disabled={!isDirty || !isValid}
          tabIndex={0}
          className={cx(STYLES.CONTACT_FORM_BUTTON)}
        >
          {localeStrings.contact.form.submit}
        </button>
      </form>
    </div>
  );
};
