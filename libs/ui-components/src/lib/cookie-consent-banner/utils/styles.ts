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
  customizeButton:
    'px-6 py-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500',
  link: 'text-sky-400 hover:text-sky-300 underline',
  // Granular preferences styles
  preferencesContainer: 'mt-4 pt-4 border-t border-slate-700',
  preferencesTitle: 'text-sm font-semibold text-slate-200 mb-3',
  categoryContainer: 'space-y-3 mb-4',
  categoryItem: 'flex items-start gap-3',
  categoryContent: 'flex-1',
  categoryLabel: 'text-sm font-medium text-slate-200',
  categoryDescription: 'text-xs text-slate-400 mt-1',
  toggle:
    'relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-slate-900',
  toggleEnabled: 'bg-sky-500',
  toggleDisabled: 'bg-slate-700',
  toggleButton:
    'inline-block h-4 w-4 transform rounded-full bg-white transition-transform',
  toggleButtonEnabled: 'translate-x-6',
  toggleButtonDisabled: 'translate-x-1',
  toggleDisabledOpacity: 'opacity-50 cursor-not-allowed',
  saveButton:
    'px-6 py-2 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-sky-400',
} as const;
