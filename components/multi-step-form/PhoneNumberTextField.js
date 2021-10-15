import React, { useState } from "react";
import { CustomTextField } from "@material/mui-components";
import { useField } from "formik";
import { useFormikContext } from "formik";

const PhoneNumberTextField = () => {
  const [field, meta] = useField("phoneNumber");
  const { setFieldValue, values } = useFormikContext();
  const [formattedNumber, setFormattedNumber] = useState(field.value);

  const handlePhoneNumber = (e) => {
    var n = e.target.value;
    setFieldValue("phoneNumber", n);
    setFormattedNumber(n.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3"));
  };

  const configTextField = {
    ...field,
    variant: "outlined",
    fullWidth: true,
    label: "Phone Number",
    helperText: "Optional, if you'd like users to call",
  };
  if (meta && meta.touched && meta.error) {
    configTextField.error = true;
    configTextField.helperText = meta.error;
  }
  return (
    <CustomTextField
      type="tel"
      color="secondary"
      // value={formattedNumber}
      // onChange={handlePhoneNumber}
      {...configTextField}
      margin="normal"
    />
  );
};

export default PhoneNumberTextField;
