import React from "react";
import {
  makeStyles,
  Button,
  Box,
  Typography,
  useMediaQuery,
} from "@material/mui-components";
import { useTheme } from "@material-ui/core/styles";
import { useBusinessFormContext } from "@contexts/businessFormContext";
import Image from "next/image";
import { Form, Formik } from "formik";
import validationSchema from "./validationSchema";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "8px",
    [theme.breakpoints.up("sm")]: {
      padding: "16px",
    },
  },
  decorImage: {
    textAlign: "center",
    opacity: "0.5",
    borderTop: `0.5px solid ${theme.palette.primary.main}`,
    maxWidth: "450px",
    margin: "auto",
  },
  form: {
    width: "700px",
    maxWidth: "100%",
    margin: "0px auto",
  },
  buttonGroup: {
    position: "absolute",
    bottom: "0",
    left: "0",
    width: "100%",
    background: "#fffaf2",
    borderTop: `1px solid ${theme.palette.primary.main}`,
    display: "flex",
    justifyContent: "space-between",
    zIndex: "1",
    "& > *": {
      margin: "8px",
    },
  },
  laptopBtnGroup: {
    marginTop: "20px",
  },
  buttons: {
    margin: "0px 8px",
  },
}));

const FormikStepper = ({ children, ...props }) => {
  const theme = useTheme();
  const bigScreen = useMediaQuery(theme.breakpoints.up("md"));
  const classes = useStyles(bigScreen);
  const steps = React.Children.toArray(children);
  const { formSteps, currentStep, setCurrentStep } = useBusinessFormContext();
  const currentChild = steps[currentStep];

  const handleBack = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };
  const handleSubmit = async (values, helpers) => {
    if (currentStep === steps.length - 1) {
      await props.onSubmit(values, helpers);
    } else {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  return (
    <Formik
      {...props}
      validationSchema={validationSchema[currentStep]}
      onSubmit={handleSubmit}
    >
      <Form className={classes.form}>
        <Box my={1}>{currentChild}</Box>

        <div
          className={!bigScreen ? classes.buttonGroup : classes.laptopBtnGroup}
        >
          <Button
            disabled={currentStep === 0}
            color="secondary"
            variant="outlined"
            onClick={handleBack}
            className={bigScreen ? classes.buttons : undefined}
          >
            Back
          </Button>
          {!bigScreen && (
            <Typography>{`Step ${currentStep + 1} / ${
              formSteps.length
            }`}</Typography>
          )}

          <Button
            variant="contained"
            color="secondary"
            type="submit"
            className={bigScreen ? classes.buttons : ""}
          >
            {currentStep === steps.length - 1 ? "Submit" : "Next"}
          </Button>
        </div>

        {formSteps[currentStep].bottomImage && !bigScreen && (
          <div className={classes.decorImage}>
            <Image
              src={formSteps[currentStep].bottomImage}
              width={400}
              height={400}
              alt="Decorative illustration"
            />
          </div>
        )}
      </Form>
    </Formik>
  );
};

export default FormikStepper;
