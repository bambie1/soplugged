import React, { useState, useRef } from "react";
import FormikTextField from "./FormikTextField";
import { useFormikContext } from "formik";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import { useField } from "formik";
import "react-quill/dist/quill.snow.css";
import { InputAdornment } from "@material/mui-components";
import PhoneNumberTextField from "./PhoneNumberTextField";
import { useBusinessFormContext } from "@contexts/businessFormContext";

const BusinessFormStep3 = () => {
  const { setFieldValue, values } = useFormikContext();
  const [content, setContent] = useState(values.businessDescription);
  const [field, meta] = useField("businessDescription");
  const { setFormWasChanged } = useBusinessFormContext();

  var toolbarOptions = [
    ["bold", "italic", "underline", "strike"],
    [{ list: "ordered" }, { list: "bullet" }],
  ];

  const handleUpdate = (newContent) => {
    setContent(newContent);
    setFieldValue("businessDescription", newContent);
    setFormWasChanged(true);
  };

  return (
    <>
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
      {meta && meta.error && <p className="error">{meta.error}</p>}

      <FormikTextField
        name="businessUrl"
        label="Business Website"
        helperText="Optional"
        type="url"
      />
      <FormikTextField
        name="igHandle"
        label="IG Handle"
        helperText="Optional"
        InputProps={{
          startAdornment: <InputAdornment position="start">@</InputAdornment>,
        }}
      />
      <PhoneNumberTextField />
    </>
  );
};

export default BusinessFormStep3;
