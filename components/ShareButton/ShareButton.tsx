import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy as faCopyFilled } from "@fortawesome/free-solid-svg-icons";
import { faCopy } from "@fortawesome/free-regular-svg-icons";

import { IconButton } from "@/styled/IconButton";

const ShareButton = () => {
  const [textCopied, setTextCopied] = useState(false);
  const [businessUrl, setBusinessUrl] = useState("");

  useEffect(() => {
    setBusinessUrl(window.location.href);
  }, []);

  const copyUrl = () => {
    navigator.clipboard.writeText(businessUrl);
    setTextCopied(true);

    setTimeout(() => setTextCopied(false), 2000);
  };

  return (
    <>
      <IconButton
        onClick={copyUrl}
        disabled={textCopied}
        title={textCopied ? "Copied!" : "Copy Link"}
        isText
      >
        <FontAwesomeIcon icon={textCopied ? faCopyFilled : faCopy} />
      </IconButton>
    </>
  );
};

export default ShareButton;
