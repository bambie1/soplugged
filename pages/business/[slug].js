import React from "react";
import { Button, Container, makeStyles } from "@/components/mui-components";
import Link from "next/link";
import Head from "next/head";
import BusinessPage from "@/components/BusinessPage";
import { useAuthUser, withAuthUser } from "next-firebase-auth";

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
  const user = useAuthUser();

  return (
    <>
      <Head>
        <meta
          name="description"
          content={`${
            business?.business_description || "SoPlugged business page"
          }`}
        />
        <title>{`${business?.business_name || ""} | SoPlugged`}</title>
      </Head>
      <Container className={classes.page} maxWidth="lg">
        <br></br>
        {business && <BusinessPage business={business} user={user} />}
        <div className={classes.buttonDiv}>
          <Link href="/search">
            <a>
              <Button variant="outlined">Back to Directory</Button>
            </a>
          </Link>
        </div>
      </Container>
    </>
  );
};

export async function getServerSideProps(context) {
  let slug = context.query.slug;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/business?slug=${slug}`
  );
  const business = await res.json();

  if (!business) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      business,
    },
  };
}

export default withAuthUser()(BusinessSlug);
