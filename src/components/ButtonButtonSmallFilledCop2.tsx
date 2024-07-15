import { FunctionComponent } from "react";
import styles from "./ButtonButtonSmallFilledCop2.module.css";

export type ButtonButtonSmallFilledCop2Type = {
  className?: string;
};

const ButtonButtonSmallFilledCop2: FunctionComponent<
  ButtonButtonSmallFilledCop2Type
> = ({ className = "" }) => {
  return (
    <div className={[styles.buttonbuttonsmallfilledCop, className].join(" ")}>
      <div className={styles.elementbuttonsmallfilledCo}>
        <div className={styles.bg} />
        <a className={styles.buttonLabel}>Inscription</a>
      </div>
    </div>
  );
};

export default ButtonButtonSmallFilledCop2;
