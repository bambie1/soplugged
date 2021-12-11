export const stepsObject: any = {
  welcome: 0,
  name_location: 1,
  category: 2,
  description_contact: 3,
  images: 4,
  review: 5,
};

export const steps = [
  {
    number: 0,
    step: "welcome",
    name: "Welcome",
    description: "Terms and conditions",
  },
  {
    number: 1,
    step: "name_location",
    name: "Name & Location",
    description: "Important details of your business",
  },
  {
    number: 2,
    step: "category",
    name: "Category",
    description: "Select the category that your business falls under",
  },
  {
    number: 3,
    step: "description_contact",
    name: "Description & Contact",
    description: "More details about your business and contact links",
  },
  {
    number: 4,
    step: "images",
    name: "Images",
    description:
      "The most important part of your business page. Upload a logo and sample images",
  },
  {
    number: 5,
    step: "review",
    name: "Review",
    description: "Confirm your changes",
  },
];
