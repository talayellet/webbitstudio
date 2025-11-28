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
  HEADER:
    'fixed top-0 left-0 right-0 py-6 z-[100] animate-slide-down transition-all duration-300',
  HEADER_SCROLLED:
    'bg-[var(--surface)]/80 backdrop-blur-lg border-b border-white/10 shadow-lg',
  FIXED_HEADER_SPACER: 'pt-[88px]',
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
  HERO_SECTION:
    'py-[120px] pb-20 text-center animate-fade-in-up-1 min-h-[650px] flex flex-col justify-center',
  HERO_TITLE: [
    'text-[clamp(40px,6vw,72px)] font-bold leading-[1.2] mb-6 min-h-[100px] flex items-center justify-center',
    'animate-fade-in-up-3 smooth-content-change',
  ],
  HERO_TAGLINE: [
    'text-lg font-medium mb-4 min-h-[32px] flex items-center justify-center',
    'text-[var(--secondary)]',
    'animate-fade-in-up-3 smooth-content-change',
  ],
  HERO_DESCRIPTION: [
    'text-xl leading-relaxed max-w-[700px] mx-auto mb-10 min-h-[80px] flex items-center justify-center',
    'text-[var(--text-muted)]',
    'animate-fade-in-up-4 smooth-content-change',
  ],
  HERO_CTA_WRAPPER:
    'flex gap-4 justify-center flex-wrap animate-fade-in-up-5 min-h-[56px] smooth-content-change',

  // Features Section
  FEATURES_SECTION: 'py-20',
  FEATURES_GRID: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16',
  FEATURE_TITLE:
    'text-[22px] mb-3 text-[var(--text)] min-h-[70px] flex items-center smooth-content-change',
  FEATURE_DESCRIPTION:
    'text-[var(--text-muted)] leading-relaxed min-h-[90px] smooth-content-change',

  // Stats Section
  STATS_SECTION: [
    'py-20 bg-[var(--surface)]',
    'border-t border-b border-white/5',
  ],
  STATS_GRID:
    'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center',
  STAT_NUMBER:
    'text-5xl font-bold text-[var(--secondary)] mb-2 font-mono min-h-[60px] flex items-center justify-center smooth-content-change',
  STAT_LABEL:
    'text-[var(--text-muted)] text-base min-h-[56px] flex items-center justify-center smooth-content-change',

  // Final CTA Section
  FINAL_CTA_SECTION:
    'py-[120px] text-center min-h-[450px] flex flex-col justify-center',
  FINAL_CTA_TITLE:
    'text-[clamp(32px,5vw,56px)] mb-6 min-h-[80px] flex items-center justify-center smooth-content-change',
  FINAL_CTA_DESCRIPTION:
    'text-xl text-[var(--text-muted)] mb-10 max-w-[600px] mx-auto min-h-[70px] flex items-center justify-center smooth-content-change',

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
    'inline-flex items-center gap-2 justify-center min-w-[160px] min-h-[52px]',
    'bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)]',
    'text-white shadow-[0_4px_24px_rgba(0,102,255,0.3)]',
    'transition-all duration-300',
    'hover:-translate-y-0.5 hover:shadow-[0_6px_32px_rgba(0,102,255,0.4)]',
  ],

  SECONDARY_BUTTON: [
    'px-8 py-3.5 rounded-xl text-base font-semibold no-underline',
    'inline-flex items-center gap-2 justify-center min-w-[160px] min-h-[52px]',
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
    'min-h-[320px] flex flex-col',
  ],

  // Icon containers
  ICON_CONTAINER: [
    'w-14 h-14 rounded-xl flex items-center justify-center',
    'text-[28px] mb-6',
  ],

  ICON_TEXT: 'text-xl',

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

  // Contact Section
  CONTACT_SECTION: 'py-20 bg-[var(--surface)]',
  CONTACT_SECTION_HEADER: 'text-center mb-16',
  CONTACT_SECTION_TITLE: 'text-[clamp(32px,5vw,56px)] mb-6 font-bold',
  CONTACT_SECTION_SUBTITLE:
    'text-xl text-[var(--text-muted)] max-w-2xl mx-auto',

  // About Section
  ABOUT_SECTION: 'py-20',
  ABOUT_SECTION_CONTENT: 'max-w-3xl mx-auto text-center',
  ABOUT_SECTION_TITLE: 'text-[clamp(32px,5vw,56px)] mb-6 font-bold',
  ABOUT_SECTION_PARAGRAPH_1:
    'text-xl text-[var(--text-muted)] mb-8 leading-relaxed',
  ABOUT_SECTION_PARAGRAPH_2: 'text-lg text-[var(--text-muted)] leading-relaxed',

  // Contact Grid and Info
  CONTACT_GRID: 'grid grid-cols-1 lg:grid-cols-2 gap-12',
  CONTACT_INFO_WRAPPER: 'space-y-8',
  CONTACT_INFO_TITLE: 'text-2xl font-semibold mb-6',
  CONTACT_INFO_LIST: 'space-y-4',
  CONTACT_INFO_ITEM: 'flex items-start gap-4',
  CONTACT_INFO_ICON: [
    'w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0',
  ],
  CONTACT_INFO_LABEL: 'font-semibold mb-1',
  CONTACT_INFO_TEXT: 'text-[var(--text-muted)]',
  CONTACT_INFO_LINK: [
    'text-[var(--text-muted)]',
    'hover:text-[var(--primary)]',
    'transition-colors',
  ],
  CONTACT_SOCIAL_GRID: 'flex gap-3 mt-2',
  CONTACT_SOCIAL_LINK: [
    'w-10 h-10 rounded-lg flex items-center justify-center',
    'bg-[var(--background)]',
    'hover:bg-[var(--primary)]',
    'transition-colors',
  ],
  CONTACT_FORM_WRAPPER: [
    'bg-[var(--background)] p-8 rounded-2xl',
    'border border-white/5',
  ],
  CONTACT_FORM_TITLE: 'text-2xl font-semibold mb-6',
  CONTACT_FORM: 'space-y-6',
  CONTACT_FORM_LABEL: 'block text-sm font-medium mb-2',
  CONTACT_FORM_INPUT: [
    'w-full px-4 py-3 rounded-lg',
    'bg-[var(--surface)]',
    'border border-white/10',
    'focus:border-[var(--primary)] focus:outline-none',
    'transition-colors',
    'text-[var(--text)]',
  ],
  CONTACT_FORM_TEXTAREA: [
    'w-full px-4 py-3 rounded-lg',
    'bg-[var(--surface)]',
    'border border-white/10',
    'focus:border-[var(--primary)] focus:outline-none',
    'transition-colors',
    'text-[var(--text)]',
    'resize-none',
  ],
  CONTACT_FORM_BUTTON: [
    'w-full px-8 py-3.5 rounded-xl text-base font-semibold',
    'bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)]',
    'text-white shadow-[0_4px_24px_rgba(0,102,255,0.3)]',
    'transition-all duration-300',
    'hover:-translate-y-0.5 hover:shadow-[0_6px_32px_rgba(0,102,255,0.4)]',
  ],
} as const;
