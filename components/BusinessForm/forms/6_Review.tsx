import { FormikInput } from "@/components/formik";

const Review = () => {
  return (
    <>
      <FormikInput
        label="Business Name"
        placeholder="ABC Business"
        name="business_name"
      />
      <FormikInput
        label="Website Url"
        placeholder="www.soplugged.com"
        name="business_url"
      />
      <FormikInput
        label="Phone Number"
        placeholder="6131234567"
        name="phone_number"
      />
      <FormikInput label="IG Handle" placeholder="sopluggd" name="ig_handle" />
    </>
  );
};

export default Review;
