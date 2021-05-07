import React, { useState } from "react";

const useImageUploader = () => {
  const [url, setUrl] = useState(null);
  const [error, setError] = useState(null);

  const uploadImage = (file, preset) => {
    if (!file) return;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = async () => {
      try {
        const res = await fetch("api/image-upload", {
          method: "POST",
          body: JSON.stringify({ data: reader.result, preset: preset }),
          headers: { "Content-type": "application/json" },
        });
        console.log({ res });
        if (!res.ok) throw new Error("HTTP status " + res.status);
        else {
          const resJson = await res.json();
          setUrl(resJson.imageUrl);
        }
      } catch (error) {
        setError(error);
      }
    };
  };

  return [url, error, uploadImage];
};

export default useImageUploader;
