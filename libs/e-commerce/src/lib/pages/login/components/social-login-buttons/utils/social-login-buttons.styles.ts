/**
 * Style constants for the social login buttons component
 */

export const SOCIAL_LOGIN_BUTTONS_STYLES = {
  // Divider
  DIVIDER_CONTAINER: 'relative my-6',
  DIVIDER_LINE: 'absolute inset-0 flex items-center',
  DIVIDER_BORDER: 'w-full border-t border-gray-300',
  DIVIDER_TEXT: 'relative flex justify-center text-sm',
  DIVIDER_TEXT_BG: 'px-2 bg-white text-gray-500',

  // Social Buttons
  SOCIAL_BUTTONS: 'space-y-3',
  SOCIAL_BUTTON:
    'w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors relative',
  SOCIAL_BUTTON_TEXT: 'text-sm font-medium text-gray-700',
  SOCIAL_ICON: 'w-5 h-5 absolute left-4',
} as const;
