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

      <FormikLocation name="business_location" label="Business Location" />

      <FormikInput
        label="Street Address (Optional)"
        placeholder="123 Street"
        name="street_address"
      />
    </>
  );
};

export default NameLocation;
