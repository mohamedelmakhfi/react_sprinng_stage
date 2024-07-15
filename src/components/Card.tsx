import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Card.module.css";

export type CardType = {
  className?: string;
  image?: string;
  title?: string;
  bodyTextForWhateverYoudLi?: string;
  showButton?: boolean;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propPadding?: CSSProperties["padding"];
};

const Card: FunctionComponent<CardType> = ({
  className = "",
  image,
  title,
  bodyTextForWhateverYoudLi,
  showButton,
  propBackgroundColor,
  propPadding,
}) => {
  const cardStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      padding: propPadding,
    };
  }, [propBackgroundColor, propPadding]);

  return (
    <div className={[styles.card, className].join(" ")} style={cardStyle}>
      <img className={styles.imageIcon} loading="lazy" alt="" src={image} />
      <div className={styles.body}>
        <div className={styles.text}>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.bodyTextFor}>{bodyTextForWhateverYoudLi}</div>
        </div>
        <div className={styles.buttonGroup}>
          {showButton && (
            <div className={styles.button}>
              <img className={styles.starIcon} alt="" src="/star.svg" />
              <div className={styles.button1}>Button</div>
              <img className={styles.xIcon} alt="" src="/x.svg" />
            </div>
          )}
          <div className={styles.button2}>
            <img className={styles.starIcon1} alt="" src="/star.svg" />
            <div className={styles.button3}>Button</div>
            <img className={styles.xIcon1} alt="" src="/x.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
