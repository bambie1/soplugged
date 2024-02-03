/* eslint-disable react-hooks/exhaustive-deps */
import { faTrash, faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import Image from "next/image";
import { Fragment, useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

import useImageUploader from "@/utils/useImageUploader";

const MAX_FILES = 3; //file upload limit

const ImageUpload = ({ setImages }: { images: any; setImages: any }) => {
  const [myFiles, setMyFiles] = useState([]);
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
    setImages(myFiles?.join());
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
    // @ts-ignore
    accept: "image/jpeg, image/png",
    maxFiles: MAX_FILES,
  });

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
            className="absolute -right-2 -top-2"
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
      <div
        {...getRootProps()}
        className={classNames(
          "mb-2 flex flex-1 flex-col items-center rounded-xl border border-primary p-8",
          {
            "border-green-500": isDragAccept,
            "border-red-500": isDragReject,
          }
        )}
      >
        <input {...getInputProps()} />
        <p className="">
          Upload up to 3 images to showcase your services/products
        </p>
        <button
          type="button"
          color="secondary"
          disabled={uploading}
          onClick={open}
          className="button text withIcon mt-6"
        >
          <FontAwesomeIcon icon={faUpload} />
          Click to upload images
        </button>
      </div>

      {files?.length > 0 && (
        <>
          <aside className="flex flex-wrap items-center gap-4">
            {files}

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

export default ImageUpload;
