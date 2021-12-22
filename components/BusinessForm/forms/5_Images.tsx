import { useEffect } from "react";
import Image from "next/image";
import { useFormikContext } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";

import { FileDropzone } from "@/components/FileDropzone";

import useImageUploader from "@/hooks/useImageUploader";

import styles from "../BusinessForm.module.scss";

const Images = () => {
  const { setFieldValue, values } = useFormikContext<any>();
  const { url, error, uploadImage, uploading } = useImageUploader();

  useEffect(() => {
    if (url) setFieldValue("logo_url", url);
  }, [url, setFieldValue]);

  const handleFileUpload = async (e: any) => {
    const file = e.target.files[0];
    if (file && file !== null) {
      await uploadImage(file, "business_logos");
    }
  };

  return (
    <>
      {/* <section className={styles.form}> */}
      <div className={styles.logoInput}>
        <label htmlFor="business-logo">Business logo:</label>
        <input
          accept="image/png, image/jpeg"
          className={styles.input}
          id="business-logo"
          name="logo_url"
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
            {values.logo_url ? "Change Logo" : "Upload Logo"}
          </label>

          {values.logo_url && (
            <Image
              src={values.logo_url}
              width={40}
              height={40}
              alt="log preview"
            />
          )}
        </div>

        {error && <p className="error">{error}</p>}
      </div>
      <FileDropzone />
      {/* </section> */}
    </>
  );
};

export default Images;
