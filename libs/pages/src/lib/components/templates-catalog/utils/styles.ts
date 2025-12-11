/**
 * Style constants for TemplatesCatalog component
 */
export const TEMPLATES_CATALOG_STYLES = {
  container: 'min-h-screen bg-slate-950 text-slate-50',

  header: {
    wrapper: 'border-b border-slate-800 bg-slate-950/95 backdrop-blur-sm',
    container: 'mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8',
    content: 'text-center',
    title: 'text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl',
    subtitle: 'mt-4 text-lg text-slate-300',
  },

  search: {
    wrapper: 'mt-8 flex justify-center',
    container: 'w-full max-w-md',
    input:
      'w-full rounded-xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400 transition-all',
  },

  categories: {
    wrapper: 'mt-6 flex flex-wrap justify-center gap-2',
    button: {
      base: 'rounded-full px-4 py-2 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950',
      active: 'bg-sky-500 text-slate-950 shadow-lg shadow-sky-500/40',
      inactive:
        'border border-slate-700 text-slate-300 hover:border-sky-500/70 hover:text-sky-200',
    },
  },

  templates: {
    container: 'mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8',
    emptyState: 'py-16 text-center',
    emptyText: 'text-lg text-slate-400',
    grid: 'grid gap-6 sm:grid-cols-2 lg:grid-cols-3',
  },

  card: {
    button:
      'group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 p-0 text-left transition-all hover:border-sky-500/70 hover:bg-slate-900 hover:shadow-xl hover:shadow-sky-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950',
    thumbnail: {
      wrapper: 'relative aspect-[16/10] overflow-hidden bg-slate-800',
      gradient:
        'absolute inset-0 bg-gradient-to-br from-sky-500/20 via-violet-500/10 to-emerald-400/10',
      placeholder: 'flex h-full items-center justify-center',
      icon: 'h-16 w-16 text-slate-700',
      overlay:
        'absolute inset-0 flex items-center justify-center bg-slate-950/80 opacity-0 transition-opacity group-hover:opacity-100',
      badge:
        'flex items-center gap-2 rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg',
      badgeIcon: 'h-4 w-4',
    },
    content: {
      wrapper: 'p-5',
      title:
        'text-lg font-semibold text-slate-50 group-hover:text-sky-400 transition-colors',
      description: 'mt-2 text-sm text-slate-300',
      tags: {
        wrapper: 'mt-3 flex flex-wrap gap-2',
        tag: 'rounded-full bg-sky-500/10 px-2.5 py-1 text-xs font-medium text-sky-300',
      },
    },
  },

  cta: {
    wrapper: 'border-t border-slate-800 bg-slate-900/40',
    container: 'mx-auto max-w-7xl px-4 py-12 text-center sm:px-6 lg:px-8',
    title: 'text-2xl font-semibold text-slate-50',
    description: 'mt-2 text-slate-300',
    button:
      'mt-6 inline-flex rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/40 hover:bg-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 transition-all',
  },
} as const;
