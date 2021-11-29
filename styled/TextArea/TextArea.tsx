import { forwardRef } from "react";

import styles from "./TextArea.module.scss";

type Props = { label: string } & React.ComponentProps<"textarea">;

const TextArea = forwardRef<HTMLTextAreaElement, Props>(
  ({ label, ...props }, ref: any) => {
    return (
      <div className={styles.formGroup}>
        <label htmlFor="" className={styles.label}>
          {label}
        </label>
        <textarea ref={ref} {...props} className={styles.input} />
      </div>
    );
  }
);

TextArea.displayName = "TextArea";

export default TextArea;
