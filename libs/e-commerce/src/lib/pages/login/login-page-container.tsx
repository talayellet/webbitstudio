import { useState, useMemo } from 'react';
import { OAUTH_PROVIDERS } from '@webbitstudio/data-access';
import { Toast } from '@webbitstudio/ui-components';
import { LoginPage } from './login-page';
import { LOGIN_PAGE_STYLES, getOAuthCallbackUrl } from './utils';
import { useLogin, useOAuthLogin } from './hooks';
import {
  getLoginLocaleForLanguage,
  E_COMMERCE_DEFAULT_LANGUAGES,
  Language,
} from '../home';
import { useECommerceNavigation } from '../../hooks';
import { HEBREW } from '../../locale';

export interface LoginPageContainerProps {
  currentLanguage: Language;
  onLanguageChange: (languageCode: string) => void;
}

/**
 * Login Page Container with Navigation
 *
 * Reusable container component that handles:
 * - Authentication logic
 * - Navigation handlers via useECommerceNavigation hook
 * - OAuth integrations (Google, Facebook, Apple)
 * - Clean separation of concerns
 *
 * @example
 * ```tsx
 * <LoginPageContainer
 *   currentLanguage={currentLanguage}
 *   onLanguageChange={handleLanguageChange}
 * />
 * ```
 */
export const LoginPageContainer = ({
  currentLanguage,
  onLanguageChange,
}: LoginPageContainerProps) => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showErrorToast, setShowErrorToast] = useState<boolean>(false);

  const { handleLogin: navigateToHome, handleSignup: navigateToSignup } =
    useECommerceNavigation();

  const loginLocale = getLoginLocaleForLanguage(currentLanguage.code);

  const { mutate: loginUser } = useLogin({
    onSuccess: () => {
      navigateToHome();
    },
    onError: (error) => {
      setErrorMessage(error.message || loginLocale.LOGIN_ERROR_GENERIC);
      setShowErrorToast(true);
    },
  });

  const { handleOAuthLogin } = useOAuthLogin({
    callbackUrl: getOAuthCallbackUrl(),
  });

  const handleLogin = async (email: string, password: string) => {
    loginUser({ email, password });
  };

  const handleSignup = () => {
    navigateToSignup();
  };

  const handleForgotPassword = () => {
    // TODO: Implement forgot password flow
  };

  const handleGoogleLogin = () => {
    handleOAuthLogin(OAUTH_PROVIDERS.GOOGLE);
  };

  const handleFacebookLogin = () => {
    handleOAuthLogin(OAUTH_PROVIDERS.FACEBOOK);
  };

  const handleAppleLogin = () => {
    handleOAuthLogin(OAUTH_PROVIDERS.APPLE);
  };

  const languageOptions = useMemo(
    () => E_COMMERCE_DEFAULT_LANGUAGES.map((lang) => lang.nativeName),
    []
  );

  const handleLanguageChange = (nativeName: string) => {
    const selectedLanguage = E_COMMERCE_DEFAULT_LANGUAGES.find(
      (lang) => lang.nativeName === nativeName
    );
    if (selectedLanguage) {
      onLanguageChange(selectedLanguage.code);
    }
  };

  return (
    <div className={LOGIN_PAGE_STYLES.CONTAINER}>
      <LoginPage
        key={currentLanguage.code}
        isRtl={currentLanguage.code === HEBREW}
        locale={loginLocale}
        onLogin={handleLogin}
        onSignup={handleSignup}
        onForgotPassword={handleForgotPassword}
        onGoogleLogin={handleGoogleLogin}
        onFacebookLogin={handleFacebookLogin}
        onAppleLogin={handleAppleLogin}
        showSocialLogin={true}
        showLanguageSelector={true}
        currentLanguage={currentLanguage.nativeName}
        languageOptions={languageOptions}
        onLanguageChange={handleLanguageChange}
      />

      {errorMessage && (
        <Toast
          message={errorMessage}
          isVisible={showErrorToast}
          onDismiss={() => setShowErrorToast(false)}
        />
      )}
    </div>
  );
};
