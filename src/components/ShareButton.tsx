import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { faCopy as faCopyFilled } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { Button } from "@/styled/Button";

const ShareButton = () => {
  const [textCopied, setTextCopied] = useState(false);
  const [businessUrl, setBusinessUrl] = useState("");

  useEffect(() => {
    setBusinessUrl(window.location.href);
  }, []);

  const copyUrl = () => {
    navigator.clipboard.writeText(businessUrl);
    setTextCopied(true);
    toast.success("Link copied successfully");

    setTimeout(() => setTextCopied(false), 2000);
  };

  return (
    <>
      <Button onClick={copyUrl} disabled={textCopied} variant="text">
        {textCopied ? "Copied!" : "Copy Link"}
        <FontAwesomeIcon
          icon={textCopied ? faCopyFilled : faCopy}
          className="ml-3"
        />
      </Button>
    </>
  );
};

export default ShareButton;
