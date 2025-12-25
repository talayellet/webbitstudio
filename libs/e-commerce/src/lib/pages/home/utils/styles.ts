/**
 * Style constants for the eCommerce home page
 */

export const HOME_PAGE_STYLES = {
  // Layout
  PAGE_CONTAINER: 'min-h-screen flex flex-col bg-gray-50',
  MAIN_CONTENT: 'flex-1 pt-20 pb-24',

  // Header
  HEADER:
    'fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm',
  HEADER_CONTAINER: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
  HEADER_CONTENT: 'flex items-center justify-between py-4 gap-4',
  HEADER_LEFT: 'flex items-center gap-4',

  // Logo
  LOGO_CONTAINER: 'flex items-center',
  LOGO_IMAGE: 'h-8 w-auto',
  LOGO_TEXT: 'ml-2 text-xl font-bold text-gray-900',

  // User actions
  USER_SECTION: 'flex items-center gap-4',
  USER_GREETING: 'text-sm text-gray-700',
  USER_NAME: 'font-medium text-gray-900',
  AUTH_BUTTON:
    'px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors',
  AUTH_BUTTON_PRIMARY:
    'px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors',

  // Cart
  CART_BUTTON:
    'relative p-2 text-gray-700 hover:text-gray-900 transition-colors',
  CART_ICON: 'w-6 h-6',
  CART_BADGE:
    'absolute -top-1 -right-1 flex items-center justify-center min-w-[1.25rem] h-5 px-1 text-xs font-bold text-white bg-red-500 rounded-full',

  // Location & Language
  SELECT_BUTTON:
    'flex items-center gap-2 px-3 py-1.5 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors',
  SELECT_ICON: 'w-4 h-4',

  // Categories
  CATEGORIES_SECTION: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12',
  CATEGORIES_TITLE: 'text-3xl font-bold text-gray-900 mb-8',
  CATEGORIES_GRID:
    'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6',

  // Category Card
  CATEGORY_CARD:
    'group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer',
  CATEGORY_IMAGE_CONTAINER: 'relative h-48 overflow-hidden',
  CATEGORY_IMAGE:
    'w-full h-full object-cover group-hover:scale-105 transition-transform duration-300',
  CATEGORY_CONTENT: 'p-6',
  CATEGORY_NAME: 'text-xl font-semibold text-gray-900 mb-2',
  CATEGORY_DESCRIPTION: 'text-sm text-gray-600 line-clamp-2',

  // Footer
  FOOTER:
    'fixed bottom-0 left-0 right-0 z-50 bg-gray-900 text-white border-t border-gray-800',
  FOOTER_CONTAINER: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4',
  FOOTER_CONTENT: 'flex flex-wrap items-center justify-between gap-4',
  FOOTER_LINKS: 'flex flex-wrap items-center gap-6',
  FOOTER_LINK:
    'text-sm text-gray-300 hover:text-white transition-colors underline-offset-4 hover:underline',
  FOOTER_DIVIDER: 'hidden sm:block text-gray-600',
  BACK_TO_TOP_BUTTON:
    'px-4 py-2 text-sm font-medium text-white bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors',
} as const;
