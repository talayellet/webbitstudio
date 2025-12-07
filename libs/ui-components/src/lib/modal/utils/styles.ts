export const MODAL_STYLES = {
  overlay:
    'fixed inset-0 z-[1001] bg-slate-900/80 flex items-center justify-center p-4 animate-in fade-in duration-200',
  modal:
    'relative w-full max-w-5xl max-h-[92vh] bg-slate-50 dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-sky-500/40 flex flex-col overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-4 duration-300',
  header:
    'sticky top-0 z-10 flex items-center justify-end px-8 py-5 border-b border-slate-200 dark:border-sky-500/30 bg-slate-50/98 dark:bg-slate-900/98 backdrop-blur-lg',
  closeButton:
    'p-2.5 hover:bg-slate-100 dark:hover:bg-sky-500/20 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-400 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:scale-105 active:scale-95 flex items-center justify-center',
  closeIcon: 'w-6 h-6',
  closeText: 'sr-only',
  content: 'overflow-y-auto px-8 pb-8 pt-4 scroll-smooth',
} as const;
