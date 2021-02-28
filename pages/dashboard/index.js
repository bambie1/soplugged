import React, { useState } from "react";
import { Typography, Paper, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DashboardLayout from "../../components/DashboardLayout";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "16px 3px",
    marginBottom: "16px",
  },
  noBusiness: {
    backgroundColor: theme.palette.secondary.light,
    padding: "16px",
    "& > *": {
      margin: "8px 0px",
    },
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  const hasBusiness = false;

  return (
    <>
      <DashboardLayout>
        <Paper>
          {hasBusiness ? (
            <div className={classes.paper}>
              <Typography>Hi, Benaiah Barango</Typography>
              <Typography></Typography>
              <Link href="/my-business">
                <a>
                  <Button variant="contained" color="secondary">
                    Edit My Business
                  </Button>
                </a>
              </Link>
            </div>
          ) : (
            <div className={classes.noBusiness}>
              <Typography variant="h6" component="h2">
                Want to add your business to SoPlugged?
              </Typography>
              <Typography>
                You can do so in under 5 minutes! Click the button below, and
                follow our easy guide
              </Typography>
              <Button variant="contained" color="secondary">
                Register Business
              </Button>
            </div>
          )}
        </Paper>
      </DashboardLayout>
    </>
  );
};

export default Dashboard;
