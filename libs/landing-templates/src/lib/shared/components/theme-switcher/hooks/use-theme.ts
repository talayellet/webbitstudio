import { useState, useCallback, useEffect, useMemo } from 'react';
import {
  ThemeName,
  ThemeOption,
  ThemeColors,
  ColorOverrides,
} from '../utils/types';
import {
  DEFAULT_THEMES,
  DEFAULT_THEME,
  THEME_STORAGE_KEY,
} from '../utils/constants';

export interface UseThemeProps {
  initialTheme?: ThemeName;
  themes?: ThemeOption[];
  colorOverrides?: ColorOverrides;
}

export interface UseThemeResponse {
  currentTheme: ThemeName;
  currentThemeOption: ThemeOption;
  themes: ThemeOption[];
  setTheme: (theme: ThemeName) => void;
  themeColors: ThemeColors;
  colorStyles: React.CSSProperties;
}

export const useTheme = (options: UseThemeProps = {}): UseThemeResponse => {
  const { initialTheme, themes = DEFAULT_THEMES, colorOverrides } = options;
  // Initialize theme from localStorage or default
  const [currentTheme, setCurrentTheme] = useState<ThemeName>(() => {
    if (initialTheme) return initialTheme;

    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(THEME_STORAGE_KEY) as ThemeName;
      if (stored && themes.some((t) => t.name === stored)) {
        return stored;
      }
    }

    return DEFAULT_THEME.name;
  });

  // Get current theme option
  const currentThemeOption = useMemo(
    () => themes.find((t) => t.name === currentTheme) || DEFAULT_THEME,
    [currentTheme, themes]
  );

  // Set theme and persist to localStorage
  const setTheme = useCallback((theme: ThemeName) => {
    setCurrentTheme(theme);
    if (typeof window !== 'undefined') {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    }
  }, []);

  // Apply theme colors to CSS variables
  useEffect(() => {
    const colors = currentThemeOption.colors;
    const root = document.documentElement;

    root.style.setProperty('--primary', colors.primary);
    root.style.setProperty('--primary-dark', colors.primaryDark);
    root.style.setProperty('--secondary', colors.secondary);
    root.style.setProperty('--background', colors.background);
    root.style.setProperty('--surface', colors.surface);
    root.style.setProperty('--text', colors.text);
    root.style.setProperty('--text-muted', colors.textMuted);
    root.style.setProperty('--accent', colors.accent);
  }, [currentThemeOption]);

  // Compute color styles with fallback chain: theme colors -> overrides -> defaults
  const colorStyles = useMemo(
    () =>
      ({
        '--primary':
          currentThemeOption.colors.primary || colorOverrides?.primary,
        '--primary-dark':
          currentThemeOption.colors.primaryDark || colorOverrides?.primaryDark,
        '--secondary':
          currentThemeOption.colors.secondary || colorOverrides?.secondary,
        '--background':
          currentThemeOption.colors.background || colorOverrides?.background,
        '--surface':
          currentThemeOption.colors.surface || colorOverrides?.surface,
        '--text': currentThemeOption.colors.text || colorOverrides?.text,
        '--text-muted':
          currentThemeOption.colors.textMuted || colorOverrides?.textMuted,
        '--accent': currentThemeOption.colors.accent || colorOverrides?.accent,
      } as React.CSSProperties),
    [currentThemeOption.colors, colorOverrides]
  );

  return {
    currentTheme,
    currentThemeOption,
    themes,
    setTheme,
    themeColors: currentThemeOption.colors,
    colorStyles,
  };
};
