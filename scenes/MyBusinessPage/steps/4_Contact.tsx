import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";

import { Input } from "@/styled/Input";
import { IBusiness } from "@/types/Business";

import { BusinessForm } from "layouts/BusinessForm";
import { updateAction } from "../littleStateMachine/updateAction";

import styles from "../MyBusinessPage.module.scss";

const ContactLinks = () => {
  const router = useRouter();

  const { state, actions } = useStateMachine({ updateAction });
  const { handleSubmit, register } = useForm<IBusiness>({
    defaultValues: state.businessDetails,
  });

  const onSubmit = (data: any) => {
    actions.updateAction({
      businessDetails: data,
    });
    router.push("/my-business?step=images", undefined, { shallow: true });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <BusinessForm current={4}>
          <section className={styles.form}>
            <Input
              label="Business Url"
              {...register("business_url")}
              placeholder="https://www.example.com"
            />
            <Input
              label="IG Handle"
              {...register("ig_handle")}
              placeholder="@sopluggd"
            />
            <Input
              label="Phone number"
              {...register("phone_number")}
              placeholder="6131234567"
            />
          </section>
        </BusinessForm>
      </form>
    </>
  );
};

export default ContactLinks;
