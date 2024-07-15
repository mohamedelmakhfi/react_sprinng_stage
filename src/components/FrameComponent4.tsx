import { FunctionComponent } from "react";
import ButtonButtonSmallFilledCop1 from "./ButtonButtonSmallFilledCop1";
import ButtonButtonSmallFilledCop from "./ButtonButtonSmallFilledCop";
import styles from "./FrameComponent4.module.css";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameWrapper}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.slidesParent}>
              <div className={styles.slides}>
                <img
                  className={styles.ads3Icon}
                  loading="lazy"
                  alt=""
                  src="/ads3@2x.png"
                />
                <img className={styles.ads2Icon} alt="" src="/ads2@2x.png" />
                <img
                  className={styles.ads1Icon}
                  loading="lazy"
                  alt=""
                  src="/ads1@2x.png"
                />
              </div>
              <h1 className={styles.simplifiezVosDmarchesContainer}>
                <p className={styles.simplifiezVosDmarches}>
                  Simplifiez vos démarches
                </p>
                <p className={styles.etServices}>et services à distance.</p>
              </h1>
            </div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.queCeSoitPourDesWrapper}>
              <h3 className={styles.queCeSoit}>Que ce soit pour des :</h3>
            </div>
            <div className={styles.buttons}>
              <ButtonButtonSmallFilledCop1 buttonLabel="Démarches administratives" />
              <ButtonButtonSmallFilledCop1
                buttonLabel="Services de livraison"
                propLeft="291px"
                propTop="0px"
              />
              <ButtonButtonSmallFilledCop1
                buttonLabel="Assistance personnelle"
                propLeft="0px"
                propTop="56px"
              />
              <ButtonButtonSmallFilledCop />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.removebg1Parent}>
        <img
          className={styles.removebg1Icon}
          loading="lazy"
          alt=""
          src="/2650973removebg-1@2x.png"
        />
        <div className={styles.backgroundBlueContainerWrapper}>
          <div className={styles.backgroundBlueContainer}>
            <div className={styles.backgroundBlue} />
            <img
              className={styles.iconSettings}
              loading="lazy"
              alt=""
              src="/icon-settings.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent4;
