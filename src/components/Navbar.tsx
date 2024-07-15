import { FunctionComponent } from "react";
import ButtonButtonSmallFilledCop3 from "./ButtonButtonSmallFilledCop3";
import ButtonButtonSmallFilledCop2 from "./ButtonButtonSmallFilledCop2";
import styles from "./Navbar.module.css";

export type NavbarType = {
  className?: string;
};

const Navbar: FunctionComponent<NavbarType> = ({ className = "" }) => {
  return (
    <nav className={[styles.navbar, className].join(" ")}>
      <a className={styles.landie}>QdiLiGharad</a>
      <div className={styles.homeAboutContactMenuWrapper}>
        <div className={styles.homeAboutContactMenu}>
          <a className={styles.home}>Accueil</a>
          <a className={styles.about}>À propos</a>
          <a className={styles.about1}>Services</a>
          <a className={styles.contact}>Contact</a>
        </div>
      </div>
      <div className={styles.navbarInner}>
        <div className={styles.buttonbuttonsmallfilledCopParent}>
          <ButtonButtonSmallFilledCop3 />
          <ButtonButtonSmallFilledCop2 />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
