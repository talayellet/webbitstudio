export const LANGUAGE_SWITCHER_STYLES = {
  CONTAINER: 'fixed top-5 right-5 z-[1000]',
  WRAPPER: 'w-48',
  BUTTON:
    'w-full flex items-center gap-2 px-4 py-2 bg-[var(--surface)] border border-white/10 rounded-xl backdrop-blur-xl shadow-lg hover:bg-[var(--surface)]/80 transition-all duration-200 group',
  FLAG: 'text-2xl',
  LABEL: 'text-sm font-medium text-[var(--text)] flex-1',
  MENU_ITEMS:
    'absolute right-0 mt-2 w-48 origin-top-right bg-[var(--surface)] border border-white/10 rounded-xl backdrop-blur-xl shadow-xl focus:outline-none overflow-hidden',
  MENU_ITEM_BUTTON:
    'w-full flex items-center gap-3 px-4 py-3 text-left transition-colors',
  MENU_ITEM_ACTIVE: 'bg-white/5',
  MENU_ITEM_SELECTED: 'bg-[var(--primary)]/20',
  MENU_ITEM_FLAG: 'text-2xl',
  MENU_ITEM_LABEL: 'text-sm font-medium',
  MENU_ITEM_LABEL_ACTIVE: 'text-[var(--primary)]',
  MENU_ITEM_LABEL_INACTIVE: 'text-[var(--text)]',
};

export const TRANSITION = {
  ENTER: 'transition ease-out duration-100',
  ENTER_FROM: 'transform opacity-0 scale-95',
  ENTER_TO: 'transform opacity-100 scale-100',
  LEAVE: 'transition ease-in duration-75',
  LEAVE_FROM: 'transform opacity-100 scale-100',
  LEAVE_TO: 'transform opacity-0 scale-95',
};
