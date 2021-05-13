import React, { useState } from "react";

const useImageUploader = () => {
  const [url, setUrl] = useState(null);
  const [error, setError] = useState(null);
  const [uploading, setUploading] = useState(false);

  const uploadImage = async (file, preset) => {
    if (!file) return;
    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", preset);

    try {
      const controller = new AbortController();
      setTimeout(() => controller.abort(), 5000);
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/denbpv9kp/upload",
        {
          method: "POST",
          body: formData,
          signal: controller.signal,
        }
      );
      const data = await res.json();
      if (data.error) throw new Error(data.error.message);
      setUrl(data.url);
    } catch (error) {
      if (error.name === "AbortError")
        setError("Request error timeout. Please try again");
      else
        setError("The selected image is too large. Please use a smaller image");
    }
    setUploading(false);
  };

  return [url, error, uploadImage, uploading];
};

export default useImageUploader;
