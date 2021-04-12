import React, { useState } from "react";
import BusinessInfoForm from "../components/BusinessInfoForm";
import { Container, makeStyles } from "../components/mui-components";
import { useRouter } from "next/router";
import SavingAnimation from "../components/SavingAnimation";
import { submitBusinessObject } from "../src/updateBusiness";
import SEO from "@/components/SEO";
import { Alert } from "@/components/mui-lab";
import swal from "sweetalert";
import nookies from "nookies";
import { verifyIdToken } from "../utils/firebaseAdmin";
import firebaseClient from "../utils/firebaseClient";
import firebase from "firebase/app";

const useStyles = makeStyles((theme) => ({
  page: {
    padding: theme.spacing(10, 0, 2),
    minHeight: "85vh",
    zIndex: "1",
    background: "white",
  },
}));

const EditBusiness = ({ business, token }) => {
  const classes = useStyles();
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(false);

  const swalFunction = async (slug, business) => {
    swal({
      title: business ? "Business Updated!" : "Business Created",
      text: business
        ? "Your business was updated successfully!"
        : "Your SoPlugged business was created successfully",
      icon: "success",
      buttons: {
        view: business && "View Page",
        learn: !business && {
          text: "What next?",
          value: "learn",
        },
      },
    }).then((val) => {
      if (val) {
        switch (val) {
          case "view":
            router.push(`/business/${slug}`);
            break;
          case "learn":
            swal({
              icon: "success",
              title: "What next?",
              text:
                "We'll send you a confirmation email shortly.\n\n In the meantime, we'll review your new business, and it will be added to our directory once ready.",
              button: "View Page",
            }).then((val) => {
              if (val) router.push(`/business/${slug}`);
            });
            break;
          default:
            break;
        }
      }
    });
  };
  const handleSubmit = async (newData, files) => {
    setSaving(true);
    let slug = await submitBusinessObject(newData, files, token, business);
    setSaving(false);
    if (!slug.error) {
      swalFunction(slug, business);
    } else {
      console.log(slug.error);
      setError(true);
    }
  };
  if (business !== undefined) {
    return (
      <>
        <SEO
          description="Register your business as an Black entrepreneur, and get featured on our platform, for FREE!"
          title="My Business | SoPlugged"
        />
        <div className={classes.page}>
          <Container maxWidth="lg">
            {error && (
              <Alert severity="error">
                An error occured while saving. Another business likely exists
                with the same name
              </Alert>
            )}
            <BusinessInfoForm
              submitHandler={handleSubmit}
              currentBusiness={business}
            />
          </Container>
          {saving && <SavingAnimation />}
        </div>
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
      if (!res.ok) return { props: {} };
      const business = await res.json();
      return {
        props: {
          business: business[0] || null,
          token,
        },
      };
    } else throw new Error("No token found");
  } catch (error) {
    context.res.writeHead(302, { location: "/join" });
    context.res.end();
    return { props: {} };
  }
}

export default EditBusiness;
