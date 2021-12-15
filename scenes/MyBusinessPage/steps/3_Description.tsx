import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";

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

const DescriptionContact = () => {
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
    router.push("/my-business?step=contact", undefined, { shallow: true });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <BusinessForm current={3}>
          <section className={styles.form}>
            <div className="quillFormGroup">
              <label
                htmlFor="business_description"
                className={styles.descriptionLabel}
              >
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
          </section>
        </BusinessForm>
      </form>
    </>
  );
};

export default DescriptionContact;
