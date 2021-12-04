import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";

import { IBusiness } from "@/types/Business";
import { FileDropzone } from "@/components/FileDropzone";
import { BusinessForm } from "layouts/BusinessForm";

import { updateAction } from "./littleStateMachine/updateAction";

import styles from "./MyBusinessPage.module.scss";

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

  const handleFileUpload = (e: any) => {
    const file = e.target.files[0];
    // uploadImage(file, "business_logos");
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <BusinessForm>
          <section className={styles.form}>
            <div className={styles.logoInput}>
              <label htmlFor="business-logo">Business logo:</label>
              <input
                accept="image/png, image/jpeg"
                className={styles.input}
                id="business-logo"
                name="logoUrl"
                type="file"
                onChange={handleFileUpload}
                value=""
              />
              <label
                htmlFor="business-logo"
                className={`button outlined withIcon ${styles.labelButton}`}
              >
                <FontAwesomeIcon icon={faCloudUploadAlt} />
                Upload Logo
              </label>
              {/* {url && <Avatar src={url} variant="square" />}
              {values.logoUrl && !url && (
                <Avatar src={values.logoUrl} variant="square" />
              )}
              {error && <p className="error">{error}</p>} */}
            </div>
            <FileDropzone />
          </section>
        </BusinessForm>
      </form>
    </>
  );
};

export default StepFourPage;
