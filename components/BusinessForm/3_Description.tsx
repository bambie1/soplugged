import dynamic from "next/dynamic";
import { useState } from "react";

import "react-quill/dist/quill.snow.css";
import { useBusinessStore } from "@/scenes/MyBusinessPage/MyBusinessPage";
import { BusinessForm } from "layouts/BusinessForm";
import { Button } from "@/styled/Button";

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
});

const toolbarOptions = [
  ["bold", "italic", "underline"],
  [{ list: "ordered" }, { list: "bullet" }],
];

const Description = () => {
  const { business, handleNextStep } = useBusinessStore();
  const [content, setContent] = useState(business?.business_description || "");

  const isError = false;

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
          .replace(/style="[^"]*"/g, "")
      );
      // setFieldValue("business_description", content);
    }
  };

  const handleConfirm = () => {
    handleNextStep();
  };

  return (
    <BusinessForm
      title="Description"
      subtitle="Elaborate on the services you provide"
    >
      <form className="flex max-w-full flex-col gap-2">
        <label
          htmlFor="business_description"
          className={`text-sm font-medium uppercase lg:text-base ${
            isError && "text-red-500"
          }`}
        >
          Business Description
        </label>

        <ReactQuill
          placeholder="Enter a description for your business (the lengthier, the better)"
          value={content}
          onChange={handleUpdate}
          id="business_description"
          className={`${isError && "quillError"} flex max-w-full`}
          modules={{
            clipboard: {
              matchVisual: false,
            },
            toolbar: toolbarOptions,
          }}
        />
        {isError && (
          <p className="text-xs text-red-500 lg:text-sm ">Error message</p>
        )}

        <Button onClick={handleConfirm}>Next</Button>
      </form>
    </BusinessForm>
  );
};

export default Description;
