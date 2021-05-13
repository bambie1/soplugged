import React from "react";
import {
  Typography,
  makeStyles,
  Card,
  CardActionArea,
  CardContent,
  Box,
} from "@material/mui-components";
import { useBusinessFormContext } from "@contexts/businessFormContext";
import { CheckCircleOutlineIcon, LockOutlinedIcon } from "@material/mui-icons";
import { useFormikContext } from "formik";

const useStyles = makeStyles((theme) => ({
  step: {
    marginBottom: "8px",
    opacity: "0.6",
    borderRadius: "4px",

    "& .iconDiv": {
      position: "absolute",
      left: "-10px",
      top: "20px",
      width: "20px",
      height: "20px",
      lineHeight: "1.3",
      fontSize: "0.8rem",
      color: theme.palette.secondary.main,
      backgroundColor: "white",
      borderRadius: "50%",
      zIndex: "2",
      "& .checkIcon": {
        display: "none",
      },
      "& .stepNumber": {
        display: "none",
      },
    },
  },
  unlocked: {
    opacity: "1",
    border: "1px solid #93aacd",
    "& .iconDiv": {
      border: "1px solid #93aacd",
      "& .checkIcon": {
        display: "none",
      },
      "& .lockIcon": {
        display: "none",
      },
      "& .stepNumber": {
        display: "block",
      },
    },
  },

  completedStep: {
    border: `1px solid #93aacd`,
    color: "#93aacd",
    "& .MuiCard-root": {
      backgroundColor: "rgb(147 170 205 / 41%)",
    },
    "& .iconDiv": {
      border: "none",
      "& .checkIcon": {
        display: "block",
        color: "#93aacd",
        border: "1px solid #93aacd",
        borderRadius: "50%",
      },
      "& .lockIcon": {
        display: "none",
      },
      "& .stepNumber": {
        display: "none",
      },
    },
  },
  activeStep: {
    border: `2px solid ${theme.palette.secondary.main}`,
    "& .MuiCard-root": {
      backgroundColor: "white",
    },
    "& .iconDiv": {
      border: `2px solid ${theme.palette.secondary.main}`,
      "& .checkIcon": {
        display: "none",
      },
      "& .stepNumber": {
        display: "block",
      },
      "& .lockIcon": {
        display: "none",
      },
    },
  },
}));

const FormStepButton = ({ stepInfo, handleClick, active, completed }) => {
  const classes = useStyles();
  const {
    currentStep,
    completedSteps,
    business,
    formSteps,
    unlockedSteps,
  } = useBusinessFormContext();
  let unlocked = true;

  return (
    <Box
      position="relative"
      key={stepInfo.title}
      onClick={unlocked ? handleClick : null}
      className={`${classes.step} ${active && classes.activeStep} ${
        completed && classes.completedStep
      } ${unlocked && classes.unlocked}`}
    >
      <div className="iconDiv">
        <CheckCircleOutlineIcon className="checkIcon" fontSize="small" />
        <span className="stepNumber">{stepInfo.number + 1}</span>
        <LockOutlinedIcon className="lockIcon" fontSize="small" />
      </div>

      <Card color="inherit" raised={active}>
        <CardActionArea disableRipple={!unlocked}>
          <CardContent>
            <Typography gutterBottom variant="h6" style={{ fontSize: "1rem" }}>
              {stepInfo.title}
            </Typography>
            <Typography variant="body2" component="p">
              {stepInfo.text}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default FormStepButton;
