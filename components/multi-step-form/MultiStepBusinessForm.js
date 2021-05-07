import React from "react";
import { Typography, useMediaQuery } from "@material/mui-components";
import BusinessFormStep1 from "./BusinessFormStep1";
import BusinessFormStep2 from "./BusinessFormStep2";
import BusinessFormStep3 from "./BusinessFormStep3";
import BusinessFormStep4 from "./BusinessFormStep4";
import { useTheme } from "@material-ui/core/styles";
import { useBusinessFormContext } from "@contexts/businessFormContext";
import FormikStepper from "./FormikStepper";
import BusinessFormReview from "./BusinessFormReview";

const MultiStepBusinessForm = ({ handleSubmit }) => {
  const { formSteps, currentStep } = useBusinessFormContext();
  const theme = useTheme();
  const bigScreen = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      {bigScreen && (
        <>
          <Typography variant="h6" gutterBottom={true} align="center">
            {formSteps[currentStep]?.title}
          </Typography>
          <hr style={{ width: "20%" }}></hr>
        </>
      )}
      <FormikStepper handleSubmit={handleSubmit}>
        <BusinessFormStep1 label="Name / Location" />
        <BusinessFormStep2 label="Category" />
        <BusinessFormStep3 label="Description / Links" />
        <BusinessFormStep4 label="Images" />
        <BusinessFormReview label="Review and Submit" />
      </FormikStepper>
    </>
  );
};

export default MultiStepBusinessForm;
