import React, { useState, useRef } from "react";
import FormikTextField from "./FormikTextField";
import { useFormikContext } from "formik";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import { useField } from "formik";
import "react-quill/dist/quill.snow.css";
import { Typography, InputAdornment } from "@material/mui-components";

const BusinessFormStep3 = () => {
  const { setFieldValue, values } = useFormikContext();
  const [content, setContent] = useState(values.businessDescription);
  const [field, meta] = useField("businessDescription");
  var toolbarOptions = [
    ["bold", "italic", "underline", "strike"],
    [{ list: "ordered" }, { list: "bullet" }],
  ];

  const handleUpdate = (newContent) => {
    // console.log({ newContent });
    console.log({ newContent });
    setContent(newContent);
    setFieldValue("businessDescription", newContent);
  };

  return (
    <div>
      <ReactQuill
        placeholder="Enter a description for your business (the more, the better)"
        value={content}
        onChange={handleUpdate}
        modules={{
          clipboard: {
            matchVisual: false,
          },
          toolbar: toolbarOptions,
        }}
      />
      {meta && meta.error && (
        <Typography color="error" align="center" variant="caption">
          {meta.error}
        </Typography>
      )}

      <FormikTextField
        name="businessUrl"
        label="Business Website"
        helperText="Optional"
      />
      <FormikTextField
        name="igHandle"
        label="IG Handle"
        helperText="Optional"
        InputProps={{
          startAdornment: <InputAdornment position="start">@</InputAdornment>,
        }}
      />
    </div>
  );
};

export default BusinessFormStep3;
