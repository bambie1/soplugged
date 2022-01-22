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

      <FormikInput
        label="Street Address"
        placeholder="123 Street"
        name="street_address"
        optional
      />
    </>
  );
};

export default NameLocation;
