import { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";

import { IBusiness } from "@/types/Business";
import { FileDropzone } from "@/components/FileDropzone";

import { BusinessForm } from "layouts/BusinessForm";
import useImageUploader from "hooks/useImageUploader";
import { updateAction } from "../littleStateMachine/updateAction";

import styles from "../MyBusinessPage.module.scss";

const Images = () => {
  const router = useRouter();
  const { url, error, uploadImage, uploading } = useImageUploader();

  const { state, actions } = useStateMachine({ updateAction });
  const { handleSubmit, setValue, getValues } = useForm<IBusiness>({
    defaultValues: state.businessDetails,
  });

  useEffect(() => {
    if (url) setValue("logo_url", url);
  }, [url, setValue]);

  const currentUrl = getValues("logo_url");
  const sampleImages = getValues("sample_images");

  const updateImages = (updatedStr: string) => {
    setValue("sample_images", updatedStr);
  };

  const onSubmit = (data: any) => {
    actions.updateAction({
      businessDetails: data,
    });
    router.push("/my-business?step=review", undefined, { shallow: true });
  };

  const handleFileUpload = async (e: any) => {
    const file = e.target.files[0];
    if (file && file !== null) {
      await uploadImage(file, "business_logos");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <BusinessForm current={5}>
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
                disabled={!!uploading}
              />

              <div className={styles.logoAndPreview}>
                <label
                  htmlFor="business-logo"
                  className={`button outlined withIcon ${styles.labelButton}`}
                >
                  <FontAwesomeIcon icon={faCloudUploadAlt} />
                  {currentUrl ? "Change Logo" : "Upload Logo"}
                </label>

                {currentUrl && (
                  <Image
                    src={currentUrl}
                    width={40}
                    height={40}
                    alt="log preview"
                  />
                )}
              </div>

              {error && <p className="error">{error}</p>}
            </div>
            <FileDropzone
              images={sampleImages || ""}
              updateImages={updateImages}
            />
          </section>
        </BusinessForm>
      </form>
    </>
  );
};

export default Images;
