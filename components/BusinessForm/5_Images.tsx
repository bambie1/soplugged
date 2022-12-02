import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";

import { FileDropzone } from "@/components/FileDropzone";

import useImageUploader from "@/hooks/useImageUploader";
import { useBusinessStore } from "@/scenes/MyBusinessPage/MyBusinessPage";
import { BusinessForm } from "layouts/BusinessForm";

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <BusinessForm>
        <div className="grid items-center gap-4">
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

          <div className="flex flex-col items-center gap-2">
            <div className="relative flex aspect-square w-14 items-center justify-center overflow-hidden rounded-full border border-primary bg-secondary">
              {business?.logo_url ? (
                <Image
                  src={business?.logo_url}
                  layout="fill"
                  objectFit="cover"
                  alt="logo preview"
                />
              ) : (
                <span>{business.business_name?.toUpperCase().charAt(0)}</span>
              )}
            </div>

            <label
              htmlFor="business-logo"
              className={`button text-inverse withIcon inline-flex cursor-pointer justify-center ${
                uploading && "disabled"
              }`}
            >
              {business?.logo_url ? "Change Logo" : "Upload Logo"}
            </label>
          </div>

          {error && <p className="error">{error}</p>}
          <FileDropzone />
        </div>
      </BusinessForm>
    </form>
  );
};

export default Images;
