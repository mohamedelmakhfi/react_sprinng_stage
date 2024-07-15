import { FunctionComponent } from "react";
import styles from "./PartnerItems.module.css";

export type PartnerItemsType = {
  className?: string;
};

const PartnerItems: FunctionComponent<PartnerItemsType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.partnerItems, className].join(" ")}>
      <img
        className={styles.download41}
        loading="lazy"
        alt=""
        src="/download-4-1@2x.png"
      />
      <div className={styles.partnerInfo}>
        <div className={styles.partnerNameAndTutorial}>
          <h3 className={styles.groupCultureAndContainer}>
            <p className={styles.groupCultureAnd}>{`Group Culture and `}</p>
            <p className={styles.musicianEducation}>Musician Education</p>
          </h3>
          <div className={styles.danielHpink}>Daniel H.Pink</div>
        </div>
        <div className={styles.tutorialLinks}>
          <div className={styles.tutorialButtons}>
            <div className={styles.viewTutorial}>View Tutorial</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerItems;
