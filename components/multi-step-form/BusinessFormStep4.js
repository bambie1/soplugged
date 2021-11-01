import React, { useEffect } from "react";
import {
  Avatar,
  Box,
  Button,
  InputLabel,
  makeStyles,
  CircularProgress,
} from "@material/mui-components";
import { CloudUploadIcon } from "@material/mui-icons";
import useImageUploader from "@hooks/useImageUploader";
import { useFormikContext } from "formik";
import FileDropzone from "../FileDropzone";

const useStyles = makeStyles((theme) => ({
  input: { display: "none" },
  logoGroup: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "16px",
    marginTop: "16px",
  },
  button: {
    margin: "0px 8px",
  },
}));

const BusinessFormStep4 = () => {
  const classes = useStyles();
  const { setFieldValue, values } = useFormikContext();
  const [url, error, uploadImage, uploading] = useImageUploader();

  useEffect(() => {
    if (url) setFieldValue("logoUrl", url);
  }, [url]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    uploadImage(file, "business_logos");
  };

  return (
    <>
      <div className={classes.logoGroup}>
        <Box display="flex" mt={1} alignItems="center">
          <InputLabel>Business logo:</InputLabel>
          <input
            accept="image/png, image/jpeg"
            className={classes.input}
            id="business-logo"
            name="logoUrl"
            type="file"
            onChange={handleFileUpload}
            value=""
          />
          <label htmlFor="business-logo">
            <Button
              // variant="outlined"
              color="secondary"
              component="span"
              className={classes.button}
              startIcon={
                uploading ? (
                  <CircularProgress size="1rem" />
                ) : (
                  <CloudUploadIcon />
                )
              }
              disabled={uploading}
            >
              {url || values.logoUrl ? "Change " : "Upload "}
            </Button>
          </label>
          {url && <Avatar src={url} variant="square" />}
          {values.logoUrl && !url && (
            <Avatar src={values.logoUrl} variant="square" />
          )}
        </Box>
        {error && <p className="error">{error}</p>}
      </div>
      <FileDropzone />
    </>
  );
};

export default BusinessFormStep4;
