import React from "react";
import { Button, Container, makeStyles } from "@material/mui-components";
import { SEO, BusinessPage } from "@components/index";
import { useAuth } from "@contexts/authContext";
import { useSearch } from "@contexts/searchContext";
import { useRouter } from "next/router";

import nookies from "nookies";
import { verifyIdToken } from "../../utils/firebaseAdmin";

const useStyles = makeStyles((theme) => ({
  page: {
    textAlign: "center",
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

const BusinessSlug = ({ business, userLikedBusiness }) => {
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
        {business && (
          <BusinessPage
            business={business}
            user={user}
            userLikedBusiness={userLikedBusiness}
          />
        )}
        <div className={classes.buttonDiv}>
          <Button variant="contained" color="secondary" onClick={backToSearch}>
            {business?.category
              ? "View business like this"
              : "Back to directory"}
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

    if (!business)
      return {
        notFound: true,
      };
    let userLikedBusiness = false;

    try {
      const cookies = nookies.get(context);
      const token = await verifyIdToken(cookies.token);
      const fetchUrl = `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/favorites`;

      if (token?.email) {
        const res = await fetch(fetchUrl, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Firebase-Token": cookies.token,
          },
        });
        if (res.ok) {
          const favorites = await res.json();
          for (let i = 0; i < favorites.length; i++) {
            if (favorites[i].liked_business.id === business.id) {
              userLikedBusiness = true;
              break;
            }
          }
        }
      }
    } catch (err) {}

    return {
      props: {
        business,
        userLikedBusiness,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}

export default BusinessSlug;
