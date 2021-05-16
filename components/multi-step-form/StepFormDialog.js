import React from "react";
import {
  Dialog,
  DialogContent,
  Slide,
  AppBar,
  Toolbar,
  IconButton,
  makeStyles,
} from "@material/mui-components";
import { CloseIcon } from "@material/mui-icons";
import MultiStepBusinessForm from "./MultiStepBusinessForm";
import { useBusinessFormContext } from "@contexts/businessFormContext";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  dialogContent: {
    paddingTop: "70px",
    paddingBottom: "70px",
    positon: "relative",
    background: "rgb(255,250,242)",
    background:
      "linear-gradient(0deg, rgba(255,250,242,1) 0%, rgba(255,255,255,1) 100%)",
  },
  background: {
    position: "absolute",
    height: "50%",
    width: "100%",
    background: "blue",
    bottom: 0,
    left: 0,
  },
  toolBar: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: "8px",
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const StepFormDialog = ({ opened, handleClose, token }) => {
  const classes = useStyles();
  const { formSteps, currentStep } = useBusinessFormContext();

  return (
    <div>
      <Dialog
        fullScreen
        open={opened}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        TransitionComponent={Transition}
      >
        <AppBar color="inherit" style={{ boxShadow: "none" }}>
          <Toolbar className={classes.toolBar}>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6">
              {formSteps[currentStep]?.title}
            </Typography>
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
              disabled
              style={{ opacity: "0" }}
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <DialogContent className={classes.dialogContent}>
          <MultiStepBusinessForm token={token} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default StepFormDialog;
