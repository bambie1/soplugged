import { SubmitHandler, useForm } from "react-hook-form";

import { useBusinessStore } from "@/src/scenes/MyBusinessPage/MyBusinessPage";
import { Input } from "@/styled/Input";
import { BusinessForm } from "@/src/layouts/BusinessForm";

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
              pattern: {
                value:
                  /^(www\.)[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
                message: "Please enter a valid url starting with www.",
              },
            })}
            error={errors.business_url?.message}
          />

          <Input
            label="IG Handle"
            prefix="@"
            {...register("ig_handle", {
              value: business.ig_handle,
              pattern: {
                value: /^[a-zA-Z0-9_.]+([-.][a-zA-Z0-9_]+)*$/,
                message:
                  "Your IG handle can't contain special characters or spaces",
              },
            })}
            error={errors.ig_handle?.message}
          />

          <Input
            label="Phone Number"
            {...register("phone_number", {
              value: business.phone_number,
              pattern: {
                value: /^\d+$/,
                message: "Your phone number must consist only of digits",
              },
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
            error={errors.phone_number?.message}
          />
        </div>
      </BusinessForm>
    </form>
  );
};

export default Contact;
