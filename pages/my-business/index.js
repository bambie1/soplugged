import React, { useState } from "react";
import BusinessInfoForm from "../../components/BusinessInfoForm";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Head from "next/head";

const useStyles = makeStyles((theme) => ({
  page: {
    padding: theme.spacing(10, 1, 2),
    minHeight: "85vh",
  },
}));

const EditBusiness = ({ session }) => {
  const classes = useStyles();
  const [saving, setSaving] = useState(false);

  // if (currentUser) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Online platform connecting you to black-owned businesses across Canada. If you're an entrepreneur, register your business to be featured on our platform or join our mailing list to stay plugged in."
        />
        <title>My Business | SoPlugged</title>
      </Head>
      <Container maxWidth="lg" className={classes.page}>
        <BusinessInfoForm submitHandler={() => console.log("submit")} />
      </Container>
      {saving && (
        <div
          className="backdrop"
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <div style={{ margin: "auto", textAlign: "center", width: "150px" }}>
            <div className="lds-grid">
              {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((x) => (
                <div key={x}></div>
              ))}
            </div>
            <Typography style={{ color: "white" }}>
              Loading your Business Card
            </Typography>
          </div>
        </div>
      )}
    </>
  );
};

export default EditBusiness;
