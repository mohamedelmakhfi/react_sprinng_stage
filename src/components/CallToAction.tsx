import { FunctionComponent } from "react";
import styles from "./CallToAction.module.css";

export type CallToActionType = {
  className?: string;
};

const CallToAction: FunctionComponent<CallToActionType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.callToAction, className].join(" ")}>
      <div className={styles.callToActionInner}>
        <div className={styles.callToActionWrapper}>
          <b className={styles.prtCommencer}>Prêt à commencer?</b>
          <div className={styles.actionButtons}>
            <button className={styles.actionButtonLabels}>
              <div className={styles.connexion}>connexion</div>
            </button>
            <button className={styles.actionButtonLabels1}>
              <div className={styles.contact}>Contact</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
