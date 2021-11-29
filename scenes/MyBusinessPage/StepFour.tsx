import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";

import { Button } from "@/styled/Button";
import { Input } from "@/styled/Input";
import { IBusiness } from "@/types/Business";

import { updateAction } from "./littleStateMachine/updateAction";
import styles from "./MyBusinessPage.module.scss";
import { FileDropzone } from "@/components/FileDropzone";

const StepFourPage = () => {
  const router = useRouter();

  const { state, actions } = useStateMachine({ updateAction });
  const { handleSubmit, register, watch, setValue } = useForm<IBusiness>({
    defaultValues: state.businessDetails,
  });

  const onSubmit = (data: any) => {
    actions.updateAction({
      businessDetails: data,
    });
    router.push("/my-business?step=review", undefined, { shallow: true });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <input type="file" />
        <FileDropzone />
        <Button type="submit">Next</Button>
      </form>
    </>
  );
};

export default StepFourPage;
