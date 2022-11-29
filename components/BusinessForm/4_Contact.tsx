import { SubmitHandler, useForm } from "react-hook-form";

import { useBusinessStore } from "@/scenes/MyBusinessPage/MyBusinessPage";
import { Button } from "@/styled/Button";
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
    <BusinessForm
      title="Contact"
      subtitle="Add helpful contact info for your potential customers"
    >
      <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Website Url"
          prefix="https://"
          placeholder="www.soplugged.com"
          {...register("business_url", {
            value: business.business_url,
          })}
        />
        <Input
          label="Phone Number"
          placeholder="6131234567"
          {...register("phone_number", {
            value: business.phone_number,
          })}
          type="tel"
        />
        <Input
          label="IG Handle"
          placeholder="sopluggd"
          {...register("ig_handle", {
            value: business.ig_handle,
          })}
        />
        <div className="fixed bottom-0 left-0 flex w-full justify-center bg-white p-2 shadow-bottom-nav">
          <div className="grid w-full max-w-xl">
            <Button type="submit">Next</Button>
          </div>
        </div>{" "}
      </form>
    </BusinessForm>
  );
};

export default Contact;
