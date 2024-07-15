import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ButtonButtonSmallFilledCop1.module.css";

export type ButtonButtonSmallFilledCop1Type = {
  className?: string;
  buttonLabel?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
  propTop?: CSSProperties["top"];
};

const ButtonButtonSmallFilledCop1: FunctionComponent<
  ButtonButtonSmallFilledCop1Type
> = ({ className = "", buttonLabel, propLeft, propTop }) => {
  const buttonButtonSmallFilledCopStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
      top: propTop,
    };
  }, [propLeft, propTop]);

  return (
    <div
      className={[styles.buttonbuttonsmallfilledCop, className].join(" ")}
      style={buttonButtonSmallFilledCopStyle}
    >
      <div className={styles.elementbuttonsmallfilledCo}>
        <div className={styles.bg} />
        <div className={styles.buttonLabel}>{buttonLabel}</div>
      </div>
    </div>
  );
};

export default ButtonButtonSmallFilledCop1;
