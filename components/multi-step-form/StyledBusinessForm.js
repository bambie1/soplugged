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
import BusinessTermsConditions from "./BusinessTermsConditions";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  styledPage: {
    textAlign: "center",
    display: "flex",
    height: "100%",
    flexDirection: "column",
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

const StyledBusinessForm = ({ myBusiness, token }) => {
  const classes = useStyles();
  const router = useRouter();
  const { formSteps, currentStep, setCurrentStep, formWasChanged } =
    useBusinessFormContext();
  const [dialogOpen, setDialogOpen] = useState(false);

  const [slug, setSlug] = useState(myBusiness?.slug || "");
  const [unsavedAlertOpen, setUnsavedAlertOpen] = useState(false);
  const theme = useTheme();
  const laptopScreen = useMediaQuery(theme.breakpoints.up("md"));
  const [termsAccepted, setTermsAccepted] = useState(!!myBusiness);

  const handleClose = () => {
    setUnsavedAlertOpen(false);
  };

  const handleStepClick = async (step) => {
    setCurrentStep(step.number);
    setDialogOpen(true);
  };

  // check for value change before leaving page
  const handlePageExit = () => {
    if (formWasChanged) {
      setUnsavedAlertOpen(true);
    } else router.push(`/business/${slug}`);
  };

  return (
    <>
      <div className={classes.styledPage}>
        <Grid container>
          <Grid item xs={12} md={5}>
            <div className={classes.intro}>
              <Image src="/images/office_icon.svg" width={70} height={70} />
              {myBusiness?.business_name ? (
                <>
                  <Typography
                    variant="h4"
                    style={{ marginTop: "16px" }}
                    gutterBottom={true}
                  >
                    Welcome back,{" "}
                    {myBusiness.creator?.full_name?.split(" ")[0] || "Boss"}
                  </Typography>
                  <Typography>Update your business info as you wish</Typography>
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
                    handleClick={() => handleStepClick(step)}
                    active={currentStep == step.number}
                  />
                ))}
              </div>
            </div>
          </Grid>
          {laptopScreen ? (
            <Grid item md={7} className={classes.grid}>
              <div className={classes.form}>
                <MultiStepBusinessForm token={token} />
              </div>
            </Grid>
          ) : (
            <StepFormDialog
              opened={dialogOpen}
              handleClose={() => setDialogOpen(false)}
              token={token}
            />
          )}
        </Grid>
        <Button
          variant="outlined"
          disabled={!myBusiness}
          color="secondary"
          onClick={handlePageExit}
          style={{ alignSelf: "center" }}
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
              You have some unsaved changes. Want to save before leaving?
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
              }}
              color="secondary"
              autoFocus
            >
              Yes
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      {!termsAccepted && (
        <BusinessTermsConditions handleAgree={() => setTermsAccepted(true)} />
      )}
    </>
  );
};

export default StyledBusinessForm;
