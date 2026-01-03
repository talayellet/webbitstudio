import { WebbitLogo } from '../../icons';
import { ENGLISH_LOGIN_LOCALE } from '../../locale';
import { LOGIN_PAGE_STYLES } from './utils';
import { LoginPageLocale } from '../../shared';
import { useLoginForm } from './hooks';
import { SocialLoginButtons } from './components';
import { CustomSelect } from '@webbitstudio/ui-components';

/**
 * eCommerce Login Page Component
 *
 * A professional login page featuring:
 * - Email and password input fields with validation
 * - Forgot password link
 * - Sign up redirect link
 * - Optional social login buttons (Google, Facebook)
 * - Localization support
 * - RTL support
 *
 * @example
 * ```tsx
 * <LoginPage
 *   logo={<img src="logo.png" alt="My Store" />}
 *   onLogin={(email, password) => handleLogin(email, password)}
 *   onSignup={() => router.push('/signup')}
 *   onForgotPassword={() => router.push('/forgot-password')}
 * />
 * ```
 */
export interface LoginPageProps {
  /** Custom logo element (defaults to WebbitLogo if not provided) */
  logo?: React.ReactNode;
  /** Whether to use RTL layout */
  isRtl?: boolean;
  /** Localized text content */
  locale?: LoginPageLocale;
  /** Callback when login form is submitted */
  onLogin?: (email: string, password: string) => void | Promise<void>;
  /** Callback when signup link is clicked */
  onSignup?: () => void;
  /** Callback when forgot password link is clicked */
  onForgotPassword?: () => void;
  /** Callback when Google login is clicked */
  onGoogleLogin?: () => void;
  /** Callback when Facebook login is clicked */
  onFacebookLogin?: () => void;
  /** Show social login buttons */
  showSocialLogin?: boolean;
  /** Show language selector */
  showLanguageSelector?: boolean;
  /** Current language native name */
  currentLanguage?: string;
  /** Available language options (native names) */
  languageOptions?: string[];
  /** Callback when language is changed */
  onLanguageChange?: (nativeName: string) => void;
}

export const LoginPage = ({
  logo,
  isRtl = false,
  locale = ENGLISH_LOGIN_LOCALE,
  onLogin,
  onSignup,
  onForgotPassword,
  onGoogleLogin,
  onFacebookLogin,
  showSocialLogin = false,
  showLanguageSelector = false,
  currentLanguage,
  languageOptions = [],
  onLanguageChange,
}: LoginPageProps) => {
  const {
    email,
    password,
    emailError,
    passwordError,
    isLoading,
    handleEmailChange,
    handlePasswordChange,
    handleEmailBlur,
    handlePasswordBlur,
    handleSubmit,
  } = useLoginForm({ locale, onLogin });

  return (
    <div
      className={LOGIN_PAGE_STYLES.PAGE_CONTAINER}
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      {/* Language Selector */}
      {showLanguageSelector && (
        <div className={LOGIN_PAGE_STYLES.LANGUAGE_SELECTOR_WRAPPER}>
          <CustomSelect
            value={currentLanguage ?? ''}
            onChange={
              onLanguageChange ??
              (() => {
                /** NOOP */
              })
            }
            placeholder={locale.LANGUAGE_PLACEHOLDER}
            options={languageOptions}
            triggerClassName={LOGIN_PAGE_STYLES.LANGUAGE_SELECT_BUTTON}
            menuClassName={LOGIN_PAGE_STYLES.LANGUAGE_SELECT_MENU}
            optionClassName={LOGIN_PAGE_STYLES.LANGUAGE_SELECT_OPTION}
            optionSelectedClassName={
              LOGIN_PAGE_STYLES.LANGUAGE_SELECT_OPTION_SELECTED
            }
          />
        </div>
      )}

      <div className={LOGIN_PAGE_STYLES.FORM_WRAPPER}>
        <div className={LOGIN_PAGE_STYLES.CARD}>
          {/* Logo */}
          <div className={LOGIN_PAGE_STYLES.LOGO_CONTAINER} dir="ltr">
            {logo ?? <WebbitLogo />}
          </div>

          {/* Header */}
          <div className={LOGIN_PAGE_STYLES.HEADER}>
            <h1 className={LOGIN_PAGE_STYLES.TITLE}>{locale.PAGE_TITLE}</h1>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className={LOGIN_PAGE_STYLES.FORM}>
            {/* Email Field */}
            <div className={LOGIN_PAGE_STYLES.FIELD_GROUP}>
              <label htmlFor="email" className={LOGIN_PAGE_STYLES.LABEL}>
                {locale.EMAIL_LABEL}
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={handleEmailChange}
                onBlur={handleEmailBlur}
                placeholder={locale.EMAIL_PLACEHOLDER}
                className={
                  emailError
                    ? LOGIN_PAGE_STYLES.INPUT_ERROR
                    : LOGIN_PAGE_STYLES.INPUT
                }
                disabled={isLoading}
                autoComplete="email"
                aria-invalid={!!emailError}
                aria-describedby={emailError ? 'email-error' : undefined}
              />
              {emailError && (
                <p
                  id="email-error"
                  className={LOGIN_PAGE_STYLES.ERROR_MESSAGE}
                  role="alert"
                  aria-live="polite"
                >
                  {emailError}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div className={LOGIN_PAGE_STYLES.FIELD_GROUP}>
              <label htmlFor="password" className={LOGIN_PAGE_STYLES.LABEL}>
                {locale.PASSWORD_LABEL}
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={handlePasswordChange}
                onBlur={handlePasswordBlur}
                placeholder={locale.PASSWORD_PLACEHOLDER}
                className={
                  passwordError
                    ? LOGIN_PAGE_STYLES.INPUT_ERROR
                    : LOGIN_PAGE_STYLES.INPUT
                }
                disabled={isLoading}
                autoComplete="current-password"
                aria-invalid={!!passwordError}
                aria-describedby={passwordError ? 'password-error' : undefined}
              />
              {passwordError && (
                <p
                  id="password-error"
                  className={LOGIN_PAGE_STYLES.ERROR_MESSAGE}
                  role="alert"
                  aria-live="polite"
                >
                  {passwordError}
                </p>
              )}
            </div>

            {/* Forgot Password */}
            <div className={LOGIN_PAGE_STYLES.FORGOT_PASSWORD_CONTAINER}>
              <button
                type="button"
                onClick={onForgotPassword}
                className={LOGIN_PAGE_STYLES.FORGOT_PASSWORD_BUTTON}
                disabled={isLoading}
              >
                {locale.FORGOT_PASSWORD}
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={LOGIN_PAGE_STYLES.SUBMIT_BUTTON}
              disabled={isLoading}
            >
              {isLoading ? locale.LOGGING_IN : locale.LOGIN_BUTTON}
            </button>
          </form>

          {/* Social Login */}
          {showSocialLogin && (
            <SocialLoginButtons
              locale={locale}
              isLoading={isLoading}
              onGoogleLogin={onGoogleLogin}
              onFacebookLogin={onFacebookLogin}
            />
          )}

          {/* Sign Up Link */}
          <div className={LOGIN_PAGE_STYLES.SIGNUP_CONTAINER}>
            <span className={LOGIN_PAGE_STYLES.SIGNUP_TEXT}>
              {locale.NO_ACCOUNT}
              <button
                type="button"
                onClick={onSignup}
                className={LOGIN_PAGE_STYLES.SIGNUP_LINK}
                disabled={isLoading}
              >
                {locale.SIGNUP_LINK}
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
