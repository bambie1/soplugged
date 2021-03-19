import React from "react";
import { makeStyles, Paper, Container, Typography } from "./mui-components";
import BusinessProgressBar from "./BusinessProgressBar";
import Head from "next/head";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "15px",
    marginBottom: "10px",
  },
}));

const MultiStepLayout = ({ children, ...props }) => {
  const classes = useStyles();

  return (
    <>
      <Head>
        <title>My Business | SoPlugged</title>
      </Head>
      <div className="page">
        <br></br>
        <br></br>
        <Container maxWidth="md">
          <BusinessProgressBar {...props} />
          {props.step > 1 && (
            <Link href={`/edit-business/step${props.step - 1}`}>
              <a>
                <Typography>Back</Typography>
              </a>
            </Link>
          )}

          <Paper elevation={3} className={classes.paper}>
            {children}
          </Paper>
        </Container>
      </div>
    </>
  );
};

export default MultiStepLayout;
