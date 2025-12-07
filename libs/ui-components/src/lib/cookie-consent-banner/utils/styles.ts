export const COOKIE_CONSENT_BANNER_STYLES = {
  container:
    'fixed bottom-0 left-0 right-0 z-[1000] bg-slate-900 border-t border-slate-800 p-4 shadow-lg',
  content: 'container mx-auto max-w-7xl',
  contentInner: 'flex flex-col md:flex-row md:items-center md:justify-between',
  contentWithPreferences: 'flex flex-col',
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
  preferencesContainer: 'mt-4 pt-4 px-4 flex flex-col',
  preferencesTitle: 'text-sm font-semibold text-slate-200 mb-3',
  categoryContainer: 'flex flex-col gap-4 mb-4 md:gap-0',
  categoryItem: 'flex flex-col gap-2',
  categoryToggleWrapper: 'flex md:justify-center md:order-1',
  categoryContent: 'flex-1',
  categoryLabel: 'text-sm font-medium text-slate-200 md:text-center md:text-xs',
  categoryDescription: 'text-xs text-slate-400 md:text-center md:text-xs',
  toggle:
    'relative inline-flex h-6 w-11 items-center justify-start rtl:justify-end rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-2 py-0.5 pl-0.5 pr-1.5',
  toggleEnabled: 'bg-sky-500',
  toggleDisabled: 'bg-slate-700',
  toggleButton:
    'inline-block h-4 w-4 shrink-0 transform rounded-full bg-white transition-transform',
  toggleButtonEnabled: 'ltr:translate-x-[24px] rtl:translate-x-[24px]',
  toggleButtonDisabled: 'ltr:translate-x-0 rtl:translate-x-0',
  toggleDisabledOpacity: 'opacity-50 cursor-not-allowed',
  saveButton:
    'px-6 py-2 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-sky-400',
  closeButton:
    'absolute top-4 ltr:right-4 rtl:left-4 p-2 text-slate-400 hover:text-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500 rounded',
  closeIcon: 'w-5 h-5',
} as const;
