import { forwardRef } from "react";

import styles from "./Input.module.scss";

type Props = { label: string } & React.ComponentProps<"input">;

const Input = forwardRef<HTMLInputElement, Props>(
  ({ label, ...props }, ref: any) => {
    return (
      <div className={styles.formGroup}>
        <label htmlFor="" className={styles.label}>
          {label}
        </label>
        <input ref={ref} {...props} className={styles.input} />
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
