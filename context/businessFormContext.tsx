import { useState, createContext, useContext, FC } from "react";

const BusinessFormContext = createContext<any>({});
export const useBusinessFormContext = () => {
  return useContext(BusinessFormContext);
};

const formSteps = [
  {
    number: 0,
    title: "Name and Location",
    description: "Add your business name, and location",

    fieldNames: ["businessName", "businessLocation"],
    backEndFields: ["business_name", "business_location"],
  },
  {
    number: 1,
    title: "Category",
    description: "Select the most-fitting category for your business",

    fieldNames: ["businessCategory"],
    backEndFields: ["category"],
  },
  {
    number: 2,
    title: "Description",
    description: "Elaborate on the services you provide",

    fieldNames: ["businessDescription", "businessUrl", "igHandle"],
    backEndFields: ["business_description", "business_url", "ig_handle"],
  },
  {
    number: 3,
    title: "Images",
    description: "Upload a logo and sample images of your work",
    fieldNames: ["logoUrl", "sampleImages"],
    backEndFields: ["logo_url", "sample_images"],
  },
  {
    number: 4,
    title: "Contact",
    description: "Add helpful contact info for your potential customers",

    fieldNames: ["businessDescription", "businessUrl", "igHandle"],
    backEndFields: ["business_description", "business_url", "ig_handle"],
  },
  {
    number: 5,
    title: "Review & Submit",
    description: "Take a chance to review your business info, then Submit",
  },
];

export const BusinessFormProvider: FC = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formWasChanged, setFormWasChanged] = useState(false);

  const [agreementSigned, setAgreementSigned] = useState(false);
  const [referralSource, setReferralSource] = useState("");
  const [referringBusiness, setReferringBusiness] = useState("");

  const value = {
    formSteps,
    currentStep,
    setCurrentStep,
    formWasChanged,
    setFormWasChanged,

    agreementSigned,
    setAgreementSigned,
    referralSource,
    setReferralSource,
    referringBusiness,
    setReferringBusiness,
  };

  return (
    <BusinessFormContext.Provider value={value}>
      {children}
    </BusinessFormContext.Provider>
  );
};
