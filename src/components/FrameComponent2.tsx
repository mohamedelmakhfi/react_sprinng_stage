import { FunctionComponent } from "react";
import AccordionItem from "./AccordionItem";
import styles from "./FrameComponent2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.pageAccordionWrapper, className].join(" ")}>
      <div className={styles.pageAccordion}>
        <div className={styles.textContentHeading}>
          <div className={styles.heading}>Nos Services !</div>
          <div className={styles.subheading} />
        </div>
        <div className={styles.accordion}>
          <div className={styles.accordionItem}>
            <div className={styles.accordionTitle}>
              <div className={styles.title}>Démarches Administratives</div>
              <img
                className={styles.chevronUpIcon}
                loading="lazy"
                alt=""
                src="/chevron-up.svg"
              />
            </div>
            <div className={styles.accordionContent}>
              <div className={styles.body}>
                Nous simplifions vos démarches administratives en prenant en
                charge la demande de documents, la gestion de dossiers et la
                prise de rendez-vous.
              </div>
            </div>
          </div>
          <AccordionItem title="Services de Livraison" />
          <AccordionItem title="Assistance Personnelle" />
          <div className={styles.accordionItem1}>
            <div className={styles.accordionTitle1}>
              <div className={styles.title1}>Title</div>
              <img
                className={styles.chevronDownIcon}
                alt=""
                src="/chevron-down.svg"
              />
            </div>
          </div>
          <div className={styles.accordionItem2}>
            <div className={styles.accordionTitle2}>
              <div className={styles.title2}>Title</div>
              <img
                className={styles.chevronDownIcon1}
                alt=""
                src="/chevron-down.svg"
              />
            </div>
          </div>
          <div className={styles.accordionItem3}>
            <div className={styles.accordionTitle3}>
              <div className={styles.title3}>Title</div>
              <img
                className={styles.chevronDownIcon2}
                alt=""
                src="/chevron-down.svg"
              />
            </div>
          </div>
          <div className={styles.accordionItem4}>
            <div className={styles.accordionTitle4}>
              <div className={styles.title4}>Title</div>
              <img
                className={styles.chevronDownIcon3}
                alt=""
                src="/chevron-down.svg"
              />
            </div>
          </div>
          <div className={styles.accordionItem5}>
            <div className={styles.accordionTitle5}>
              <div className={styles.title5}>Title</div>
              <img
                className={styles.chevronDownIcon4}
                alt=""
                src="/chevron-down.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
