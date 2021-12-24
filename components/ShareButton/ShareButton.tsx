import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy as faCopyFilled } from "@fortawesome/free-solid-svg-icons";
import { faCopy } from "@fortawesome/free-regular-svg-icons";

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
      <button className="button text withIcon" onClick={copyUrl}>
        <FontAwesomeIcon icon={textCopied ? faCopyFilled : faCopy} />
        {textCopied ? "Copied!" : "Copy Link"}
      </button>
    </>
  );
};

export default ShareButton;
