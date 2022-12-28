import { ChangeEvent, useEffect, useState } from "react";
import Image from "next/image";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

import { FileDropzone } from "@/src/components/FileDropzone";

import useImageUploader from "@/hooks/useImageUploader";
import { useBusinessStore } from "@/src/scenes/MyBusinessPage/MyBusinessPage";
import { BusinessForm } from "@/src/layouts/BusinessForm";

interface IFormInput {
  sample_images: string;
  logo_url: string;
}

const Images = () => {
  const { error, uploadImage, uploading } = useImageUploader();
  const { handleNextStep, business, updateBusiness } = useBusinessStore();
  const [selectedFile, setSelectedFile] = useState<File>();
  const [preview, setPreview] = useState<string>("");

  const methods = useForm<IFormInput>();

  const displayLogoUrl = preview?.length > 0 ? preview : business?.logo_url;

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  useEffect(() => {
    if (!selectedFile) {
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    setSelectedFile(e.target.files[0]);
  };

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    if (selectedFile) {
      const logoUrl = await uploadImage(selectedFile, "business_logos");

      updateBusiness({
        ...business,
        ...data,
        logo_url: logoUrl,
      });
    } else {
      updateBusiness({
        ...business,
        ...data,
      });
    }

    handleNextStep();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <BusinessForm>
          <div className="grid items-center gap-4">
            <input
              accept="image/png, image/jpeg"
              className="hidden"
              id="business-logo"
              name="logo_url"
              type="file"
              onChange={onSelectFile}
              value=""
              disabled={uploading}
            />

            <div className="flex flex-col items-center gap-2">
              <div className="relative flex aspect-square w-14 items-center justify-center overflow-hidden rounded-full border border-primary bg-secondary">
                {displayLogoUrl ? (
                  <Image
                    src={displayLogoUrl}
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
                className={`button text-inverse inline-flex cursor-pointer justify-center ${
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
    </FormProvider>
  );
};

export default Images;
