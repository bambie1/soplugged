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
        <label htmlFor="" className="mb-1 block text-sm font-bold uppercase">
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
