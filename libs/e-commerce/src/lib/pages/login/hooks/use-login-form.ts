import { useState, useCallback } from 'react';
import { LoginPageLocale } from '../../../shared';
import { validateEmail, validatePassword } from '../utils/functions';

/**
 * Hook for managing login form state and validation
 *
 * @param locale - Localized text content for validation messages
 * @param onLogin - Callback when login form is submitted
 * @returns Form state and handlers
 */
export interface UseLoginFormParams {
  locale: LoginPageLocale;
  onLogin?: (email: string, password: string) => void | Promise<void>;
}

export interface UseLoginFormReturn {
  email: string;
  password: string;
  emailError: string;
  passwordError: string;
  isLoading: boolean;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  handleEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleEmailBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  handlePasswordBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
}

export const useLoginForm = ({
  locale,
  onLogin,
}: UseLoginFormParams): UseLoginFormReturn => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const validateEmailField = useCallback(
    (value: string): boolean => {
      if (!value) {
        setEmailError(locale.EMAIL_REQUIRED);
        return false;
      }
      if (!validateEmail({ email: value })) {
        setEmailError(locale.EMAIL_INVALID);
        return false;
      }
      setEmailError('');
      return true;
    },
    [locale.EMAIL_REQUIRED, locale.EMAIL_INVALID]
  );

  const validatePasswordField = useCallback(
    (value: string): boolean => {
      if (!value) {
        setPasswordError(locale.PASSWORD_REQUIRED);
        return false;
      }
      if (!validatePassword({ password: value })) {
        setPasswordError(locale.PASSWORD_MIN_LENGTH);
        return false;
      }
      setPasswordError('');
      return true;
    },
    [locale.PASSWORD_REQUIRED, locale.PASSWORD_MIN_LENGTH]
  );

  const handleEmailChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
      if (emailError) validateEmailField(e.target.value);
    },
    [emailError, validateEmailField]
  );

  const handlePasswordChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
      if (passwordError) validatePasswordField(e.target.value);
    },
    [passwordError, validatePasswordField]
  );

  const handleEmailBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      validateEmailField(e.target.value);
    },
    [validateEmailField]
  );

  const handlePasswordBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      validatePasswordField(e.target.value);
    },
    [validatePasswordField]
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      const isEmailValid = validateEmailField(email);
      const isPasswordValid = validatePasswordField(password);

      if (isEmailValid && isPasswordValid) {
        setIsLoading(true);
        try {
          await onLogin?.(email, password);
        } finally {
          setIsLoading(false);
        }
      }
    },
    [email, password, validateEmailField, validatePasswordField, onLogin]
  );

  return {
    email,
    password,
    emailError,
    passwordError,
    isLoading,
    setEmail,
    setPassword,
    handleEmailChange,
    handlePasswordChange,
    handleEmailBlur,
    handlePasswordBlur,
    handleSubmit,
  };
};
