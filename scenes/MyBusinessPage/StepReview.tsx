import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";

import { Input } from "@/styled/Input";
import { IBusiness } from "@/types/Business";

import { updateAction } from "./littleStateMachine/updateAction";
import styles from "./MyBusinessPage.module.scss";
import { ButtonLink } from "@/styled/ButtonLink";
import { updateBusiness } from "@/utils/updateBusiness";
import { useAuth } from "@/context/authContext";
import { BusinessForm } from "layouts/BusinessForm";

const StepReviewPage = () => {
  const router = useRouter();
  const { user } = useAuth();
  const { state, actions } = useStateMachine({ updateAction });
  const { handleSubmit, register } = useForm<IBusiness>({
    defaultValues: state.businessDetails,
  });

  const onSubmit = async (data: any) => {
    const res = await updateBusiness(data, false);
    // console.log({ res });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <BusinessForm>
          <section className={styles.form}>
            <Input
              disabled
              label="Business Name"
              {...register("business_name")}
            />
            <Input
              disabled
              label="Business Location"
              {...register("business_location")}
            />
            <Input
              disabled
              label="Street Address"
              {...register("street_address")}
            />
            <Input
              disabled
              label="Business Url"
              {...register("business_url")}
            />
            <Input disabled label="IG Handle" {...register("ig_handle")} />
            <Input
              disabled
              label="Phone number"
              {...register("phone_number")}
            />
          </section>
        </BusinessForm>
      </form>
    </>
  );
};

export default StepReviewPage;
