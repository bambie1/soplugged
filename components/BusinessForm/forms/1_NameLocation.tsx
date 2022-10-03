import { FC } from "react";

import { FormikInput } from "@/components/formik";
import LocationPicker from "@/components/formik/LocationPicker";

const NameLocation: FC = () => {
  return (
    <>
      <FormikInput
        label="What is your business name?"
        placeholder="ABC Business"
        name="business_name"
      />

      <LocationPicker />
    </>
  );
};

export default NameLocation;
