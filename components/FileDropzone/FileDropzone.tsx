/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useState, useEffect, FC, Fragment } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useFormContext } from "react-hook-form";

import useImageUploader from "@/hooks/useImageUploader";

import styles from "./FileDropzone.module.scss";
import { useBusinessStore } from "@/scenes/MyBusinessPage/MyBusinessPage";

const MAX_FILES = 3; //file upload limit

const FileDropzone: FC = () => {
  const { business } = useBusinessStore();
  const { setValue } = useFormContext();

  let currentImages: any = [];
  if (business?.sample_images !== "")
    currentImages = business?.sample_images?.split(",") || [];
  const [myFiles, setMyFiles] = useState(currentImages);
  const [errorMessage, setErrorMessage] = useState("");
  const { url, error, uploadImage, uploading } = useImageUploader();

  useEffect(() => {
    if (url) {
      if (myFiles?.length + 1 <= MAX_FILES) {
        setMyFiles([...myFiles, url]);
        setErrorMessage("");
      } else {
        setErrorMessage(
          "You have reached the max number of allowed images (3)"
        );
      }
    }
    if (error) setErrorMessage(error);
  }, [url, error]);

  useEffect(() => {
    setValue("sample_images", myFiles?.join());
  }, [myFiles]);

  const onDrop = useCallback(
    (acceptedFiles) => {
      acceptedFiles.map(async (file: File) => {
        uploadImage(file, "business_images");
      });
    },
    [myFiles]
  );

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
    fileRejections,
    open,
  } = useDropzone({
    noClick: true,
    noKeyboard: true,
    onDrop,
    accept: "image/jpeg, image/png",
    maxFiles: MAX_FILES,
  });

  const buildContainerStyles = () => {
    let build = `${styles.baseStyle}`;
    if (isDragActive) build += ` ${styles.activeStyle}`;
    if (isDragAccept) build += ` ${styles.acceptStyle}`;
    if (isDragReject) build += ` ${styles.rejectStyle}`;

    return build;
  };

  const removeFile = (file: any) => () => {
    let filtered = myFiles.filter((item: any) => item !== file);

    setMyFiles(filtered);
    setErrorMessage("");
  };

  const removeAll = () => {
    setMyFiles([]);
    setErrorMessage("");
  };

  const files = myFiles?.map((file: any, index: any) => {
    if (file == "") return null;
    return (
      <Fragment key={index}>
        <div key={index} className="relative inline-flex p-1">
          <div className="relative aspect-video h-10 overflow-hidden rounded-md border-[.5px] border-primary ">
            <Image
              src={file}
              objectFit="cover"
              alt="sample image"
              layout="fill"
            />
          </div>
          <button
            type="button"
            onClick={removeFile(file)}
            className="absolute -top-2 -right-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6 text-red-500"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </Fragment>
    );
  });

  useEffect(
    () => () => {
      files?.forEach((file: any) => URL.revokeObjectURL(file.preview));
    },
    [myFiles]
  );

  return (
    <>
      <div {...getRootProps()} className={buildContainerStyles()}>
        <svg
          className="mx-auto h-12 w-12 text-gray-400"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 48 48"
          aria-hidden="true"
        >
          <path
            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <input {...getInputProps()} />
        <p className="text-gray-500 lg:text-base">
          Upload up to 3 images to showcase your services to customers.
        </p>
        <button
          type="button"
          color="secondary"
          disabled={uploading}
          onClick={open}
          className="button text withIcon mt-6 lg:mt-10"
        >
          Click to upload images
        </button>
      </div>

      {files?.length > 0 && (
        <>
          <aside className="flex flex-col items-center gap-2">
            <div className="flex flex-wrap gap-4">{files}</div>

            <button
              type="button"
              onClick={removeAll}
              className={`button text withIcon ml-5 text-sm text-red-600`}
            >
              <FontAwesomeIcon icon={faTrash} />
              Remove All
            </button>
          </aside>
        </>
      )}
      {(fileRejections.length !== 0 || errorMessage) && (
        <aside>
          <p className="text-sm font-medium text-gray-500 underline">
            {errorMessage}
          </p>
        </aside>
      )}
    </>
  );
};

export default FileDropzone;
