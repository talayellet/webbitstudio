export const THEME_NAMES = {
  LIGHT: 'light',
  DARK: 'dark',
  OCEAN: 'ocean',
  SUNSET: 'sunset',
  FOREST: 'forest',
} as const;

export type ThemeName = (typeof THEME_NAMES)[keyof typeof THEME_NAMES];

export const THEME_POSITIONS = {
  TOP_LEFT: 'top-left',
  TOP_RIGHT: 'top-right',
  BOTTOM_LEFT: 'bottom-left',
  BOTTOM_RIGHT: 'bottom-right',
} as const;

export type ThemePosition =
  (typeof THEME_POSITIONS)[keyof typeof THEME_POSITIONS];

export interface ThemeColors {
  primary: string;
  primaryDark: string;
  secondary: string;
  background: string;
  surface: string;
  text: string;
  textMuted: string;
  accent: string;
}

export interface ThemeOption {
  name: ThemeName;
  label: string;
  icon: string;
  colors: ThemeColors;
}

export interface ThemeSwitcherProps {
  currentTheme?: ThemeName;
  themes?: ThemeOption[];
  onThemeChange?: (theme: ThemeName) => void;
  position?: ThemePosition;
}

export interface ColorOverrides {
  primary?: string;
  primaryDark?: string;
  secondary?: string;
  background?: string;
  surface?: string;
  text?: string;
  textMuted?: string;
  accent?: string;
}
