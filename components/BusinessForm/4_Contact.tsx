import { SubmitHandler, useForm } from "react-hook-form";

import { useBusinessStore } from "@/scenes/MyBusinessPage/MyBusinessPage";
import { Input } from "@/styled/Input";
import { BusinessForm } from "layouts/BusinessForm";

interface IFormInput {
  business_url: string;
  phone_number: string;
  ig_handle: string;
}

const Contact = () => {
  const { handleNextStep, business, updateBusiness } = useBusinessStore();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    updateBusiness({
      ...business,
      ...data,
    });

    handleNextStep();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <BusinessForm
        title="Contact"
        subtitle="Add helpful contact info for your potential customers"
      >
        <div className="grid gap-4">
          <Input
            label="Website Url"
            prefix="https://"
            {...register("business_url", {
              value: business.business_url,
            })}
          />
          <Input
            label="Phone Number"
            {...register("phone_number", {
              value: business.phone_number,
              minLength: {
                message: "Your phone number must be 10 digits long",
                value: 10,
              },
              maxLength: {
                message: "Your phone number must be 10 digits long",
                value: 10,
              },
            })}
            type="tel"
            prefix="+1"
          />
          <Input
            label="IG Handle"
            prefix="@"
            {...register("ig_handle", {
              value: business.ig_handle,
            })}
          />
        </div>
      </BusinessForm>
    </form>
  );
};

export default Contact;
