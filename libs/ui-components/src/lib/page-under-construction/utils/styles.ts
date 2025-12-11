export const PAGE_UNDER_CONSTRUCTION_STYLES = {
  container:
    'min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 px-4 py-8',
  content:
    'flex flex-col items-center text-center max-w-2xl mx-auto',
  icon:
    'text-8xl mb-8 animate-bounce',
  heading:
    'text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4',
  message:
    'text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8',
  button:
    'px-8 py-3 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl',
} as const;
