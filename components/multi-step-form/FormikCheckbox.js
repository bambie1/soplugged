import React, { useState } from "react";
import {
  Checkbox,
  FormControlLabel,
  FormControl,
  FormLabel,
  FormGroup,
} from "@material/mui-components";
import { useField, useFormikContext } from "formik";

const FormikCheckbox = ({ name, label, legend, ...otherProps }) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);
  const [isChecked, setIsChecked] = useState(field.value);
  const handleChange = (e) => {
    const { checked } = e.target;
    setIsChecked(checked);
    setFieldValue(name, checked);
  };

  const configCheckbox = {
    ...field,
    ...otherProps,
    onChange: handleChange,
    checked: isChecked,
  };
  const configFormControl = {};

  if (meta && meta.touched && meta.error) {
    configFormControl.error = true;
    configFormControl.helperText = meta.error;
  }
  return (
    <FormControl {...configFormControl} margin="normal">
      <FormLabel component="legend">{legend}</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox {...configCheckbox} />}
          label={label}
        />
      </FormGroup>
    </FormControl>
  );
};

export default FormikCheckbox;
