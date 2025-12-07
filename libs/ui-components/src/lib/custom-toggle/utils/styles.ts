/**
 * Default styles for the Toggle component
 * These can be overridden via the styles prop
 */
export const TOGGLE_STYLES = {
  container:
    'relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-slate-900',
  containerEnabled: 'bg-sky-500',
  containerDisabled: 'bg-slate-700',
  button:
    'inline-block h-4 w-4 transform rounded-full bg-white transition-transform',
  buttonEnabled: 'translate-x-6',
  buttonDisabled: 'translate-x-1',
  disabledOpacity: 'opacity-50 cursor-not-allowed',
} as const;
