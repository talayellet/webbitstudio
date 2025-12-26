/**
 * Style constants for the SignOut page
 */
export const SIGNOUT_STYLES = {
  CONTAINER: 'flex justify-center items-center min-h-screen font-sans bg-gray-100',
  CARD: 'bg-white p-10 rounded-xl shadow-md max-w-md w-full',
  TITLE: 'text-2xl font-semibold mb-4 text-center',
  MESSAGE: 'text-base text-gray-600 mb-8 text-center',
  BUTTON_CONTAINER: 'flex flex-col gap-3',
  CONFIRM_BUTTON:
    'px-6 py-3 text-base font-medium bg-blue-600 text-white border-0 rounded-lg cursor-pointer w-full hover:bg-blue-700 transition-colors',
  CANCEL_BUTTON:
    'px-6 py-3 text-base font-medium bg-transparent text-gray-600 border border-gray-300 rounded-lg cursor-pointer w-full hover:bg-gray-50 transition-colors',
} as const;
