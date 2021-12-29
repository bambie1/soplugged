import { forwardRef } from "react";

import styles from "./TextArea.module.scss";

type Props = {
  label: string;
  noScroll?: boolean;
} & React.ComponentProps<"textarea">;

const TextArea = forwardRef<HTMLTextAreaElement, Props>(
  ({ label, noScroll, ...props }, ref: any) => {
    return (
      <div className={styles.formGroup}>
        <label htmlFor="" className={styles.label}>
          {label}
        </label>
        <textarea
          ref={ref}
          {...props}
          className={`${styles.input} ${noScroll ? styles.noScroll : ""}`}
        />
      </div>
    );
  }
);

TextArea.displayName = "TextArea";

export default TextArea;
