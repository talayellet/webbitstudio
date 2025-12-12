import { STYLES } from '../../../utils';

interface AboutSectionProps {
  title: string;
  paragraph1: string;
  paragraph2: string;
  restaurantName: string;
  addToRefs: (el: HTMLElement | null) => void;
}

/**
 * About section component for restaurant-cafe template
 */
export const AboutSection = ({
  title,
  paragraph1,
  paragraph2,
  restaurantName,
  addToRefs,
}: AboutSectionProps) => {
  return (
    <section className={STYLES.ABOUT} id="about">
      <div className={STYLES.CONTAINER}>
        <div className={STYLES.ABOUT_GRID}>
          <div
            className={`${STYLES.ABOUT_CONTENT} ${STYLES.FADE_IN}`}
            ref={addToRefs}
          >
            <h2>{title}</h2>
            <div
              className={STYLES.ORNAMENT}
              style={{ marginLeft: 0 }}
              aria-hidden="true"
            ></div>
            <p>{paragraph1}</p>
            <p>{paragraph2}</p>
          </div>
          <div
            className={`${STYLES.ABOUT_IMAGE} ${STYLES.FADE_IN}`}
            ref={addToRefs}
            data-restaurant-name={restaurantName}
            aria-hidden="true"
          ></div>
        </div>
      </div>
    </section>
  );
};
