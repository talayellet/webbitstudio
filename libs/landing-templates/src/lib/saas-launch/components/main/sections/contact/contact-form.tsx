import React, { useState } from 'react';
import { STYLES, LocaleStrings } from '../../../../utils';

const cx = (...classes: (string | readonly string[])[]) =>
  classes.flat().join(' ');

export interface ContactFormProps {
  formTitle: string;
  localeStrings: LocaleStrings;
  onSubmit?: (data: { name: string; email: string; message: string }) => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  formTitle,
  localeStrings,
  onSubmit,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    } else {
      // Default behavior if no onSubmit handler provided
      console.log('Form submitted:', formData);
      alert(localeStrings.contact.form.successMessage);
    }
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={cx(STYLES.CONTACT_FORM_WRAPPER)}>
      <h3 className={STYLES.CONTACT_FORM_TITLE}>{formTitle}</h3>
      <form onSubmit={handleSubmit} className={STYLES.CONTACT_FORM}>
        <div>
          <label htmlFor="name" className={STYLES.CONTACT_FORM_LABEL}>
            {localeStrings.contact.form.name.label}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={cx(STYLES.CONTACT_FORM_INPUT)}
            placeholder={localeStrings.contact.form.name.placeholder}
          />
        </div>

        <div>
          <label htmlFor="email" className={STYLES.CONTACT_FORM_LABEL}>
            {localeStrings.contact.form.email.label}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={cx(STYLES.CONTACT_FORM_INPUT)}
            placeholder={localeStrings.contact.form.email.placeholder}
          />
        </div>

        <div>
          <label htmlFor="message" className={STYLES.CONTACT_FORM_LABEL}>
            {localeStrings.contact.form.message.label}
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className={cx(STYLES.CONTACT_FORM_TEXTAREA)}
            placeholder={localeStrings.contact.form.message.placeholder}
          />
        </div>

        <button type="submit" className={cx(STYLES.CONTACT_FORM_BUTTON)}>
          {localeStrings.contact.form.submit}
        </button>
      </form>
    </div>
  );
};
