import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import { SubmitHandler, useForm } from "react-hook-form";

import { FileDropzone } from "@/components/FileDropzone";

import useImageUploader from "@/hooks/useImageUploader";
import { useBusinessStore } from "@/scenes/MyBusinessPage/MyBusinessPage";
import { BusinessForm } from "layouts/BusinessForm";
import { Button } from "@/styled/Button";

interface IFormInput {
  business_images: string;
  logo_url: string;
}

const Images = () => {
  const { url, error, uploadImage, uploading } = useImageUploader();
  const { handleNextStep, business, updateBusiness } = useBusinessStore();

  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm<IFormInput>();

  const handleFileUpload = async (e: any) => {
    const file = e.target.files[0];
    if (file && file !== null) {
      await uploadImage(file, "business_logos");
    }
  };

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    updateBusiness({
      ...business,
      ...data,
    });

    handleNextStep();
  };

  return (
    <BusinessForm
      title="Images"
      subtitle="Upload a logo and sample images of your work"
    >
      <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
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
        <FileDropzone />
        <div className="fixed bottom-0 left-0 flex w-full justify-center bg-white p-2 shadow-bottom-nav">
          <div className="grid w-full max-w-xl">
            <Button type="submit">Next</Button>
          </div>
        </div>
      </form>
    </BusinessForm>
  );
};

export default Images;
