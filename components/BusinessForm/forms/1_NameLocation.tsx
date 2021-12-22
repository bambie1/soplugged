import { FC } from "react";
import { useRouter } from "next/router";
import Script from "next/script";
import PlacesAutocomplete from "react-places-autocomplete";

import { FormikInput } from "@/components/formik";

import styles from "../BusinessForm.module.scss";

const NameLocation: FC = () => {
  return (
    <>
      <FormikInput
        label="Business Name"
        placeholder="ABC Business"
        name="business_name"
      />
      <FormikInput
        label="Street Address (Optional)"
        placeholder="123 Street"
        name="street_address"
      />

      {/* <Script
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}&libraries=places&callback=myCallbackFunc`}
      /> */}
    </>
  );
};

export default NameLocation;
