import React, { useState } from "react";
import BusinessInfoForm from "../components/BusinessInfoForm";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Head from "next/head";
import nookies from "nookies";
import { verifyIdToken } from "../src/firebase/firebaseAdmin";
import firebaseClient from "../src/firebase/firebaseClient";
import { useAuth } from "../contexts/auth";
import { useRouter } from "next/router";
import { getImageUrl } from "../src/uploadImage";

const useStyles = makeStyles((theme) => ({
  page: {
    padding: theme.spacing(10, 1, 2),
    minHeight: "85vh",
  },
}));

const EditBusiness = ({ email, business }) => {
  const classes = useStyles();
  firebaseClient();
  const { user } = useAuth();
  const router = useRouter();

  const updateBusiness = async (fetchUrl, fetchMethod, businessObject) => {
    try {
      const userToken = await user.getIdToken();
      const res = await fetch(fetchUrl, {
        method: fetchMethod,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Firebase-Token": userToken,
        },
        body: JSON.stringify({
          business: businessObject,
        }),
      });
      if (!res.ok) {
        throw new Error("HTTP status " + res.status);
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const handleSubmit = async (data, files) => {
    const { logo, ...dbData } = data;

    let logoUrl = "";
    let images = [];
    if (logo[0]) logoUrl = await getImageUrl(logo[0]);
    for (let i = 0; i < files.length; i++) {
      files[i] &&
        images.push(
          typeof files[i] === "string" ? files[i] : await getImageUrl(files[i])
        );
    }

    if (!logoUrl) logoUrl = business?.logo_url;

    const businessObject = {
      owner_name: data.ownerName.trim(),
      email: email,
      phone_number: data.ownerPhone,
      business_name: data.businessName.trim(),
      business_url: data.businessUrl.trim(),
      business_location: data.businessLocation,
      logo_url: logoUrl || "",
      sample_images: images.join(),
      street_address: data.streetAddress,
      fixed_to_one_location: !data.canadaWide,
      category: data.businessCategory,
      tags: data.businessTags || "",
      business_description: data.businessDescription.trim(),
      ig_handle: data.igHandle,
    };
    // console.log(businessObject);
    const fetchUrl = business
      ? process.env.NEXT_PUBLIC_SERVER_ONE_BUSINESS
      : process.env.NEXT_PUBLIC_SERVER_ALL_BUSINESSES;
    const fetchMethod = business ? "PATCH" : "POST";

    updateBusiness(fetchUrl, fetchMethod, businessObject); //create or update

    localStorage.setItem("businessObject", JSON.stringify(businessObject));

    router.push("/preview");
  };
  if (email) {
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
          <BusinessInfoForm
            submitHandler={handleSubmit}
            currentBusiness={business}
            email={email}
          />
        </Container>
      </>
    );
  } else {
    return <p>Not signed in</p>;
  }
};

export async function getServerSideProps(context) {
  try {
    const cookies = nookies.get(context);
    const token = await verifyIdToken(cookies.token);
    const { email } = token;
    const res = await fetch(process.env.NEXT_PUBLIC_SERVER_ONE_BUSINESS, {
      method: "GET",
      headers: {
        "Firebase-Token": cookies.token,
      },
    });
    if (!res.ok) {
      throw new Error("HTTP status " + res.status);
    }
    const resJson = await res.json();
    return {
      props: {
        email: email,
        business: resJson,
      },
    };
  } catch (err) {
    console.log({ err });
    context.res.writeHead(302, { Location: "/join" });
    context.res.end();
    return { props: {} };
  }
}

export default EditBusiness;
