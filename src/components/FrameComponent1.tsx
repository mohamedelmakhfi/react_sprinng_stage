import { FunctionComponent } from "react";
import Card from "./Card";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.frameParent, className].join(" ")}>
      <div className={styles.opportunitesTitleContainerWrapper}>
        <button className={styles.opportunitesTitleContainer}>
          <div className={styles.opportunits}>Opportunités</div>
        </button>
      </div>
      <div className={styles.cardGridImageParent}>
        <div className={styles.cardGridImage}>
          <div className={styles.textContentHeading}>
            <div className={styles.heading}>Heading</div>
            <div className={styles.subheading}>Subheading</div>
          </div>
          <div className={styles.cards}>
            <Card
              image="/image@2x.png"
              title="Devenir Partenaire"
              bodyTextForWhateverYoudLi="Rejoignez notre réseau, augmentez votre visibilité, et accédez à une clientèle variée pour développer votre activité."
              showButton
            />
            <Card
              image="/image-1@2x.png"
              title="Devenir Agent"
              bodyTextForWhateverYoudLi="Offrez vos services à des clients, choisissez vos tâches selon vos compétences, et gagnez un revenu supplémentaire."
              showButton={false}
              propBackgroundColor="#daa11f"
              propPadding="var(--padding-27xl) var(--space-600)"
            />
            <div className={styles.card}>
              <img className={styles.imageIcon} alt="" src="/image-2@2x.png" />
              <div className={styles.body}>
                <div className={styles.text}>
                  <div className={styles.title}>Title</div>
                  <div
                    className={styles.bodyTextFor}
                  >{`Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story. `}</div>
                </div>
                <div className={styles.buttonGroup}>
                  <div className={styles.button}>
                    <img className={styles.starIcon} alt="" src="/star.svg" />
                    <div className={styles.button1}>Button</div>
                    <img className={styles.xIcon} alt="" src="/x.svg" />
                  </div>
                  <div className={styles.button2}>
                    <img className={styles.starIcon1} alt="" src="/star.svg" />
                    <div className={styles.button3}>Button</div>
                    <img className={styles.xIcon1} alt="" src="/x.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.cards1}>
            <div className={styles.card1}>
              <img className={styles.imageIcon1} alt="" src="/image-3@2x.png" />
              <div className={styles.body1}>
                <div className={styles.text1}>
                  <div className={styles.title1}>Title</div>
                  <div
                    className={styles.bodyTextFor1}
                  >{`Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story. `}</div>
                </div>
                <div className={styles.buttonGroup1}>
                  <div className={styles.button4}>
                    <img className={styles.starIcon2} alt="" src="/star.svg" />
                    <div className={styles.button5}>Button</div>
                    <img className={styles.xIcon2} alt="" src="/x.svg" />
                  </div>
                  <div className={styles.button6}>
                    <img className={styles.starIcon3} alt="" src="/star.svg" />
                    <div className={styles.button7}>Button</div>
                    <img className={styles.xIcon3} alt="" src="/x.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.card2}>
              <img className={styles.imageIcon2} alt="" src="/image-4@2x.png" />
              <div className={styles.body2}>
                <div className={styles.text2}>
                  <div className={styles.title2}>Title</div>
                  <div
                    className={styles.bodyTextFor2}
                  >{`Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story. `}</div>
                </div>
                <div className={styles.buttonGroup2}>
                  <div className={styles.button8}>
                    <img className={styles.starIcon4} alt="" src="/star.svg" />
                    <div className={styles.button9}>Button</div>
                    <img className={styles.xIcon4} alt="" src="/x.svg" />
                  </div>
                  <div className={styles.button10}>
                    <img className={styles.starIcon5} alt="" src="/star.svg" />
                    <div className={styles.button11}>Button</div>
                    <img className={styles.xIcon5} alt="" src="/x.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.card3}>
              <img className={styles.imageIcon3} alt="" src="/image-2@2x.png" />
              <div className={styles.body3}>
                <div className={styles.text3}>
                  <div className={styles.title3}>Title</div>
                  <div
                    className={styles.bodyTextFor3}
                  >{`Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story. `}</div>
                </div>
                <div className={styles.buttonGroup3}>
                  <div className={styles.button12}>
                    <img className={styles.starIcon6} alt="" src="/star.svg" />
                    <div className={styles.button13}>Button</div>
                    <img className={styles.xIcon6} alt="" src="/x.svg" />
                  </div>
                  <div className={styles.button14}>
                    <img className={styles.starIcon7} alt="" src="/star.svg" />
                    <div className={styles.button15}>Button</div>
                    <img className={styles.xIcon7} alt="" src="/x.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.button16}>
          <div className={styles.elementbuttonsmallfilledCo}>
            <div className={styles.bg} />
            <div className={styles.buttonLabel}>Inscription</div>
          </div>
        </div>
        <div className={styles.button17}>
          <div className={styles.elementbuttonsmallfilledCo1}>
            <div className={styles.bg1} />
            <div className={styles.buttonLabel1}>Inscription</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
