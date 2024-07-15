import { FunctionComponent } from "react";
import styles from "./FrameComponent5.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.learnSkillsInnerParent, className].join(" ")}>
      <div className={styles.learnSkillsInner}>
        <div className={styles.learnSkillsInnerChild} />
        <div className={styles.learnSkillsWrapper}>
          <h1 className={styles.skillsYouWill}>Skills you will learn</h1>
        </div>
        <div className={styles.skillList}>
          <div className={styles.skillItems}>
            <b className={styles.defineYourSpace}>Define Your Space</b>
            <div className={styles.buildAMoodContainer}>
              <ul className={styles.buildAMoodBoardCreateYour}>
                <li className={styles.buildAMood}>Build a mood board</li>
                <li className={styles.createYourDesign}>
                  Create your design plan
                </li>
                <li className={styles.sketchYourFloor}>
                  Sketch your floor plan
                </li>
                <li className={styles.evaluateFurnitureSize}>
                  Evaluate furniture size and scale
                </li>
                <li>Declutter your space</li>
              </ul>
            </div>
          </div>
          <div className={styles.skillItems1}>
            <b className={styles.garnerYourDesign}>
              Garner Your Design Elements
            </b>
            <div className={styles.chooseYourColorContainer}>
              <ul className={styles.chooseYourColorPaletteSele}>
                <li className={styles.chooseYourColor}>
                  Choose your color palette
                </li>
                <li className={styles.selectYourFabrics}>
                  Select your fabrics
                </li>
                <li className={styles.pickingOutFurniture}>
                  Picking out furniture
                </li>
                <li className={styles.establishAccentPieces}>
                  Establish accent pieces
                </li>
                <li>Understand finishes + textiles</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.activateVisionInnerWrapper}>
          <div className={styles.activateVisionInner}>
            <b className={styles.activateYourVision}>Activate Your Vision</b>
            <div className={styles.hangArtworkProperlyContainer}>
              <ul className={styles.hangArtworkProperlyBalance}>
                <li className={styles.hangArtworkProperly}>
                  Hang artwork properly
                </li>
                <li className={styles.balanceArtificial}>
                  Balance artificial + natural light
                </li>
                <li className={styles.dressUpWindow}>
                  Dress up window shades and drapes
                </li>
                <li className={styles.accessorizeShelves}>
                  Accessorize shelves
                </li>
                <li>Bring flow to your space</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.ellipseParent}>
        <div className={styles.frameChild} />
        <img className={styles.groupIcon} alt="" src="/group1.svg" />
      </div>
    </section>
  );
};

export default FrameComponent;
