import { FC } from "react";

import { FormikInput } from "@/components/formik";
import LocationPicker from "@/components/formik/LocationPicker";

const NameLocation: FC = () => {
  return (
    <>
      <FormikInput
        label="What is the name of your business?"
        name="business_name"
      />

      <LocationPicker />
    </>
  );
};

export default NameLocation;
