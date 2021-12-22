export const businessModel = {
  formId: "checkoutForm",
  formField: {
    business_name: {
      name: "business_name",
      label: "Business name*",
      requiredErrorMsg: "Business name is required",
    },
    street_address: {
      name: "street_address",
      label: "Street Address*",
      requiredErrorMsg: "Street Address is required",
    },
    category: {
      name: "category",
      label: "Category*",
      requiredErrorMsg: "Category is required",
    },
    business_description: {
      name: "description",
      label: "Description*",
      requiredErrorMsg: "Description is required",
    },
    phone_number: {
      name: "phone_number",
      label: "Phone Number",
    },
    ig_handle: {
      name: "ig_handle",
      label: "IG Handle",
      invalidErrorMsg: "IG handle is invalid (ex. sopluggd)",
    },
    business_url: {
      name: "business_url",
      label: "Website Url",
      invalidErrorMsg: "Url is invalid (ex. soplugged.com)",
    },
  },
};
