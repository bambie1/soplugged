import * as Yup from "yup";

export const businessFormSchema = [
  // name and location
  Yup.object().shape({
    business_name: Yup.string()
      .min(3, "Business name is too short!")
      .max(30, "Business name is too long!")
      .required("Please enter a name for your business"),

    fixed_to_one_location: Yup.boolean(),
    business_location: Yup.string().required(
      "Please select a location for your business"
    ),
  }),

  // category
  Yup.object().shape({
    category: Yup.string().required("Please select a category"),
  }),

  // business description
  Yup.object().shape({
    business_description: Yup.string().test(
      "required-length",
      "Please enter a description for your business (at least 10 characters)",
      (value) => {
        if (!value) return false;
        let strippedString = value.replace(/<[^>]*>?/gm, "");
        return strippedString.length > 10;
      }
    ),
  }),

  // contact links
  Yup.object().shape({
    business_url: Yup.string()
      .nullable()
      .url("Please enter a valid url (e.g. https://www.soplugged.com)"),
    ig_handle: Yup.string()
      .matches(/^[a-zA-Z0-9_.]+([-.][a-zA-Z0-9_]+)*$/, {
        message: "Your IG handle can't contain special characters or spaces",
      })
      .max(30, "IG Handle is too long"),
    phone_number: Yup.string()
      .matches(/^\d+$/, "The field should have digits only")
      .length(10, "Phone number must be 10 digits"),
  }),

  // images
  Yup.object().shape({}),

  // review
  Yup.object().shape({
    business_name: Yup.string()
      .min(3, "Business name is too short!")
      .max(30, "Business name is too long!")
      .required("Please enter a name for your business"),
  }),
];
