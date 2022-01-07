import { FC, ComponentProps } from "react";
import { useField } from "formik";

import styles from "./FormikInput.module.scss";

type Props = {
  label: string;
  prefix?: string;
  optional?: boolean;
} & ComponentProps<"input">;

const FormikInput: FC<Props> = ({ label, prefix, optional, ...props }: any) => {
  const { errorText, ...rest } = props;
  const [field, meta] = useField(props);

  const isError = (meta.touched || !meta.initialValue) && meta.error;

  const renderInput = () => {
    if (prefix) {
      return (
        <div className={`${styles.inputBox} ${isError && styles.error}`}>
          <span className={styles.prefix}>{prefix}</span>
          <input
            {...field}
            {...props}
            className={`${styles.input} ${isError && styles.error}`}
          />
        </div>
      );
    }

    return (
      <input
        {...field}
        {...props}
        className={`${styles.input} ${isError && styles.error}`}
      />
    );
  };

  return (
    <>
      <label className={`${styles.label} ${isError && styles.error}`}>
        {label}{" "}
        {optional && <span className={styles.optional}>(Optional)</span>}
        {renderInput()}
        {isError ? (
          <div className={`error ${styles.errorMsg}`}>{meta.error}</div>
        ) : null}
      </label>
    </>
  );
};

export { FormikInput };
