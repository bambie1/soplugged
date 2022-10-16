import { useEffect } from "react";
import Image from "next/image";
import { useFormikContext } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";

import { FileDropzone } from "@/components/FileDropzone";

import useImageUploader from "@/hooks/useImageUploader";

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
      <div className="lg:hidden">
        <label htmlFor="business-logo">Business logo:</label>
        <input
          accept="image/png, image/jpeg"
          className="hidden"
          id="business-logo"
          name="logo_url"
          type="file"
          onChange={handleFileUpload}
          value=""
          disabled={uploading}
        />

        <div className="flex items-center gap-4">
          <label
            htmlFor="business-logo"
            className={`button outlined withIcon inline-flex ${
              uploading && "disabled"
            }`}
          >
            <FontAwesomeIcon icon={faCloudUploadAlt} />
            {values.logo_url ? "Change Logo" : "Upload Logo"}
          </label>

          {values.logo_url && (
            <div className="relative aspect-square w-10 overflow-hidden rounded-full border border-primary">
              <Image
                src={values.logo_url}
                layout="fill"
                objectFit="cover"
                alt="logo preview"
              />
            </div>
          )}
        </div>

        {error && <p className="error">{error}</p>}
      </div>
      <FileDropzone />
    </>
  );
};

export default Images;
