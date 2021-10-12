import React, { useState } from "react";
import { Container, makeStyles } from "@material/mui-components";
import { SEO } from "@components/index";
import nookies from "nookies";
import { verifyIdToken } from "../utils/firebaseAdmin";
import { useBusinessFormContext } from "@contexts/businessFormContext";
import StyledBusinessForm from "@components/multi-step-form/StyledBusinessForm";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(10, 0),
    zIndex: "1",
    background: "white",
    display: "flex",
    placeContent: "center",
  },
}));

const EditBusiness = ({ business, token }) => {
  const classes = useStyles();
  const { setBusiness } = useBusinessFormContext();

  React.useEffect(() => {
    //set business in context
    if (business) setBusiness(business);
  }, [business]);

  if (business !== undefined) {
    return (
      <>
        <SEO
          description="Register your business as an Black entrepreneur, and get featured on our platform, for FREE!"
          title="My Business | SoPlugged"
        />
        <Container maxWidth="lg" className={classes.container}>
          <StyledBusinessForm myBusiness={business} token={token} />
        </Container>
      </>
    );
  } else {
    return <p>No business</p>;
  }
};

export async function getServerSideProps(context) {
  try {
    const cookies = nookies.get(context);
    const token = await verifyIdToken(cookies.token);
    const fetchUrl = `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/business`;

    if (token?.email) {
      const res = await fetch(fetchUrl, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Firebase-Token": cookies.token,
        },
      });
      if (!res.ok) return { props: { business: null, token: cookies.token } };
      const business = await res.json();
      return {
        props: {
          business: business[0] || null,
          token: cookies.token,
        },
      };
    } else throw new Error("No token found");
  } catch (error) {
    return {
      redirect: {
        destination: "/join",
        permanent: false,
      },
    };
  }
}

export default EditBusiness;
