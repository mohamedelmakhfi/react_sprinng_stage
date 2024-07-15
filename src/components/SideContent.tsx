import { FunctionComponent } from "react";
import styles from "./SideContent.module.css";

export type SideContentType = {
  className?: string;
};

const SideContent: FunctionComponent<SideContentType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.sideContent, className].join(" ")}>
      <div className={styles.sideContentInner}>
        <div className={styles.sideContentWrapper}>
          <div className={styles.aProposWrapper}>
            <h1 className={styles.aPropos}>A propos</h1>
          </div>
          <div className={styles.cutInAMomentOu9wfeirnz0UnParent}>
            <img
              className={styles.cutInAMomentOu9wfeirnz0UnIcon}
              loading="lazy"
              alt=""
              src="/cutinamomentou9wfeirnz0unsplash-2@2x.png"
            />
            <h3 className={styles.fromPreschoolTo}>
              From preschool to pre-tertiary, our students enjoy fun,
              interactive and relevant lessons and are empowered to think beyond
              the confines of the classroom.
            </h3>
          </div>
        </div>
        <div className={styles.readMoreContainerWrapper}>
          <button className={styles.readMoreContainer}>
            <div className={styles.savoirPlus}>Savoir plus</div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SideContent;
