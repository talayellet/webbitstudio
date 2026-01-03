/**
 * Locale definitions for the eCommerce Login Page
 */

import type { LoginPageLocale } from '../shared/types';

export const ENGLISH_LOGIN_LOCALE: LoginPageLocale = {
  PAGE_TITLE: 'Login to Your Account',
  EMAIL_LABEL: 'Email Address',
  EMAIL_PLACEHOLDER: 'Enter your email',
  PASSWORD_LABEL: 'Password',
  PASSWORD_PLACEHOLDER: 'Enter your password',
  LOGIN_BUTTON: 'Login',
  FORGOT_PASSWORD: 'Forgot password?',
  NO_ACCOUNT: "Don't have an account?",
  SIGNUP_LINK: 'Sign up',
  OR_DIVIDER: 'OR',
  CONTINUE_WITH_GOOGLE: 'Continue with Google',
  CONTINUE_WITH_FACEBOOK: 'Continue with Facebook',
  EMAIL_REQUIRED: 'Email is required',
  EMAIL_INVALID: 'Please enter a valid email address',
  PASSWORD_REQUIRED: 'Password is required',
  PASSWORD_MIN_LENGTH: 'Password must be at least 8 characters',
  LOGGING_IN: 'Logging in...',
  LOGIN_ERROR_GENERIC: 'Login failed. Please try again.',
  LANGUAGE_PLACEHOLDER: 'Select language',
};

export const HEBREW_LOGIN_LOCALE: LoginPageLocale = {
  PAGE_TITLE: 'התחבר לחשבונך',
  EMAIL_LABEL: 'כתובת אימייל',
  EMAIL_PLACEHOLDER: 'הזן את האימייל שלך',
  PASSWORD_LABEL: 'סיסמה',
  PASSWORD_PLACEHOLDER: 'הזן את הסיסמה שלך',
  LOGIN_BUTTON: 'התחבר',
  FORGOT_PASSWORD: 'שכחת סיסמה?',
  NO_ACCOUNT: 'אין לך חשבון?',
  SIGNUP_LINK: 'הירשם',
  OR_DIVIDER: 'או',
  CONTINUE_WITH_GOOGLE: 'המשך עם Google',
  CONTINUE_WITH_FACEBOOK: 'המשך עם Facebook',
  EMAIL_REQUIRED: 'נדרש אימייל',
  EMAIL_INVALID: 'אנא הזן כתובת אימייל תקינה',
  PASSWORD_REQUIRED: 'נדרשת סיסמה',
  PASSWORD_MIN_LENGTH: 'הסיסמה חייבת להכיל לפחות 8 תווים',
  LOGGING_IN: 'מתחבר...',
  LOGIN_ERROR_GENERIC: 'ההתחברות נכשלה. אנא נסה שוב.',
  LANGUAGE_PLACEHOLDER: 'בחר שפה',
};

export const SPANISH_LOGIN_LOCALE: LoginPageLocale = {
  PAGE_TITLE: 'Inicia sesión en tu cuenta',
  EMAIL_LABEL: 'Correo electrónico',
  EMAIL_PLACEHOLDER: 'Ingresa tu correo electrónico',
  PASSWORD_LABEL: 'Contraseña',
  PASSWORD_PLACEHOLDER: 'Ingresa tu contraseña',
  LOGIN_BUTTON: 'Iniciar sesión',
  FORGOT_PASSWORD: '¿Olvidaste tu contraseña?',
  NO_ACCOUNT: '¿No tienes cuenta?',
  SIGNUP_LINK: 'Regístrate',
  OR_DIVIDER: 'O',
  CONTINUE_WITH_GOOGLE: 'Continuar con Google',
  CONTINUE_WITH_FACEBOOK: 'Continuar con Facebook',
  EMAIL_REQUIRED: 'El correo electrónico es obligatorio',
  EMAIL_INVALID: 'Por favor ingresa un correo electrónico válido',
  PASSWORD_REQUIRED: 'La contraseña es obligatoria',
  PASSWORD_MIN_LENGTH: 'La contraseña debe tener al menos 8 caracteres',
  LOGGING_IN: 'Iniciando sesión...',
  LOGIN_ERROR_GENERIC:
    'Inicio de sesión fallido. Por favor, inténtalo de nuevo.',
  LANGUAGE_PLACEHOLDER: 'Selecciona idioma',
};
