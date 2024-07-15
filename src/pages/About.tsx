import { FunctionComponent } from "react";
import FrameComponent1 from "../components/FrameComponent1";
import SideContent from "../components/SideContent";
import Features from "../components/Features";
import FrameComponent from "../components/FrameComponent";
import PartnersWrapper from "../components/PartnersWrapper";
import CallToAction from "../components/CallToAction";
import FooterSeaWireFooter from "../components/FooterSeaWireFooter";
import styles from "./About.module.css";

const About: FunctionComponent = () => {
  return (
    <div className={styles.about}>
      <FrameComponent1 />
      <SideContent />
      <Features />
      <img
        className={styles.aboutChild}
        loading="lazy"
        alt=""
        src="/frame-1000001488.svg"
      />
      <FrameComponent />
      <section className={styles.partners}>
        <div className={styles.partnersInner}>
          <PartnersWrapper />
          <CallToAction />
        </div>
      </section>
      <FooterSeaWireFooter />
    </div>
  );
};

export default About;
