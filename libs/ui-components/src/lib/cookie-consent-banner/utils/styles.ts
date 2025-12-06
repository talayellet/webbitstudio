export const COOKIE_CONSENT_BANNER_STYLES = {
  container:
    'fixed bottom-0 left-0 right-0 z-50 bg-slate-900 border-t border-slate-800 p-4 shadow-lg',
  content: 'container mx-auto max-w-7xl',
  contentInner: 'flex flex-col md:flex-row md:items-center md:justify-between',
  message: 'text-sm text-slate-300 mb-4 md:mb-0',
  buttonContainer: 'flex flex-col sm:flex-row gap-3 md:ml-4',
  acceptButton:
    'px-6 py-2 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-sky-400',
  rejectButton:
    'px-6 py-2 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500',
  link: 'text-sky-400 hover:text-sky-300 underline',
} as const;
