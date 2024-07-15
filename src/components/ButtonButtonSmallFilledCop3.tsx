import { FunctionComponent } from "react";
import styles from "./ButtonButtonSmallFilledCop3.module.css";

export type ButtonButtonSmallFilledCop3Type = {
  className?: string;
};

const ButtonButtonSmallFilledCop3: FunctionComponent<
  ButtonButtonSmallFilledCop3Type
> = ({ className = "" }) => {
  return (
    <div className={[styles.buttonbuttonsmallfilledCop, className].join(" ")}>
      <div className={styles.elementbuttonsmallfilledCo}>
        <div className={styles.bg} />
        <a className={styles.buttonLabel}>Connexion</a>
      </div>
    </div>
  );
};

export default ButtonButtonSmallFilledCop3;
