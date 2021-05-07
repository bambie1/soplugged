import * as Yup from "yup";

export default [
  Yup.object().shape({
    businessName: Yup.string()
      .min(3, "Business name is too short!")
      .max(30, "Business name is too long!")
      .required("Please enter a name for your business"),
    canadaWide: Yup.boolean(),
    businessLocation: Yup.string().when("canadaWide", {
      is: false,
      then: Yup.string().required("Please select a location for your business"),
    }),
  }),
  Yup.object().shape({
    businessCategory: Yup.string().required("Please select a category"),
  }),
  Yup.object().shape({
    businessDescription: Yup.string().test(
      "required-length",
      "Business description is too short",
      (value) => {
        let strippedString = value.replace(/<[^>]*>?/gm, "");
        return strippedString.length > 10;
      }
    ),
    businessUrl: Yup.string().url(
      "Please enter a valid url (e.g. https://www.soplugged.com)"
    ),
    igHandle: Yup.string()
      .matches(/^[a-zA-Z0-9_.]+([-.][a-zA-Z0-9_]+)*$/, {
        message: "Your IG handle can't contain special characters or spaces",
      })
      .max(30, "IG Handle is too long"),
  }),
];
