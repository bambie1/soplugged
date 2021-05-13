import React, { useState } from "react";
import { Container, makeStyles } from "@material/mui-components";
import { submitBusinessObject } from "../src/updateBusiness";
import SEO from "@components/SEO";
import nookies from "nookies";
import { verifyIdToken } from "../utils/firebaseAdmin";
import { useBusinessFormContext } from "@contexts/businessFormContext";
import dynamic from "next/dynamic";
import StyledBusinessForm from "@components/multi-step-form/StyledBusinessForm";
import swal from "sweetalert";
import { useRouter } from "next/router";

const DynamicSaveAnimation = dynamic(() =>
  import("../components/SavingAnimation")
);
const DynamicAlert = dynamic(() =>
  import("@material/mui-lab").then((mod) => mod.Alert)
);

const useStyles = makeStyles((theme) => ({
  page: {
    padding: theme.spacing(10, 0, 0),
    // minHeight: "100vh",
    zIndex: "1",
    background: "white",
    display: "flex",
  },
  container: {
    padding: "0",
    [theme.breakpoints.up("sm")]: {
      marginTop: "50px",
      marginBottom: "50px",
    },
  },
}));

const EditBusiness = ({ business, token }) => {
  const classes = useStyles();
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(false);
  const {
    setBusiness,
    backEndReferral,
    backEndReferralBusiness,
  } = useBusinessFormContext();
  const router = useRouter();

  React.useEffect(() => {
    //set business in context
    if (business) setBusiness(business);
  }, [business]);
  const handleSubmit = async (newData) => {
    setSaving(true);
    let businessWithReferral = { ...newData };
    if (!business) {
      businessWithReferral.backEndReferral = backEndReferral;
      businessWithReferral.backEndReferralBusiness = backEndReferralBusiness;
    }
    // console.log({ businessWithReferral });
    let slug = await submitBusinessObject(
      businessWithReferral,
      token,
      business
    );
    setSaving(false);
    if (!slug.error) {
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
    } else {
      console.log(slug.error);
      setError(true);
    }
    return slug;
  };
  if (business !== undefined) {
    return (
      <>
        <SEO
          description="Register your business as an Black entrepreneur, and get featured on our platform, for FREE!"
          title="My Business | SoPlugged"
        />
        <div className={classes.page}>
          <Container maxWidth="lg" className={classes.container}>
            {error && (
              <DynamicAlert severity="error">
                An error occured while saving. Another business likely exists
                with the same name
              </DynamicAlert>
            )}
            <StyledBusinessForm
              myBusiness={business}
              submitHandler={handleSubmit}
            />
          </Container>
          {saving && (
            <DynamicSaveAnimation message="Updating your Business page" />
          )}
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
