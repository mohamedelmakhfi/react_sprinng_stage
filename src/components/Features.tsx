import { FunctionComponent } from "react";
import FeatureItems from "./FeatureItems";
import styles from "./Features.module.css";

export type FeaturesType = {
  className?: string;
};

const Features: FunctionComponent<FeaturesType> = ({ className = "" }) => {
  return (
    <section className={[styles.features, className].join(" ")}>
      <div className={styles.featureList}>
        <FeatureItems
          solution1="/solution-1@2x.png"
          skillsToDecorateYourHome="Skills to decorate your home"
          levelUpYourSkillsWithStep="Level up your skills with step-by-step guidance on projects to achieve learnings you're proud of."
        />
        <FeatureItems
          solution1="/calendar-1@2x.png"
          skillsToDecorateYourHome="Flexible curriculum"
          levelUpYourSkillsWithStep="We break down the class into manageable activities to do at your own pace."
          propPadding="26px 22px 26px 23px"
        />
        <FeatureItems
          solution1="/feedback-1@2x.png"
          skillsToDecorateYourHome={`Feedback & discussions`}
          levelUpYourSkillsWithStep="Access a community of peers to get feedback and be inspired"
          propPadding="35px 22px 35px 23px"
        />
        <div className={styles.featureItems}>
          <div className={styles.frameParent}>
            <input className={styles.frameInput} type="checkbox" />
            <div className={styles.allLevels}>All levels</div>
            <div className={styles.thisSessionIs}>
              This session is approachable for beginners and has advanced
              techniques for the more experienced.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
