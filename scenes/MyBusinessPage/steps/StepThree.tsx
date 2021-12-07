import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";

import { Input } from "@/styled/Input";
import { IBusiness } from "@/types/Business";

import { BusinessForm } from "layouts/BusinessForm";
import { updateAction } from "../littleStateMachine/updateAction";

import styles from "../MyBusinessPage.module.scss";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const toolbarOptions = [
  ["bold", "italic", "underline"],
  [{ list: "ordered" }, { list: "bullet" }],
];

const StepThreePage = () => {
  const router = useRouter();

  const { state, actions } = useStateMachine({ updateAction });
  const { handleSubmit, register, watch, setValue } = useForm<IBusiness>({
    defaultValues: state.businessDetails,
  });

  useEffect(() => {
    register("business_description", { required: true, minLength: 11 });
  }, [register]);

  const onEditorStateChange = (editorState: any) => {
    setValue("business_description", editorState);
  };
  const editorContent = watch("business_description");

  const onSubmit = (data: any) => {
    actions.updateAction({
      businessDetails: data,
    });
    router.push("/my-business?step=four", undefined, { shallow: true });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <BusinessForm>
          <section className={styles.form}>
            <div className="quillFormGroup">
              <label htmlFor="business_description" className="label">
                Business Description
              </label>
              <ReactQuill
                placeholder="Enter a description for your business (the more, the better)"
                value={editorContent || ""}
                onChange={onEditorStateChange}
                id="business_description"
                modules={{
                  clipboard: {
                    matchVisual: false,
                  },
                  toolbar: toolbarOptions,
                }}
              />
            </div>
            <Input label="Business Url" {...register("business_url")} />
            <Input label="IG Handle" {...register("ig_handle")} />
            <Input label="Phone number" {...register("phone_number")} />
          </section>
        </BusinessForm>
      </form>
    </>
  );
};

export default StepThreePage;
