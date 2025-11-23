export const DEFAULT_COLORS = {
  PRIMARY: '#0066FF',
  PRIMARY_DARK: '#0052CC',
  SECONDARY: '#00FFAA',
  BACKGROUND: '#0A0E1A',
  SURFACE: '#141925',
  TEXT: '#E8EAED',
  TEXT_MUTED: '#9CA3AF',
  ACCENT: '#FF3366',
} as const;

// Reusable style patterns
export const STYLES = {
  // Layout
  CONTAINER: 'container max-w-6xl mx-auto px-6',

  // Main container
  MAIN_CONTAINER: [
    'relative min-h-screen overflow-x-hidden font-sans',
    'bg-[var(--background)] text-[var(--text)]',
  ],

  // Background gradient
  GRADIENT_BG_WRAPPER:
    'fixed top-0 left-0 w-full h-full -z-10 animate-gradient-shift',
  GRADIENT_BG_INNER:
    'absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(0,102,255,0.15)_0%,transparent_50%),radial-gradient(circle_at_80%_80%,rgba(0,255,170,0.1)_0%,transparent_50%)]',

  // Header
  HEADER: 'py-6 relative z-[100] animate-slide-down',
  NAV: 'flex justify-between items-center',
  NAV_BRAND: [
    'flex items-center gap-2 text-2xl font-bold no-underline',
    'text-[var(--text)]',
  ],
  NAV_LIST: 'hidden md:flex gap-8 list-none',

  // Navigation Links
  NAV_LINK: [
    'text-[15px] font-normal no-underline',
    'text-[var(--text-muted)]',
    'transition-colors duration-300',
    'hover:text-[var(--text)]',
  ],

  // Hero Section
  HERO_SECTION: 'py-[120px] pb-20 text-center animate-fade-in-up-1',
  HERO_TITLE: [
    'text-[clamp(40px,6vw,72px)] font-bold leading-[1.1] mb-6',
    'animate-fade-in-up-3',
  ],
  HERO_DESCRIPTION: [
    'text-xl leading-relaxed max-w-[600px] mx-auto mb-10',
    'text-[var(--text-muted)]',
    'animate-fade-in-up-4',
  ],
  HERO_CTA_WRAPPER: 'flex gap-4 justify-center flex-wrap animate-fade-in-up-5',

  // Features Section
  FEATURES_SECTION: 'py-20',
  FEATURES_GRID: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16',
  FEATURE_TITLE: 'text-[22px] mb-3 text-[var(--text)]',
  FEATURE_DESCRIPTION: 'text-[var(--text-muted)] leading-relaxed',

  // Stats Section
  STATS_SECTION: [
    'py-20 bg-[var(--surface)]',
    'border-t border-b border-white/5',
  ],
  STATS_GRID:
    'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center',
  STAT_NUMBER: 'text-5xl font-bold text-[var(--secondary)] mb-2 font-mono',
  STAT_LABEL: 'text-[var(--text-muted)] text-base',

  // Final CTA Section
  FINAL_CTA_SECTION: 'py-[120px] text-center',
  FINAL_CTA_TITLE: 'text-[clamp(32px,5vw,56px)] mb-6',
  FINAL_CTA_DESCRIPTION:
    'text-xl text-[var(--text-muted)] mb-10 max-w-[500px] mx-auto',

  // Footer
  FOOTER: 'py-12 border-t border-white/5',
  FOOTER_CONTENT: 'flex justify-between items-center flex-wrap gap-6',
  FOOTER_COPYRIGHT: 'text-[var(--text-muted)] text-sm',
  FOOTER_LIST: 'flex flex-col md:flex-row gap-8 md:gap-8 list-none',

  // Footer Links (same as nav but smaller)
  FOOTER_LINK: [
    'text-sm no-underline',
    'text-[var(--text-muted)]',
    'transition-colors duration-300',
    'hover:text-[var(--text)]',
  ],

  // Buttons
  PRIMARY_BUTTON: [
    'px-8 py-3.5 rounded-xl text-base font-semibold no-underline',
    'inline-flex items-center gap-2',
    'bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)]',
    'text-white shadow-[0_4px_24px_rgba(0,102,255,0.3)]',
    'transition-all duration-300',
    'hover:-translate-y-0.5 hover:shadow-[0_6px_32px_rgba(0,102,255,0.4)]',
  ],

  SECONDARY_BUTTON: [
    'px-8 py-3.5 rounded-xl text-base font-semibold no-underline',
    'inline-flex items-center gap-2',
    'bg-[var(--surface)] text-[var(--text)]',
    'border border-white/10',
    'transition-all duration-300',
    'hover:bg-white/5 hover:border-white/20',
  ],

  // Gradients
  TEXT_GRADIENT: [
    'bg-gradient-to-br from-[var(--text)] to-[var(--text-muted)]',
    'bg-clip-text text-transparent',
  ],

  ICON_GRADIENT:
    'bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)]',

  // Reveal animation
  REVEAL: [
    'opacity-0 translate-y-[30px]',
    'transition-all duration-[800ms] ease-out',
    'reveal',
  ],

  // Cards
  FEATURE_CARD: [
    'bg-[var(--surface)] p-10 rounded-2xl',
    'border border-white/5',
    'transition-all duration-300',
    'hover:border-[rgba(0,102,255,0.3)] hover:-translate-y-1',
    'hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)]',
  ],

  // Icon containers
  ICON_CONTAINER: [
    'w-14 h-14 rounded-xl flex items-center justify-center',
    'text-[28px] mb-6',
  ],

  LOGO_CONTAINER: [
    'w-8 h-8 rounded-lg flex items-center justify-center',
    'font-mono text-lg',
  ],

  // Badge
  BADGE: [
    'inline-block px-4 py-2 rounded-3xl',
    'bg-[var(--surface)] border border-white/10',
    'text-sm font-semibold text-[var(--secondary)]',
  ],

  BADGE_WITH_ANIMATION: [
    'inline-block px-4 py-2 rounded-3xl',
    'bg-[var(--surface)] border border-white/10',
    'text-sm font-semibold text-[var(--secondary)]',
    'mb-6 animate-fade-in-up-2',
  ],
} as const;

// Keyframe animations (CSS-in-JS)
export const KEYFRAMES = `
  @keyframes gradientShift {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.8; transform: scale(1.1); }
  }

  .animate-gradient-shift {
    animation: gradientShift 15s ease infinite;
  }

  @keyframes slideDown {
    from { transform: translateY(-20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }

  .animate-slide-down {
    animation: slideDown 0.8s ease;
  }

  @keyframes fadeInUp {
    from { transform: translateY(30px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }

  .animate-fade-in-up-1 { animation: fadeInUp 1s ease 0.2s backwards; }
  .animate-fade-in-up-2 { animation: fadeInUp 1s ease 0.4s backwards; }
  .animate-fade-in-up-3 { animation: fadeInUp 1s ease 0.6s backwards; }
  .animate-fade-in-up-4 { animation: fadeInUp 1s ease 0.8s backwards; }
  .animate-fade-in-up-5 { animation: fadeInUp 1s ease 1s backwards; }

  .reveal.reveal-active {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
`;
