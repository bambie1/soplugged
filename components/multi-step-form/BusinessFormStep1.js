import React from "react";
import FormikCheckbox from "./FormikCheckbox";
import FormikTextField from "./FormikTextField";
import LocationSearch from "../LocationSearch";

const BusinessFormStep1 = () => {
  return (
    <div>
      <FormikTextField name="businessName" label="Name of Business" />
      <LocationSearch
        label="Location of Business"
        name="businessLocation"
        variant="outlined"
        margin="normal"
      />
      <FormikTextField
        name="streetAddress"
        label="Street Address"
        helperText="Optional"
      />
      <FormikCheckbox
        name="canadaWide"
        legend="Geo Restriction"
        label="I provide services Canada-wide"
      />
    </div>
  );
};

export default BusinessFormStep1;
