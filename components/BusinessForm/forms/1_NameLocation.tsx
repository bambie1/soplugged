import { FC } from "react";

import { FormikInput, FormikLocation } from "@/components/formik";

const NameLocation: FC = () => {
  return (
    <>
      <FormikInput
        label="Business Name"
        placeholder="ABC Business"
        name="business_name"
      />

      <FormikLocation
        name="business_location"
        label="Business Location (City)"
      />
    </>
  );
};

export default NameLocation;
