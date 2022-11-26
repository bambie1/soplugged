import { FC } from "react";

import LocationPicker from "@/components/formik/LocationPicker";
import { Input } from "@/styled/Input";
import { BusinessForm } from "layouts/BusinessForm";
import { Button } from "@/styled/Button";
import { useBusinessStore } from "@/scenes/MyBusinessPage/MyBusinessPage";

const NameLocation: FC = () => {
  const { handleNextStep } = useBusinessStore();

  const handleConfirm = () => {
    handleNextStep();
  };

  return (
    <BusinessForm
      title="Name & Location"
      subtitle="Important details of your business"
    >
      <form className="grid">
        <Input
          label="What is the name of your business?"
          name="business_name"
        />

        {/* <LocationPicker /> */}

        <Button onClick={handleConfirm}>Next</Button>
      </form>
    </BusinessForm>
  );
};

export default NameLocation;
