import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";

import { FileDropzone } from "@/components/FileDropzone";

import useImageUploader from "@/hooks/useImageUploader";
import { useBusinessStore } from "@/scenes/MyBusinessPage/MyBusinessPage";
import { BusinessForm } from "layouts/BusinessForm";
import { Button } from "@/styled/Button";

const Images = () => {
  const { url, error, uploadImage, uploading } = useImageUploader();
  const { business, handleNextStep } = useBusinessStore();

  const handleFileUpload = async (e: any) => {
    const file = e.target.files[0];
    if (file && file !== null) {
      await uploadImage(file, "business_logos");
    }
  };

  const handleConfirm = () => {
    handleNextStep();
  };

  return (
    <BusinessForm
      title="Images"
      subtitle="Upload a logo and sample images of your work"
    >
      <div className="">
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
            {business?.logo_url ? "Change Logo" : "Upload Logo"}
          </label>

          {business?.logo_url && (
            <div className="relative aspect-square w-10 overflow-hidden rounded-full border border-primary">
              <Image
                src={business?.logo_url}
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

      <Button onClick={handleConfirm}>Next</Button>
    </BusinessForm>
  );
};

export default Images;
