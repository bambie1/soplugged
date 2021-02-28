import React, { useCallback, useState, useEffect, useMemo } from "react";
import { useDropzone } from "react-dropzone";
import { Button, Typography } from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "16px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#4e3505",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#4e3505",
  outline: "none",
  transition: "border .24s ease-in-out",
  marginBottom: "8px",
  cursor: "pointer",
};

const thumbsContainer = {
  display: "flex",
  flexWrap: "wrap",
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  width: 50,
  height: 50,
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const img = {
  display: "block",
  width: "auto",
  height: "100%",
};

const closeBtn = {
  alignSelf: "start",
  marginRight: "8px",
};

const activeStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};
const MAX_FILES = 3; //file upload limit

const FileDropzone = ({ fbUrls, setFiles }) => {
  const [myFiles, setMyFiles] = useState(fbUrls);
  const [fileError, setFileError] = useState(false);

  const onDrop = useCallback(
    (acceptedFiles) => {
      let modFiles = acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );
      if (myFiles.length + acceptedFiles.length <= MAX_FILES) {
        setMyFiles([...myFiles, ...modFiles]);
        setFileError(false);
        setFiles([...myFiles, ...modFiles]);
      } else {
        setFileError(true);
      }
    },
    [myFiles, setFiles]
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
    onDrop,
    accept: "image/jpeg, image/png",
    maxFiles: MAX_FILES,
    noClick: true,
    noKeyboard: true,
  });
  const removeFile = (file) => () => {
    let filtered = myFiles.filter(function (item) {
      if (typeof file === "string") return item !== file;
      else return item.name !== file.name;
    });
    setMyFiles(filtered);
  };
  const removeAll = () => {
    setMyFiles([]);
  };

  const files = myFiles.map((file, index) => (
    <React.Fragment key={index}>
      <div style={thumb} key={index}>
        <div style={thumbInner}>
          <img
            src={typeof file === "string" ? file : file.preview}
            style={img}
            alt=""
          />
        </div>
      </div>
      <button type="button" onClick={removeFile(file)} style={closeBtn}>
        x
      </button>
    </React.Fragment>
  ));

  useEffect(
    () => () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );

  return (
    <>
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <Typography variant="body2">
          Upload up to 3 images to showcase your services to customers.
        </Typography>
        <br></br>
        <Button
          variant="contained"
          color="default"
          startIcon={<CloudUploadIcon />}
          onClick={open}
        >
          Click to upload images
        </Button>
      </div>

      {files.length > 0 && (
        <>
          <aside style={thumbsContainer}>
            {files.length !== 0 && files}
            <Button
              type="button"
              onClick={removeAll}
              style={{ alignSelf: "center", marginLeft: "8px" }}
              variant="contained"
              size="small"
            >
              Remove All
            </Button>
          </aside>
        </>
      )}
      {(fileRejections.length !== 0 || fileError) && (
        <aside>
          <Typography variant="body2" color="error">
            Error: You can only upload images, and a max of 3 images
          </Typography>
        </aside>
      )}
    </>
  );
};

export default FileDropzone;
