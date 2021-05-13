import Image from "next/image";
import React, { useState } from "react";
import {
  Typography,
  makeStyles,
  useMediaQuery,
  Grid,
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@material/mui-components";
import { useTheme } from "@material-ui/core/styles";
import FormStepButton from "./FormStepButton";
import StepFormDialog from "./StepFormDialog";
import MultiStepBusinessForm from "./MultiStepBusinessForm";
import { useBusinessFormContext } from "@contexts/businessFormContext";
import { Form, Formik } from "formik";
import validationSchema from "./validationSchema";
import BusinessTermsConditions from "./BusinessTermsConditions";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  styledPage: {
    textAlign: "center",
    display: "flex",
    height: "100%",
  },
  grid: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "8px",
    background: "rgb(255,255,255)",
    background:
      "radial-gradient(circle, rgba(255,255,255,1) 40%, rgba(251,251,251,1) 100%)",
    borderRadius: "4px",
  },
  intro: {
    padding: "16px 5px",
    maxWidth: "500px",
    margin: "auto",
  },
  form: {
    padding: "16px 5px",
    width: "100%",
  },
  stepsContainer: {
    padding: theme.spacing(2),
    backgroundColor: "#fbfbfb",
    marginTop: "16px",
  },
  stepsContainerRow: {
    display: "flex",
    marginTop: "16px",
  },
}));

const StyledBusinessForm = ({ myBusiness, submitHandler }) => {
  const classes = useStyles();
  const router = useRouter();
  const {
    formSteps,
    currentStep,
    setCurrentStep,
    markStepComplete,
    markStepIncomplete,
    completedSteps,
    markStepUnlocked,
  } = useBusinessFormContext();
  const [dialogOpen, setDialogOpen] = useState(false);
  const initialValues = {
    businessName: myBusiness?.business_name || "",
    businessCategory: myBusiness?.category || "",
    businessDescription: myBusiness?.business_description || "",
    businessLocation: myBusiness?.business_location || "",
    businessUrl: myBusiness?.business_url || "",
    canadaWide: !myBusiness?.fixed_to_one_location || false,
    igHandle: myBusiness?.ig_handle || "",
    logoUrl: myBusiness?.logo_url || "",
    streetAddress: myBusiness?.street_address || "",
    sampleImages: myBusiness?.sample_images || "",
    phoneNumber: myBusiness?.phone_number || "",
  };
  const [submittedValues, setSubmittedValues] = useState(initialValues);
  const [slug, setSlug] = useState(myBusiness?.slug || "");
  const [unsavedAlertOpen, setUnsavedAlertOpen] = useState(false);
  const theme = useTheme();
  const laptopScreen = useMediaQuery(theme.breakpoints.up("md"));
  const [termsAccepted, setTermsAccepted] = useState(!!myBusiness);
  const [submitAll, setSubmitAll] = useState(false);

  const handleClose = () => {
    setUnsavedAlertOpen(false);
  };
  //formik props
  const isLastStep = currentStep === formSteps.length - 1;

  const handleSubmit = async (values, helpers) => {
    let errors = await helpers.validateForm();
    if (Object.keys(errors).length !== 0) return false;

    if (isLastStep || submitAll) await formikSubmit(values, helpers);
    else {
      let currentFields = formSteps[currentStep].fieldNames;
      if (currentFields) {
        let allFieldsComplete = true;
        for (let i = 0; i < currentFields.length; i++) {
          if (values[currentFields[i]] == "") {
            allFieldsComplete = false;
          }
        }
        markStepUnlocked(currentStep + 1);
        allFieldsComplete
          ? markStepComplete(currentStep)
          : markStepIncomplete(currentStep);
      }

      setCurrentStep((s) => s + 1);
    }
    return true;
  };
  const formikSubmit = async (values, helpers) => {
    if (termsAccepted) {
      setSubmittedValues(values);
      let newSlug = await submitHandler(values);
      setSlug(newSlug);
    } else alert("Something went wrong. Please refresh page");
  };

  const handleStepClick = async (step, submitForm) => {
    if (step.number > currentStep) {
      for (let i = currentStep; i < step.number; i++) {
        await submitForm();
      }
    } else {
      setCurrentStep(step.number);
    }
    setDialogOpen(true);
  };

  // check for value change before leaving page
  const handlePageExit = (values) => {
    if (JSON.stringify(values) === JSON.stringify(submittedValues)) {
      router.push(`/business/${slug}`);
    } else setUnsavedAlertOpen(true);
  };

  return (
    <>
      <div className={classes.styledPage}>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema[currentStep]}
        >
          {({ submitForm, values }) => {
            return (
              <Form className={classes.form}>
                <Grid container>
                  <Grid item xs={12} md={5}>
                    <div className={classes.intro}>
                      <Image
                        src="/images/office_icon.svg"
                        width={70}
                        height={70}
                      />
                      {myBusiness?.business_name ? (
                        <>
                          <Typography
                            variant="h4"
                            style={{ marginTop: "16px" }}
                            gutterBottom={true}
                          >
                            Welcome back,{" "}
                            {myBusiness.creator?.full_name?.split(" ")[0] ||
                              "Boss"}
                          </Typography>
                          <Typography>
                            Update your business info as you wish
                          </Typography>
                        </>
                      ) : (
                        <Typography variant="h4" style={{ marginTop: "16px" }}>
                          Hi Boss,
                          <br></br> Let's set up your<br></br> business page
                        </Typography>
                      )}

                      <div className={classes.stepsContainer}>
                        {formSteps.map((step) => (
                          <FormStepButton
                            stepInfo={step}
                            key={step.number}
                            handleClick={() =>
                              handleStepClick(step, submitForm)
                            }
                            active={currentStep == step.number}
                            completed={completedSteps.includes(step.number)}
                          />
                        ))}
                      </div>
                    </div>
                  </Grid>
                  {laptopScreen ? (
                    <Grid item md={7} className={classes.grid}>
                      <div className={classes.form}>
                        <MultiStepBusinessForm handleSubmit={handleSubmit} />
                      </div>
                    </Grid>
                  ) : (
                    <StepFormDialog
                      opened={dialogOpen}
                      handleClose={() => setDialogOpen(false)}
                      handleSubmit={() => submitForm()}
                    />
                  )}
                </Grid>
                <Button
                  variant="outlined"
                  disabled={!myBusiness}
                  color="secondary"
                  onClick={() => handlePageExit(values)}
                >
                  Go to business page
                </Button>
                <Dialog
                  open={unsavedAlertOpen}
                  onClose={handleClose}
                  aria-describedby="unsaved-changes-alert"
                >
                  <DialogContent>
                    <DialogContentText id="unsaved-changes-alert">
                      You have some unsaved changes. Want to save before
                      leaving?
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button
                      onClick={() => {
                        setUnsavedAlertOpen(false);
                        router.push(`/business/${slug}`);
                      }}
                      color="secondary"
                    >
                      No, Discard Changes
                    </Button>
                    <Button
                      onClick={() => {
                        setUnsavedAlertOpen(false);
                        setSubmitAll(true);
                        submitForm();
                      }}
                      color="secondary"
                      autoFocus
                    >
                      Yes
                    </Button>
                  </DialogActions>
                </Dialog>
              </Form>
            );
          }}
        </Formik>
      </div>
      {!termsAccepted && (
        <BusinessTermsConditions handleAgree={() => setTermsAccepted(true)} />
      )}
    </>
  );
};

export default StyledBusinessForm;
