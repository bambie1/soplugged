import { forwardRef } from "react";

import styles from "./Input.module.scss";

type Props = {
  label: string;
  error?: string;
  noHelper?: boolean;
} & React.ComponentProps<"input">;

const Input = forwardRef<HTMLInputElement, Props>(
  ({ label, error, noHelper, ...props }, ref: any) => {
    const renderHelperText = () => {
      if (error) return <span className={styles.errorMsg}>{error}</span>;

      return <span className={`${styles.helperText} ${styles.hidden}`}>.</span>;
    };

    return (
      <div className="grid w-full text-left">
        <label
          htmlFor=""
          className={`mb-1 block text-sm font-bold uppercase ${
            !!error && "text-red-500"
          }`}
        >
          {label}
        </label>
        <input
          ref={ref}
          {...props}
          className={`rounded-xl border border-primary bg-white p-4 transition duration-150 placeholder:italic placeholder:text-slate-400 ${
            !!error && "border-red-500 focus:outline-2 focus:outline-red-500"
          }`}
        />
        {!noHelper && renderHelperText()}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
