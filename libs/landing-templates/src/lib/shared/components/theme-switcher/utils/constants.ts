import { ThemeOption, THEME_NAMES } from './types';

export const THEME_STORAGE_KEY = 'app-theme';

export const DEFAULT_THEMES: ThemeOption[] = [
  {
    name: THEME_NAMES.DARK,
    label: 'Dark',
    icon: '🌙',
    colors: {
      primary: '#60a5fa',
      primaryDark: '#3b82f6',
      secondary: '#a78bfa',
      background: '#0f172a',
      surface: '#1e293b',
      text: '#f1f5f9',
      textMuted: '#94a3b8',
      accent: '#22d3ee',
    },
  },
  {
    name: THEME_NAMES.LIGHT,
    label: 'Light',
    icon: '☀️',
    colors: {
      primary: '#3b82f6',
      primaryDark: '#2563eb',
      secondary: '#8b5cf6',
      background: '#ffffff',
      surface: '#f8fafc',
      text: '#1e293b',
      textMuted: '#64748b',
      accent: '#06b6d4',
    },
  },
  {
    name: THEME_NAMES.OCEAN,
    label: 'Ocean',
    icon: '🌊',
    colors: {
      primary: '#0ea5e9',
      primaryDark: '#0284c7',
      secondary: '#06b6d4',
      background: '#f0f9ff',
      surface: '#e0f2fe',
      text: '#0c4a6e',
      textMuted: '#0369a1',
      accent: '#38bdf8',
    },
  },
  {
    name: THEME_NAMES.SUNSET,
    label: 'Sunset',
    icon: '🌅',
    colors: {
      primary: '#f97316',
      primaryDark: '#ea580c',
      secondary: '#ec4899',
      background: '#fff7ed',
      surface: '#ffedd5',
      text: '#7c2d12',
      textMuted: '#9a3412',
      accent: '#fb923c',
    },
  },
  {
    name: THEME_NAMES.FOREST,
    label: 'Forest',
    icon: '🌲',
    colors: {
      primary: '#22c55e',
      primaryDark: '#16a34a',
      secondary: '#84cc16',
      background: '#f0fdf4',
      surface: '#dcfce7',
      text: '#14532d',
      textMuted: '#166534',
      accent: '#4ade80',
    },
  },
];

export const DEFAULT_THEME: ThemeOption = DEFAULT_THEMES[0];

export const THEME_SWITCHER_STYLES = {
  CONTAINER: 'fixed z-[1000]',
  POSITION: {
    'top-left': 'top-6 left-6',
    'top-right': 'top-6 right-6',
    'bottom-left': 'bottom-6 left-6',
    'bottom-right': 'bottom-6 right-6',
  },
  WRAPPER: 'relative w-48',
  BUTTON:
    'w-full flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--surface)] text-[var(--text)] border border-white/10 hover:border-[var(--primary)] transition-all duration-200 shadow-lg hover:shadow-xl backdrop-blur-sm',
  ICON: 'text-xl',
  LABEL: 'text-sm font-medium flex-1',
  MENU_ITEMS:
    'absolute left-0 mt-2 w-48 origin-top-left rounded-lg bg-[var(--surface)] shadow-xl border border-white/10 backdrop-blur-xl focus:outline-none overflow-hidden',
  MENU_ITEM_BUTTON:
    'w-full flex items-center gap-3 px-4 py-3 text-sm transition-colors duration-150',
  MENU_ITEM_ACTIVE: 'bg-white/5',
  MENU_ITEM_SELECTED: 'bg-[var(--primary)]/20',
  MENU_ITEM_ICON: 'text-xl',
  MENU_ITEM_LABEL: 'flex-1 text-left',
  MENU_ITEM_LABEL_ACTIVE: 'text-[var(--text)] font-medium',
  MENU_ITEM_LABEL_INACTIVE: 'text-[var(--text-muted)]',
  MENU_ITEM_CHECK: 'text-[var(--primary)]',
} as const;

export const THEME_TRANSITION = {
  ENTER: 'transition ease-out duration-100',
  ENTER_FROM: 'transform opacity-0 scale-95',
  ENTER_TO: 'transform opacity-100 scale-100',
  LEAVE: 'transition ease-in duration-75',
  LEAVE_FROM: 'transform opacity-100 scale-100',
  LEAVE_TO: 'transform opacity-0 scale-95',
} as const;
