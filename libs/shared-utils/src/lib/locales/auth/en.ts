/**
 * Authentication locale strings interface
 */
export interface AuthLocaleStrings {
  signin: {
    redirecting: string;
  };
  signout: {
    title: string;
    message: string;
    confirmButton: string;
    cancelButton: string;
  };
}

/**
 * English locale strings for authentication pages
 */
export const en: AuthLocaleStrings = {
  signin: {
    redirecting: 'Redirecting to Google...',
  },
  signout: {
    title: 'Sign Out',
    message: 'Are you sure you want to sign out?',
    confirmButton: 'Sign out',
    cancelButton: 'Cancel',
  },
};
