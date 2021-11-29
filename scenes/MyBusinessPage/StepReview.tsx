import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";

import { Button } from "@/styled/Button";
import { Input } from "@/styled/Input";
import { IBusiness } from "@/types/Business";

import { updateAction } from "./littleStateMachine/updateAction";
import styles from "./MyBusinessPage.module.scss";
import { ButtonLink } from "@/styled/ButtonLink";
import { updateBusiness } from "@/utils/updateBusiness";
import { useAuth } from "@/context/authContext";

const StepReviewPage = () => {
  const router = useRouter();
  const { user } = useAuth();
  const { state, actions } = useStateMachine({ updateAction });
  const { handleSubmit, register } = useForm<IBusiness>({
    defaultValues: state.businessDetails,
  });

  const onSubmit = async (data: any) => {
    const token = await user.getIdToken();
    const res = await updateBusiness(data, false, token);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <Input disabled label="Business Name" {...register("business_name")} />
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
        <Input disabled label="Business Url" {...register("business_url")} />
        <Input disabled label="IG Handle" {...register("ig_handle")} />
        <Input disabled label="Phone number" {...register("phone_number")} />
        <Button type="submit">Submit</Button>
        <ButtonLink href={`/business/${state.businessDetails.slug}`}>
          View page
        </ButtonLink>
      </form>
    </>
  );
};

export default StepReviewPage;
