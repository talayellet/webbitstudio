// Layout & Container Styles
export const layout = {
  page: 'min-h-screen bg-slate-950 text-slate-50',
  container: 'mx-auto max-w-6xl min-w-0 px-4 sm:px-6 lg:px-8',
  maxWidth: 'max-w-2xl',
  maxWidthXl: 'max-w-xl',
  grid2Cols: 'grid gap-10 py-10 md:grid-cols-2 md:py-16 lg:py-20',
  grid3Cols: 'grid gap-6 md:grid-cols-3',
  grid4Cols: 'grid gap-6 md:grid-cols-4',
  sectionHeader:
    'mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between',
} as const;

// Header & Navigation Styles
export const header = {
  root: 'flex items-center justify-between py-6',
  logo: {
    container: 'flex items-center gap-2',
    icon: 'flex h-9 w-9 items-center justify-center rounded-xl bg-sky-500/90 shadow-lg shadow-sky-500/40',
    iconText: 'text-lg font-bold tracking-tight',
    textContainer: 'flex flex-col',
    title: 'text-base font-semibold tracking-tight',
    subtitle: 'text-xs text-slate-400',
  },
  nav: {
    root: 'hidden items-center gap-8 text-sm text-slate-300 md:flex',
    link: 'hover:text-sky-400',
  },
} as const;

// Button Styles
export const button = {
  primary:
    'rounded-full bg-sky-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/40 hover:bg-sky-400',
  primarySmall:
    'rounded-full bg-sky-500 px-4 py-2 text-sm font-medium text-slate-950 shadow-md shadow-sky-500/40 hover:bg-sky-400',
  secondary:
    'rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-100 hover:border-sky-500/70 hover:text-sky-200',
  light:
    'inline-flex w-full items-center justify-center rounded-full bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-950 shadow-sm hover:bg-slate-200',
  lightLarge:
    'mt-1 inline-flex w-full items-center justify-center rounded-full bg-slate-100 px-4 py-2.5 text-xs font-semibold text-slate-950 shadow-sm hover:bg-slate-200',
  linkSmall:
    'mt-4 inline-flex items-center rounded-full bg-sky-500 px-4 py-2 text-xs font-semibold text-slate-950 shadow-md shadow-sky-500/40 hover:bg-sky-400',
} as const;

// Section Styles
export const section = {
  default: 'py-12 sm:py-16',
  withBorder: 'border-y border-slate-800 py-12 sm:py-14',
  withBorderLarge: 'border-y border-slate-800 py-12 sm:py-16',
  contact: 'pb-14 sm:pb-16',
} as const;

// Typography Styles
export const typography = {
  h1: 'text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl',
  h2: 'text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl',
  h3Base: 'text-base font-semibold text-slate-50 sm:text-lg',
  h3Small: 'text-sm font-semibold text-slate-50 sm:text-base',
  h3Pricing: 'font-semibold text-slate-50',
  bodyBase: 'text-sm text-slate-300 sm:text-base',
  bodySmall: 'text-xs text-slate-300 sm:text-sm',
  bodyExtraSmall: 'text-xs text-slate-400 sm:text-sm',
  label: 'text-xs font-medium text-slate-100',
  badge:
    'inline-flex max-w-fit items-center gap-2 rounded-full border border-slate-800 bg-slate-900/70 px-3 py-1 text-xs font-medium text-slate-300',
  tagSmall:
    'rounded-full bg-sky-500/10 px-2.5 py-1 text-[10px] font-medium text-sky-300',
  techBadge: 'rounded-full border border-slate-800 px-2 py-1',
} as const;

// Card Styles
export const card = {
  package:
    'group flex flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-[0_0_0_1px_rgba(15,23,42,0.7)] transition hover:border-sky-500/70 hover:bg-slate-900 min-h-[520px]',
  default: 'rounded-2xl border border-slate-800 bg-slate-900/60 p-4 min-h-0',
  process:
    'flex flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-4 min-h-[200px]',
  faq: 'group rounded-2xl border border-slate-800 bg-slate-900/60 p-4 min-h-0',
  pricing:
    'mt-8 rounded-2xl border border-sky-500/40 bg-slate-900/70 p-5 text-sm text-slate-200',
  contact:
    'rounded-3xl border border-sky-500/40 bg-gradient-to-br from-sky-500/20 via-slate-900 to-slate-900/90 p-6 sm:p-8',
  hero: 'w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900/80 p-4 shadow-2xl',
  heroBrowserMock: 'rounded-lg border border-slate-800/80 bg-slate-900/90 p-2',
} as const;

// Hero Styles
export const hero = {
  content: 'flex flex-col justify-center space-y-6 min-h-[400px]',
  visual: 'relative flex items-center justify-center',
  gradient:
    'absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-br from-sky-500/30 via-violet-500/20 to-emerald-400/20 blur-3xl',
  browserHeader: 'flex items-center gap-2 border-b border-slate-800 pb-3',
  browserDot: 'h-2.5 w-2.5 rounded-full',
  browserUrl:
    'ml-auto rounded-full bg-slate-800 px-2 py-1 text-[10px] text-slate-400',
  mockContainer: 'space-y-4 pt-4',
  mockElement: 'h-6 w-3/4 rounded-md bg-slate-800',
  mockElement2: 'h-3 w-5/6 rounded-md bg-slate-800/90',
  mockGrid: 'grid grid-cols-3 gap-3 pt-1',
  mockCard: 'h-24 rounded-xl bg-gradient-to-br from-sky-500/60 to-sky-400/80',
  mockColumn: 'space-y-2',
  mockBar1: 'h-4 w-3/4 rounded bg-slate-800',
  mockBar2: 'h-3 w-5/6 rounded bg-slate-800/90',
  mockBar3: 'h-3 w-2/3 rounded bg-slate-800/70',
  mockBar4: 'h-3 w-4/5 rounded bg-slate-800/90',
  mockBar5: 'h-3 w-1/2 rounded bg-slate-800/80',
  mockButton: 'h-8 w-full rounded-lg bg-sky-500/90',
  mockCardsGrid: 'grid grid-cols-3 gap-2 pt-2 text-[10px] text-slate-300',
  mockCardText: 'font-medium',
  mockCardSubtext: 'text-[11px] text-slate-400',
  badge: 'inline-block h-1.5 w-1.5 rounded-full bg-emerald-400',
  actions: 'flex flex-wrap items-center gap-3',
  trust: 'mt-2 text-xs text-slate-400 sm:text-sm',
} as const;

// Tech Strip Styles
export const techStrip = {
  root: 'border-y border-slate-800 py-6 text-xs text-slate-400 sm:text-sm',
  container: 'flex flex-wrap items-center justify-between gap-3',
  badges:
    'flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-wide text-slate-500',
} as const;

// List Styles
export const list = {
  features: 'mt-4 space-y-2 text-xs text-slate-300 sm:text-sm',
  featureItem: 'flex gap-2',
  bullet: 'mt-0.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-400',
  contactPoints: 'mt-4 space-y-2 text-xs text-slate-200 sm:text-sm',
  spacing: 'space-y-4',
} as const;

// Form Styles
export const form = {
  root: 'space-y-3 text-sm text-slate-900',
  grid: 'grid gap-3 sm:grid-cols-2',
  fieldContainer: 'space-y-1',
  input:
    'w-full rounded-xl border border-slate-700 bg-slate-950/70 px-3 py-2 text-xs text-slate-100 placeholder:text-slate-500 focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-500',
  textarea:
    'w-full rounded-xl border border-slate-700 bg-slate-950/70 px-3 py-2 text-xs text-slate-100 placeholder:text-slate-500 focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-500',
  select:
    'w-full appearance-none rounded-xl border border-slate-700 bg-slate-950/70 px-3 py-2 pr-10 text-xs text-slate-100 placeholder:text-slate-500 focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-500 [&::-ms-expand]:hidden',
  selectWrapper: 'relative',
  selectIcon:
    'pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400',
  note: 'mt-1 text-[11px] text-slate-200',
} as const;

// Custom Select Styles
export const customSelect = {
  wrapper: 'relative',
  trigger:
    'flex w-full items-center justify-between rounded-xl border border-slate-700 bg-slate-950/70 px-3 py-2 text-xs text-slate-100 transition-colors hover:border-slate-600 focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-500',
  icon: 'ml-2 h-4 w-4 flex-shrink-0 text-slate-400',
  menu: 'absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-xl border border-slate-700 bg-slate-900 py-1 shadow-xl shadow-black/20',
  option:
    'flex cursor-pointer items-center px-3 py-2.5 text-xs text-slate-200 transition-colors hover:bg-slate-800 hover:text-slate-50',
  optionSelected: 'bg-sky-500/10 text-sky-200 hover:bg-sky-500/20',
} as const;

// Package Card Styles
export const packageCard = {
  contentWrapper: 'min-h-[320px]',
  header: 'mb-3 flex items-center justify-between gap-2',
  tagline: 'text-xs font-medium text-slate-300 sm:text-sm',
  description: 'mt-2 text-xs text-slate-400 sm:text-sm',
  pricing: 'mt-5 border-t border-slate-800 pt-4 text-sm',
  priceLabel: 'text-xs uppercase tracking-wide text-slate-400',
  priceAmount: 'text-base font-semibold',
  priceRange: 'mt-1 text-xs text-slate-400',
  priceNote: 'mt-1 text-[11px] text-slate-500',
  cta: 'mt-4 flex flex-1 items-end',
} as const;

// Process Step Styles
export const processStep = {
  header: 'mb-3 flex items-center gap-2',
  badge:
    'inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/20 text-xs font-semibold text-sky-300',
  text: 'text-xs text-slate-300 sm:text-sm',
} as const;

// FAQ Styles
export const faq = {
  summary:
    'flex cursor-pointer list-none items-center justify-between gap-2 text-sm font-medium text-slate-100',
  answer: 'mt-2 text-xs text-slate-300 sm:text-sm',
  icon: 'text-xs text-slate-400 group-open:hidden',
  iconOpen: 'hidden text-xs text-slate-400 group-open:inline',
} as const;

// Pricing Styles
export const pricing = {
  container:
    'mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between',
  sideNote: 'text-xs text-slate-400 sm:text-sm',
  list: 'space-y-4 text-sm text-slate-200',
  item: 'mt-1',
  label: 'text-xs uppercase tracking-wide text-slate-400',
  amount: 'font-semibold',
  note: 'mt-1 text-xs text-slate-400',
  regionalBox: {
    title: 'text-sm font-semibold text-slate-50 sm:text-base',
    text: 'mt-2 text-xs text-slate-300 sm:text-sm',
  },
} as const;

// Contact Section Styles
export const contact = {
  grid: 'grid gap-8 md:grid-cols-2',
  intro: 'mt-2 text-sm text-slate-200 sm:text-base',
} as const;

// Footer Styles
export const footer = {
  root: 'border-t border-slate-800 py-6 text-xs text-slate-500 sm:text-sm',
  container:
    'flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center',
  links: 'flex flex-wrap items-center gap-4',
  link: 'hover:text-sky-300',
  separator: 'hidden h-1 w-1 rounded-full bg-slate-600 sm:inline-block',
} as const;

// Utility Styles
export const spacing = {
  mt1: 'mt-1',
  mt2: 'mt-2',
  mt4: 'mt-4',
  mb3: 'mb-3',
  mb8: 'mb-8',
} as const;

export const combined = {
  sectionIntro: 'mb-8 max-w-2xl',
  bodyWithMaxWidth: 'mt-2 max-w-xl text-sm text-slate-300 sm:text-base',
  bodyWithSpacing: 'mt-2 text-sm text-slate-300 sm:text-base',
  cardTextWithSpacing: 'mt-2 text-xs text-slate-300 sm:text-sm',
  pricingIntro: 'mt-2 max-w-xl text-sm text-slate-300 sm:text-base',
} as const;

export const colors = {
  slate: {
    50: 'text-slate-50',
    200: 'text-slate-200',
    300: 'text-slate-300',
    400: 'text-slate-400',
    500: 'text-slate-500',
  },
  rose500: 'bg-rose-500',
  amber400: 'bg-amber-400',
  emerald400: 'bg-emerald-400',
} as const;
