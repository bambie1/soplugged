import React, { useState } from "react";
import { Typography, useMediaQuery } from "@material/mui-components";
import BusinessFormStep1 from "./BusinessFormStep1";
import BusinessFormStep2 from "./BusinessFormStep2";
import BusinessFormStep3 from "./BusinessFormStep3";
import BusinessFormStep4 from "./BusinessFormStep4";
import { useTheme } from "@material-ui/core/styles";
import { useBusinessFormContext } from "@contexts/businessFormContext";
import FormikStepper from "./FormikStepper";
import BusinessFormReview from "./BusinessFormReview";
import dynamic from "next/dynamic";
import swal from "sweetalert";
import { submitBusinessObject } from "../../src/updateBusiness";
import { useRouter } from "next/router";

const DynamicSaveAnimation = dynamic(() => import("../SavingAnimation"));
const DynamicAlert = dynamic(() =>
  import("@material/mui-lab").then((mod) => mod.Alert)
);

const MultiStepBusinessForm = ({ token }) => {
  const {
    business,
    formSteps,
    currentStep,
    backEndReferral,
    backEndReferralBusiness,
  } = useBusinessFormContext();
  const theme = useTheme();
  const bigScreen = useMediaQuery(theme.breakpoints.up("md"));
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(false);
  const router = useRouter();

  const initialValues = {
    businessName: business?.business_name || "",
    businessCategory: business?.category || "",
    businessDescription: business?.business_description || "",
    businessLocation: business?.business_location || "",
    businessUrl: business?.business_url || "",
    canadaWide: !business?.fixed_to_one_location || false,
    igHandle: business?.ig_handle || "",
    logoUrl: business?.logo_url || "",
    streetAddress: business?.street_address || "",
    sampleImages: business?.sample_images || "",
    phoneNumber: business?.phone_number || "",
  };

  const handleSubmit = async (newData) => {
    setSaving(true);
    let businessWithReferral = { ...newData };
    if (!business) {
      businessWithReferral.backEndReferral = backEndReferral;
      businessWithReferral.backEndReferralBusiness = backEndReferralBusiness;
    }
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

  return (
    <>
      {bigScreen && (
        <>
          <Typography variant="h6" gutterBottom={true} align="center">
            {formSteps[currentStep]?.title}
          </Typography>
          <hr style={{ width: "20%" }}></hr>
        </>
      )}
      {error && (
        <DynamicAlert severity="error" style={{ fontSize: "0.8rem" }}>
          An error occured while saving. Another business likely exists with the
          same name, or your request timed out (try refreshing the page)
        </DynamicAlert>
      )}
      <FormikStepper
        initialValues={initialValues}
        onSubmit={(values, helper) => {
          handleSubmit(values);
        }}
      >
        <BusinessFormStep1 label="Name / Location" />
        <BusinessFormStep2 label="Category" />
        <BusinessFormStep3 label="Description / Contact" />
        <BusinessFormStep4 label="Images" />
        <BusinessFormReview label="Review and Submit" />
      </FormikStepper>
      {saving && <DynamicSaveAnimation message="Updating your Business page" />}
    </>
  );
};

export default MultiStepBusinessForm;
