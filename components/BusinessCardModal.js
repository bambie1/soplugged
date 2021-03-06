import React, { useEffect } from "react";
import BusinessCard from "./BusinessCard";

const BusinessCardModal = ({ business, closeModal }) => {
  //hook to prevent body from scrolling while component is mounted
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "unset");
  }, []);

  const handleClose = (e) => {
    if (
      e.target.classList.contains("backdrop") ||
      e.target.classList.contains("close-btn")
    ) {
      closeModal(null);
    }
  };

  return (
    <div className="backdrop" onClick={handleClose}>
      <div className="modal-card">
        <BusinessCard dbObject={business} />
      </div>
      <button
        aria-label="close-modal"
        className="close-btn"
        onClick={(e) => handleClose(e)}
      >
        x
      </button>
    </div>
  );
};

export default BusinessCardModal;
