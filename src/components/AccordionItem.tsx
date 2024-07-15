import { FunctionComponent } from "react";
import styles from "./AccordionItem.module.css";

export type AccordionItemType = {
  className?: string;
  title?: string;
};

const AccordionItem: FunctionComponent<AccordionItemType> = ({
  className = "",
  title,
}) => {
  return (
    <div className={[styles.accordionItem, className].join(" ")}>
      <div className={styles.accordionTitle}>
        <div className={styles.title}>{title}</div>
        <img
          className={styles.chevronDownIcon}
          alt=""
          src="/chevron-down.svg"
        />
      </div>
    </div>
  );
};

export default AccordionItem;
