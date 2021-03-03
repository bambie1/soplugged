import React, { useState } from "react";
import { Typography, Paper, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DashboardLayout from "../../components/DashboardLayout";
import Link from "next/link";

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
    marginBottom: "8px",
    "& > *": {
      margin: "8px 0px",
    },
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  const hasBusiness = false;
  const hasFavorites = false;

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
              <Link href="/my-business/step2">
                <a>
                  <Button variant="contained" color="secondary">
                    Register Business
                  </Button>
                </a>
              </Link>
            </div>
          )}
        </Paper>
        <div id="favorites">
          {hasFavorites ? (
            <div>
              <p>Yes favorites</p>
            </div>
          ) : (
            <div
              className={classes.noBusiness}
              style={{ backgroundColor: "white", border: "1px dashed #cdb693" }}
            >
              <Typography variant="h6" component="h2">
                Favorite Businesses
              </Typography>
              <Typography>
                Doesn't look like you've saved any businesses as favorites yet.
                <br></br> Browse through our directory, and click the 'Heart'
                icon on a business that you'd like to save for later
              </Typography>
              <Link href="/directory">
                <a>
                  <Button variant="contained" color="secondary">
                    Browse businesses
                  </Button>
                </a>
              </Link>
            </div>
          )}
        </div>
      </DashboardLayout>
    </>
  );
};

export default Dashboard;
