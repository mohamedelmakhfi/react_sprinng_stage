import { FunctionComponent } from "react";
import styles from "./ButtonButtonSmallFilledCop.module.css";

export type ButtonButtonSmallFilledCopType = {
  className?: string;
};

const ButtonButtonSmallFilledCop: FunctionComponent<
  ButtonButtonSmallFilledCopType
> = ({ className = "" }) => {
  return (
    <div className={[styles.buttonbuttonsmallfilledCop, className].join(" ")}>
      <div className={styles.elementbuttonsmallfilledCo}>
        <div className={styles.bg} />
        <div className={styles.buttonLabel}>En savoir plus</div>
      </div>
    </div>
  );
};

export default ButtonButtonSmallFilledCop;
