import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FeatureItems.module.css";

export type FeatureItemsType = {
  className?: string;
  solution1?: string;
  skillsToDecorateYourHome?: string;
  levelUpYourSkillsWithStep?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
};

const FeatureItems: FunctionComponent<FeatureItemsType> = ({
  className = "",
  solution1,
  skillsToDecorateYourHome,
  levelUpYourSkillsWithStep,
  propPadding,
}) => {
  const featureItemsStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div
      className={[styles.featureItems, className].join(" ")}
      style={featureItemsStyle}
    >
      <div className={styles.featureItemContent}>
        <div className={styles.featureItemDetails}>
          <img
            className={styles.solution1Icon}
            loading="lazy"
            alt=""
            src={solution1}
          />
        </div>
        <div className={styles.skillsToDecorate}>
          {skillsToDecorateYourHome}
        </div>
        <div className={styles.levelUpYour}>{levelUpYourSkillsWithStep}</div>
      </div>
    </div>
  );
};

export default FeatureItems;
