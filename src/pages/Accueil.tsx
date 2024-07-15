import { FunctionComponent } from "react";
import Navbar from "../components/Navbar";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import styles from "./Accueil.module.css";

const Accueil: FunctionComponent = () => {
  return (
    <div className={styles.accueil}>
      <div className={styles.accueilChild} />
      <section className={styles.accueilInner}>
        <div className={styles.navbarParent}>
          <Navbar />
          <FrameComponent4 />
        </div>
      </section>
      <FrameComponent3 />
      <FrameComponent2 />
      <FrameComponent1 />
      <FrameComponent />
    </div>
  );
};

export default Accueil;
