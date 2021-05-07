import React from "react";
import { Button, Container, makeStyles } from "@material/mui-components";
import SEO from "@components/SEO";
import BusinessPage from "@components/BusinessPage";
import { useAuth } from "@contexts/authContext";
import { useSearch } from "@contexts/searchContext";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  page: {
    textAlign: "center",
    paddingTop: "60px",
    minHeight: "80vh",
    zIndex: "1",
    background: "white",
  },
  buttonDiv: {
    display: "flex",
    maxWidth: "400px",
    margin: "10px auto",
    justifyContent: "center",
    borderTop: "1px solid",
    "& > *": {
      margin: "8px 16px",
    },
  },
}));

const BusinessSlug = ({ business }) => {
  const classes = useStyles();
  const { user } = useAuth();
  const router = useRouter();
  const { setContextCategory } = useSearch();

  const backToSearch = () => {
    setContextCategory(business?.category);
    router.push("/search");
  };

  return (
    <>
      <SEO
        description={`SoPlugged page for ${
          business?.business_name || "a business"
        }`}
        title={`${business?.business_name.toUpperCase() || ""} | SoPlugged`}
      />
      <Container className={classes.page} maxWidth="lg">
        <br></br>
        {business && <BusinessPage business={business} user={user} />}
        <div className={classes.buttonDiv}>
          <Button variant="outlined" onClick={backToSearch}>
            View business like this
          </Button>
        </div>
      </Container>
    </>
  );
};

export async function getServerSideProps(context) {
  let slug = context.query.slug;
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/business?slug=${slug}`
    );
    const business = await res.json();

    if (!business) throw new Error("Business wasn't found");
    return {
      props: {
        business,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}

export default BusinessSlug;
