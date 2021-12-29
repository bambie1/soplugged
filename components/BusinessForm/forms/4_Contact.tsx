import { FormikInput } from "@/components/formik";

const Contact = () => {
  return (
    <>
      <FormikInput
        label="Website Url"
        placeholder="https://www.soplugged.com"
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

export default Contact;
