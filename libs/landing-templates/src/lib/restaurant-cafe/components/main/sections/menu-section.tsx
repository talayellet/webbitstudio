import { STYLES, MenuItem } from '../../../utils';

interface MenuSectionProps {
  title: string;
  description: string;
  menuItems: MenuItem[];
  addToRefs: (el: HTMLElement | null) => void;
}

/**
 * Menu section component for restaurant-cafe template
 */
export const MenuSection = ({
  title,
  description,
  menuItems,
  addToRefs,
}: MenuSectionProps) => {
  return (
    <section className={STYLES.MENU_HIGHLIGHT} id="menu">
      <div className={STYLES.CONTAINER}>
        <div
          className={`${STYLES.SECTION_HEADER} ${STYLES.FADE_IN}`}
          ref={addToRefs}
        >
          <h2>{title}</h2>
          <div className={STYLES.ORNAMENT} aria-hidden="true"></div>
          <p>{description}</p>
        </div>
        <div className={STYLES.MENU_GRID}>
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={`${STYLES.MENU_ITEM} ${STYLES.FADE_IN}`}
              ref={addToRefs}
            >
              <div className={STYLES.MENU_ITEM_ICON}>{item.icon}</div>
              <h3 className={STYLES.MENU_ITEM_NAME}>{item.name}</h3>
              <p className={STYLES.MENU_ITEM_DESCRIPTION}>{item.description}</p>
              <div className={STYLES.MENU_ITEM_PRICE}>{item.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
