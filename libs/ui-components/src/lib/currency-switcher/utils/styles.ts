export const CURRENCY_SWITCHER_STYLES = {
  CONTAINER: 'fixed top-5 left-5 z-[1000]',
  WRAPPER: 'w-32',
  BUTTON:
    'w-full flex items-center gap-2 px-3 py-2 bg-[var(--surface)] border border-white/10 rounded-xl backdrop-blur-xl shadow-lg hover:bg-[var(--surface)]/80 transition-all duration-200 group',
  SYMBOL: 'text-lg font-semibold text-[var(--text)]',
  LABEL: 'text-xs font-medium text-[var(--text-muted)] flex-1',
  CHEVRON_ICON:
    'w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--text)] transition-colors',
  MENU_ITEMS:
    'absolute left-0 mt-2 w-32 origin-top-left bg-[var(--surface)] border border-white/10 rounded-xl backdrop-blur-xl shadow-xl focus:outline-none overflow-hidden',
  MENU_ITEM_BUTTON:
    'w-full flex items-center gap-2 px-3 py-2.5 text-left transition-colors',
  MENU_ITEM_ACTIVE: 'bg-white/5',
  MENU_ITEM_SELECTED: 'bg-[var(--primary)]/20',
  MENU_ITEM_SYMBOL: 'text-lg font-semibold',
  MENU_ITEM_LABEL: 'text-xs font-medium',
  MENU_ITEM_LABEL_ACTIVE: 'text-[var(--primary)]',
  MENU_ITEM_LABEL_INACTIVE: 'text-[var(--text)]',
};

export const CURRENCY_SWITCHER_TRANSITION = {
  ENTER: 'transition ease-out duration-100',
  ENTER_FROM: 'transform opacity-0 scale-95',
  ENTER_TO: 'transform opacity-100 scale-100',
  LEAVE: 'transition ease-in duration-75',
  LEAVE_FROM: 'transform opacity-100 scale-100',
  LEAVE_TO: 'transform opacity-0 scale-95',
};
