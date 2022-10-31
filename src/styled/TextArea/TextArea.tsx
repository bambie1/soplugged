import { forwardRef } from "react";
import slugify from "slugify";

import styles from "./TextArea.module.scss";

type Props = {
  label: string;
  name: string;
  noScroll?: boolean;
} & React.ComponentProps<"textarea">;

const TextArea = forwardRef<HTMLTextAreaElement, Props>(
  ({ label, name, noScroll, ...props }, ref: any) => {
    return (
      <div className={styles.formGroup}>
        <label
          htmlFor={name}
          className="mb-1 block text-sm font-bold uppercase"
        >
          {label}
        </label>
        <textarea
          id={name}
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
