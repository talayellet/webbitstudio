/**
 * Style constants for the eCommerce login page
 */

export const LOGIN_PAGE_STYLES = {
  // Layout
  PAGE_CONTAINER:
    'min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12',
  FORM_WRAPPER: 'w-full max-w-md',

  // Card
  CARD: 'bg-white rounded-lg shadow-lg p-8',

  // Header
  HEADER: 'text-center mb-8',
  TITLE: 'text-3xl font-bold text-gray-900 mb-2',
  LOGO_CONTAINER: 'flex justify-center mb-6',

  // Form
  FORM: 'space-y-6',
  FIELD_GROUP: 'space-y-2',
  LABEL: 'block text-sm font-medium text-gray-700',
  INPUT:
    'w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors',
  INPUT_ERROR:
    'w-full px-4 py-2 border border-red-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors',
  ERROR_MESSAGE: 'text-sm text-red-600 mt-1',

  // Buttons
  SUBMIT_BUTTON:
    'w-full px-4 py-3 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed rounded-lg transition-colors',
  FORGOT_PASSWORD_BUTTON:
    'text-sm text-blue-600 hover:text-blue-700 hover:underline transition-colors',

  // Links
  FORGOT_PASSWORD_CONTAINER: 'flex justify-end',
  SIGNUP_CONTAINER: 'text-center mt-6 pt-6 border-t border-gray-200',
  SIGNUP_TEXT: 'text-sm text-gray-600',
  SIGNUP_LINK:
    'text-blue-600 hover:text-blue-700 hover:underline font-medium ml-1 transition-colors',

  // Language Selector
  CONTAINER: 'relative',
  LANGUAGE_SELECTOR_WRAPPER: 'fixed top-5 right-5 z-[100]',
  LANGUAGE_SELECT_BUTTON:
    'flex items-center gap-2 px-3 py-1.5 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors',
  LANGUAGE_SELECT_MENU:
    'absolute mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 py-1 max-h-60 overflow-auto z-50',
  LANGUAGE_SELECT_OPTION:
    'px-4 py-2 text-sm text-gray-700 !bg-white hover:!bg-gray-100 cursor-pointer flex items-center justify-between',
  LANGUAGE_SELECT_OPTION_SELECTED: '!bg-blue-50 !text-blue-700',
} as const;
