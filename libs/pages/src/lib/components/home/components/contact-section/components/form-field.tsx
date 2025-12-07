import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import * as contactSectionStyles from '../../../utils/styles';

interface FormFieldProps {
  id: string;
  label: string;
  type?: 'text' | 'email';
  placeholder: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
  errorMessage?: string;
  required?: boolean;
}

/**
 * FormField component for text and email inputs with accessibility support
 */
export const FormField = ({
  id,
  label,
  type = 'text',
  placeholder,
  register,
  error,
  errorMessage,
  required = false,
}: FormFieldProps) => {
  const errorId = `${id}-error`;

  return (
    <div className={contactSectionStyles.form.fieldContainer}>
      <label htmlFor={id} className={contactSectionStyles.typography.label}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        {...register}
        placeholder={placeholder}
        className={contactSectionStyles.form.input}
        aria-required={required ? 'true' : 'false'}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? errorId : undefined}
      />
      {error && errorMessage && (
        <p
          id={errorId}
          role="alert"
          className={contactSectionStyles.form.error}
        >
          {errorMessage}
        </p>
      )}
    </div>
  );
};
