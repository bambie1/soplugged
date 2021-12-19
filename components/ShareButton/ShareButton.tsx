import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShareAlt,
  faTimes,
  faCopy as faCopyFilled,
} from "@fortawesome/free-solid-svg-icons";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import Dialog from "@reach/dialog";

import { Input } from "@/styled/Input";

import styles from "./ShareButton.module.scss";

const ShareButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [textCopied, setTextCopied] = useState(false);
  const [businessUrl, setBusinessUrl] = useState("");

  useEffect(() => {
    setBusinessUrl(window.location.href);
  }, []);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const copyUrl = () => {
    navigator.clipboard.writeText(businessUrl);
    setTextCopied(true);

    setTimeout(() => setTextCopied(false), 2000);
  };

  const renderCopyButton = () => {
    if (textCopied)
      return (
        <button className="button text withIcon" onClick={copyUrl}>
          <FontAwesomeIcon icon={faCopyFilled} />
          Copied!
        </button>
      );

    return (
      <button className="button text withIcon" onClick={copyUrl}>
        <FontAwesomeIcon icon={faCopy} />
        Copy Link
      </button>
    );
  };

  return (
    <>
      <button className="button text withIcon" onClick={toggleModal}>
        <FontAwesomeIcon icon={faShareAlt} />
        Share Business
      </button>

      <Dialog
        isOpen={isModalOpen}
        aria-label="Share modal"
        onDismiss={toggleModal}
        className={styles.dialog}
      >
        <button
          title="Close modal"
          onClick={toggleModal}
          className={`${styles.iconButton} ${styles.close}`}
        >
          <FontAwesomeIcon icon={faTimes} onClick={toggleModal} />
        </button>
        <div className={styles.content}>
          <Input disabled label="" value={businessUrl} />

          {renderCopyButton()}
        </div>
      </Dialog>
    </>
  );
};

export default ShareButton;
