import React from "react";
import { CustomTextField } from "@material/mui-components";
import { useField } from "formik";

const FormikTextField = ({ name, handleChange, ...otherProps }) => {
  const [field, meta] = useField(name);

  const configTextField = {
    ...field,
    ...otherProps,
    variant: "outlined",
    fullWidth: true,
  };

  if (meta && meta.touched && meta.error) {
    configTextField.error = true;
    configTextField.helperText = meta.error;
  }
  return (
    <CustomTextField color="secondary" {...configTextField} margin="normal" />
  );
};

export default FormikTextField;
