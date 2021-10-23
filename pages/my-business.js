import React from "react";
import { Container, makeStyles } from "@material/mui-components";
import { SEO } from "@components/index";
import nookies from "nookies";
import { verifyIdToken } from "../utils/firebaseAdmin";
import { useBusinessFormContext } from "@contexts/businessFormContext";
import StyledBusinessForm from "@components/multi-step-form/StyledBusinessForm";
import { fetchUserBusiness } from "utils/fetchUserBusiness";

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

  if (!business) return null;
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

    if (!token.email) throw new Error("no email in token");

    const response = await fetchUserBusiness(cookies.token);
    return { props: response };
  } catch (error) {
    console.log({ error });
    return {
      redirect: {
        destination: "/join",
        permanent: true,
      },
    };
  }
}

export default EditBusiness;
