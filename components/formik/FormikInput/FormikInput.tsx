import React from "react";
import { useField } from "formik";

import styles from "./FormikInput.module.scss";

const FormikInput = ({ label, ...props }: any) => {
  const { errorText, ...rest } = props;
  const [field, meta] = useField(props);

  const isError = meta.touched && meta.error;

  return (
    <>
      <label className={`${styles.label} ${isError && styles.error}`}>
        {label}
        <input
          {...field}
          {...props}
          className={`${styles.input} ${isError && styles.error}`}
        />
        {isError ? (
          <div className={`error ${styles.errorMsg}`}>{meta.error}</div>
        ) : null}
      </label>
    </>
  );
};

export { FormikInput };
