import dynamic from "next/dynamic";
import { useState } from "react";
import { useFormikContext, useField } from "formik";

import styles from "../BusinessForm.module.scss";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>...</p>,
});

const toolbarOptions = [
  ["bold", "italic", "underline"],
  [{ list: "ordered" }, { list: "bullet" }],
];

const Description = () => {
  const { setFieldValue, values } = useFormikContext<any>();
  const [content, setContent] = useState(values.business_description);
  const [field, meta] = useField("business_description");

  const handleUpdate = (newContent: string) => {
    setContent(newContent);
    setFieldValue("business_description", newContent);
  };

  return (
    <>
      <section className={styles.form}>
        <div className="quillFormGroup">
          <label
            htmlFor="business_description"
            className={styles.descriptionLabel}
          >
            Business Description
          </label>

          <ReactQuill
            placeholder="Enter a description for your business (the more, the better)"
            value={content}
            onChange={handleUpdate}
            id="business_description"
            modules={{
              clipboard: {
                matchVisual: false,
              },
              toolbar: toolbarOptions,
            }}
          />
          {meta && meta.error && <p className="error">{meta.error}</p>}
        </div>
      </section>
    </>
  );
};

export default Description;
