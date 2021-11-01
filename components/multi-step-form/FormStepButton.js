import React from "react";
import {
  makeStyles,
  Card,
  CardActionArea,
  CardContent,
  Box,
  Tooltip,
} from "@material/mui-components";
import { useBusinessFormContext } from "@contexts/businessFormContext";
import { CheckCircleOutlineIcon, LockOutlinedIcon } from "@material/mui-icons";

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

  inactive: {
    opacity: "0.6",
  },

  completedStep: {
    border: `1px solid #93aacd`,
    color: "#93aacd",
    "& .MuiCard-root": {
      backgroundColor: "rgb(147 170 205 / 68%)",
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
      backgroundColor: "rgb(147 170 205 / 15%)",
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

const FormStepButton = ({ stepInfo, handleClick, active }) => {
  const classes = useStyles();
  const { completedSteps, unlockedSteps, formWasChanged } =
    useBusinessFormContext();
  let unlocked = unlockedSteps.includes(stepInfo.number);
  let complete = completedSteps.includes(stepInfo.number);
  let inactive = formWasChanged && !active;

  return (
    <Tooltip
      title={
        inactive &&
        "Form is active, please use 'Next' and 'Back' buttons to navigate"
      }
      disableHoverListener={!inactive}
      disableFocusListener={!inactive}
      disableTouchListener={!inactive}
    >
      <Box
        position="relative"
        key={stepInfo.title}
        onClick={unlocked && !inactive ? handleClick : null}
        className={`${classes.step} ${active ? classes.activeStep : ""} ${
          unlocked ? classes.unlocked : ""
        } ${complete ? classes.completedStep : ""} ${
          inactive ? classes.inactive : ""
        }`}
      >
        <div className="iconDiv">
          <CheckCircleOutlineIcon className="checkIcon" fontSize="small" />
          <span className="stepNumber">{stepInfo.number + 1}</span>
          <LockOutlinedIcon className="lockIcon" fontSize="small" />
        </div>

        <Card color="inherit" raised={active}>
          <CardActionArea disableRipple={!unlocked || inactive}>
            <CardContent>
              <h6 style={{ fontSize: "1rem" }}>{stepInfo.title}</h6>
              <span className="noMargin">{stepInfo.text}</span>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </Tooltip>
  );
};

export default FormStepButton;
