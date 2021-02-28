import React from "react";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import FindInPageIcon from "@material-ui/icons/FindInPage";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import LanguageIcon from "@material-ui/icons/Language";
import { Typography } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";

const formStepsArray = [
  {
    num: 1,
    icon: <PersonPinIcon fontSize="large" color="primary" />,
    id: "location",
    text: "Name / Location",
  },
  {
    num: 2,
    icon: <FindInPageIcon fontSize="large" color="primary" />,
    id: "description",
    text: "Category / Description",
  },
  {
    num: 3,
    icon: <CloudUploadIcon fontSize="large" color="primary" />,
    id: "images",
    text: "Upload Images",
  },
  {
    num: 4,
    icon: <LanguageIcon fontSize="large" color="primary" />,
    id: "social-links",
    text: "Social Links",
  },
  {
    num: 5,
    icon: <CheckIcon fontSize="large" color="primary" />,
    id: "confirm",
    text: "Review & Confirm",
  },
];
const BusinessProgressBar = ({ step }) => {
  return (
    <>
      <Typography variant="h5" style={{ textAlign: "center" }}>
        {formStepsArray.filter((x) => x.num === step)[0].text}
      </Typography>
      <ul id="progressbar">
        {formStepsArray.map(({ num, icon, id, text }) => (
          <li key={id} id={id} className={num <= step ? "filled" : ""}>
            <span className="icon-wrapper">{icon}</span>
            <Typography>{text}</Typography>
          </li>
        ))}
      </ul>

      <div className="mobile-step-display">
        <Typography>Step {step} of 5</Typography>
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-valuenow="20"
            style={{ width: `${(step * 100) / 5}%` }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default BusinessProgressBar;
