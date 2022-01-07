import dynamic from "next/dynamic";
import { useState } from "react";
import { useFormikContext, useField } from "formik";

import styles from "../BusinessForm.module.scss";
import "react-quill/dist/quill.snow.css";
import Skeleton from "@/components/skeletons/Skeleton";

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <Skeleton type="box" />,
});

const toolbarOptions = [
  ["bold", "italic", "underline"],
  [{ list: "ordered" }, { list: "bullet" }],
];

const Description = () => {
  const { setFieldValue, values } = useFormikContext<any>();
  const [content, setContent] = useState(values.business_description || "");
  const [_, meta] = useField("business_description");

  const isError = meta && meta.error;

  const handleUpdate = (content: any) => {
    if (typeof content === "string") {
      setContent(
        content
          .replace(/<h1>/, "<p>")
          .replace(/<\/h1>/, "</p>")
          .replace(/<h2>/, "<p>")
          .replace(/<\/h2>/, "</p>")
          .replace(/<h3>/, "<p>")
          .replace(/<\/h3>/, "</p>")
          .replace(/<h4>/, "<p>")
          .replace(/<\/h4>/, "</p>")
          .replace(/<h5>/, "<p>")
          .replace(/<\/h5>/, "</p>")
          .replace(/<h6>/, "<p>")
          .replace(/<\/h6>/, "</p>")
      );
      setFieldValue("business_description", content);
    }
  };

  return (
    <>
      <section className={styles.form}>
        <div className="quillFormGroup">
          <label htmlFor="business_description" className={isError && "error"}>
            Business Description
          </label>

          <ReactQuill
            placeholder="Enter a description for your business (the lengthier, the better)"
            value={content}
            onChange={handleUpdate}
            id="business_description"
            className={isError && "quillError"}
            modules={{
              clipboard: {
                matchVisual: false,
              },
              toolbar: toolbarOptions,
            }}
          />
          {isError && <p className="error">{meta.error}</p>}
        </div>
      </section>
    </>
  );
};

export default Description;
