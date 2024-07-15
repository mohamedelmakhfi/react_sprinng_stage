import { FunctionComponent } from "react";
import styles from "./FrameComponent11.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <header className={[styles.aboutInner, className].join(" ")}>
      <div className={styles.navbarParent}>
        <nav className={styles.navbar}>
          <a className={styles.landie}>QdiLiGharad</a>
          <nav className={styles.pageContent}>
            <nav className={styles.navLinks}>
              <a className={styles.home}>Accueil</a>
              <a className={styles.about}>À propos</a>
              <a className={styles.about1}>Services</a>
              <a className={styles.contact}>Contact</a>
            </nav>
          </nav>
          <div className={styles.buttons}>
            <div className={styles.buttonContainer}>
              <div className={styles.buttonbuttonsmallfilledCop}>
                <div className={styles.elementbuttonsmallfilledCo}>
                  <div className={styles.bg} />
                  <a className={styles.buttonLabel}>Connexion</a>
                </div>
              </div>
              <div className={styles.buttonbuttonsmallfilledCop1}>
                <div className={styles.elementbuttonsmallfilledCo1}>
                  <div className={styles.bg1} />
                  <a className={styles.buttonLabel1}>Inscription</a>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className={styles.settings}>
          <img
            className={styles.iconSettings}
            loading="lazy"
            alt=""
            src="/icon-settings.svg"
          />
        </div>
      </div>
    </header>
  );
};

export default FrameComponent1;
