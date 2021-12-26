/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useState, useEffect, FC, Fragment } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faUpload } from "@fortawesome/free-solid-svg-icons";
import { useFormikContext } from "formik";

import useImageUploader from "@/hooks/useImageUploader";

import styles from "./FileDropzone.module.scss";

const MAX_FILES = 3; //file upload limit

const FileDropzone: FC = () => {
  const { setFieldValue, values } = useFormikContext<any>();

  let currentImages: any = [];
  if (values.sample_images !== "")
    currentImages = values.sample_images?.split(",");
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
    setFieldValue("sample_images", myFiles?.join());
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
        <div key={index} className={styles.thumb}>
          <Image src={file} width={40} height={40} alt="sample images" />
          <button
            type="button"
            onClick={removeFile(file)}
            className={styles.removeButton}
          >
            x
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
        <input {...getInputProps()} />
        <p className={styles.uploadText}>
          Upload up to 3 images to showcase your services to customers.
        </p>
        <button
          type="button"
          color="secondary"
          disabled={uploading}
          onClick={open}
          className="button outlined withIcon"
        >
          <FontAwesomeIcon icon={faUpload} />
          Click to upload images
        </button>
      </div>

      {files?.length > 0 && (
        <>
          <aside className={styles.thumbsContainer}>
            {files}

            <button
              type="button"
              onClick={removeAll}
              className={`button text withIcon ${styles.removeAll}`}
            >
              <FontAwesomeIcon icon={faTrash} />
              Remove All
            </button>
          </aside>
        </>
      )}
      {(fileRejections.length !== 0 || errorMessage) && (
        <aside>
          <p className="error">{errorMessage}</p>
        </aside>
      )}
    </>
  );
};

export default FileDropzone;
