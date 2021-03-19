import React from "react";
import {
  PersonPinIcon,
  FindInPageIcon,
  CloudUploadIcon,
  LanguageIcon,
  CheckIcon,
} from "./mui-components";
import { Typography } from "./mui-components";
import Link from "next/link";

const formStepsArray = [
  {
    num: 1,
    icon: <PersonPinIcon fontSize="large" color="primary" />,
    id: "location",
    text: "Name / Location",
    url: "step1",
  },
  {
    num: 2,
    icon: <FindInPageIcon fontSize="large" color="primary" />,
    id: "description",
    text: "Category / Description",
    url: "step2",
  },
  {
    num: 3,
    icon: <CloudUploadIcon fontSize="large" color="primary" />,
    id: "images",
    text: "Upload Images",
    url: "step3",
  },
  {
    num: 4,
    icon: <LanguageIcon fontSize="large" color="primary" />,
    id: "social-links",
    text: "Social Links",
    url: "step4",
  },
  {
    num: 5,
    icon: <CheckIcon fontSize="large" color="primary" />,
    id: "confirm",
    text: "Review & Confirm",
    url: "review",
  },
];
const BusinessProgressBar = ({ step }) => {
  return (
    <>
      <Typography variant="h5" style={{ textAlign: "center" }}>
        {formStepsArray.filter((x) => x.num === step)[0].text}
      </Typography>
      <ul id="progressbar">
        {formStepsArray.map(({ num, icon, id, text, url }) => (
          <li key={id} id={id} className={num <= step ? "filled" : ""}>
            <Link href={`/edit-business/${url}`}>
              <a>
                <span className="icon-wrapper">{icon}</span>
                <Typography>{text}</Typography>
              </a>
            </Link>
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
