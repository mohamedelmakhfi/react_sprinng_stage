import { FunctionComponent } from "react";
import PartnerItems from "./PartnerItems";
import styles from "./PartnersWrapper.module.css";

export type PartnersWrapperType = {
  className?: string;
};

const PartnersWrapper: FunctionComponent<PartnersWrapperType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.partnersWrapper, className].join(" ")}>
      <div className={styles.nosPartenairesWrapper}>
        <h1 className={styles.nosPartenaires}>
          <p className={styles.nosPartenaires1}>Nos partenaires</p>
        </h1>
      </div>
      <div className={styles.partnerLogos}>
        <div className={styles.logosContainer}>
          <img
            className={styles.logoPlaceholderIcon}
            loading="lazy"
            alt=""
            src="/frame-1000001488.svg"
          />
        </div>
        <div className={styles.partnerDetails}>
          <PartnerItems />
          <PartnerItems />
          <PartnerItems />
          <PartnerItems />
        </div>
      </div>
    </div>
  );
};

export default PartnersWrapper;
