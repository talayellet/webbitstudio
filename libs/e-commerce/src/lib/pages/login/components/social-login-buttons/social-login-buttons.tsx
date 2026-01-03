import { SOCIAL_LOGIN_BUTTONS_STYLES } from './utils/social-login-buttons.styles';
import { LoginPageLocale } from '../../../../shared';
import { GoogleIcon, FacebookIcon } from '@webbitstudio/ui-components';

/**
 * Social Login Buttons Component
 *
 * Displays social login options (Google, Facebook, Apple) with a divider.
 * Can be reused across login, signup, and other authentication flows.
 */
export interface SocialLoginButtonsProps {
  /** Localized text content */
  locale: LoginPageLocale;
  /** Whether buttons are disabled */
  isLoading?: boolean;
  /** Callback when Google login is clicked */
  onGoogleLogin?: () => void;
  /** Callback when Facebook login is clicked */
  onFacebookLogin?: () => void;
}

export const SocialLoginButtons = ({
  locale,
  isLoading = false,
  onGoogleLogin,
  onFacebookLogin,
}: SocialLoginButtonsProps) => {
  return (
    <>
      <div className={SOCIAL_LOGIN_BUTTONS_STYLES.DIVIDER_CONTAINER}>
        <div className={SOCIAL_LOGIN_BUTTONS_STYLES.DIVIDER_LINE}>
          <div className={SOCIAL_LOGIN_BUTTONS_STYLES.DIVIDER_BORDER} />
        </div>
        <div className={SOCIAL_LOGIN_BUTTONS_STYLES.DIVIDER_TEXT}>
          <span className={SOCIAL_LOGIN_BUTTONS_STYLES.DIVIDER_TEXT_BG}>
            {locale.OR_DIVIDER}
          </span>
        </div>
      </div>

      <div className={SOCIAL_LOGIN_BUTTONS_STYLES.SOCIAL_BUTTONS}>
        {onGoogleLogin && (
          <button
            type="button"
            onClick={onGoogleLogin}
            className={SOCIAL_LOGIN_BUTTONS_STYLES.SOCIAL_BUTTON}
            disabled={isLoading}
          >
            <GoogleIcon className={SOCIAL_LOGIN_BUTTONS_STYLES.SOCIAL_ICON} />
            <span className={SOCIAL_LOGIN_BUTTONS_STYLES.SOCIAL_BUTTON_TEXT}>
              {locale.CONTINUE_WITH_GOOGLE}
            </span>
          </button>
        )}

        {onFacebookLogin && (
          <button
            type="button"
            onClick={onFacebookLogin}
            className={SOCIAL_LOGIN_BUTTONS_STYLES.SOCIAL_BUTTON}
            disabled={isLoading}
          >
            <FacebookIcon className={SOCIAL_LOGIN_BUTTONS_STYLES.SOCIAL_ICON} />
            <span className={SOCIAL_LOGIN_BUTTONS_STYLES.SOCIAL_BUTTON_TEXT}>
              {locale.CONTINUE_WITH_FACEBOOK}
            </span>
          </button>
        )}
      </div>
    </>
  );
};
