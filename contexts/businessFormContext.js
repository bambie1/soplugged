import React, { useState, createContext, useContext, useEffect } from "react";

const BusinessFormContext = createContext();
export const useBusinessFormContext = () => {
  return useContext(BusinessFormContext);
};

const formSteps = [
  {
    number: 0,
    title: "Name and Location",
    text: "Add your business name, and location",
    bottomImage: "/images/man_globe.svg",
    fieldNames: ["businessName", "businessLocation"],
    backEndFields: ["business_name", "business_location"],
  },
  {
    number: 1,
    title: "Category",
    text: "Select the most-fitting category for your business",
    bottomImage: "/images/man_globe.svg",
    fieldNames: ["businessCategory"],
    backEndFields: ["category"],
  },
  {
    number: 2,
    title: "Description and Contact",
    text: "Elaborate on the services you provide, and add contact info",
    bottomImage: "/images/social_media_pixels.svg",
    fieldNames: ["businessDescription", "businessUrl", "igHandle"],
    backEndFields: ["business_description", "business_url", "ig_handle"],
  },
  {
    number: 3,
    title: "Images",
    text: "Upload a logo and sample images of your work",
    bottomImage: "/images/img-carousel.svg",
    fieldNames: ["logoUrl", "sampleImages"],
    backEndFields: ["logo_url", "sample_images"],
  },
  {
    number: 4,
    title: "Review & Submit",
    text: "Take a chance to review your business info, then Submit",
  },
];

export function BusinessFormProvider({ children }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [business, setBusiness] = useState(null);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [unlockedSteps, setUnlockedSteps] = useState([0]);
  const [backEndReferral, setBackEndReferral] = useState("");
  const [backEndReferralBusiness, setBackEndReferralBusiness] = useState("");
  const [formWasChanged, setFormWasChanged] = useState(false);

  useEffect(() => {
    if (business) {
      setUnlockedSteps([0, 1, 2, 3, 4]);

      formSteps.map(({ number, backEndFields }) => {
        let complete = true;
        if (backEndFields) {
          backEndFields.map((field) => {
            if (business[field] == "") complete = false;
          });
          if (complete) completedSteps.push(number);
        }
      });
    }
  }, [business]);

  const markStepUnlocked = (number) => {
    if (!unlockedSteps.includes(number)) {
      setUnlockedSteps((prevArr) => [...prevArr, number]);
    }
  };
  const markStepComplete = (number) => {
    markStepUnlocked(number);
    if (!completedSteps.includes(number)) {
      setCompletedSteps((prevArr) => [...prevArr, number]);
    }
  };
  const markStepIncomplete = (number) => {
    markStepUnlocked(number);
    let newArr = completedSteps.filter((step) => step !== number);
    setCompletedSteps(newArr);
  };

  const value = {
    formSteps,
    currentStep,
    setCurrentStep,
    completedSteps,
    markStepUnlocked,
    markStepComplete,
    markStepIncomplete,
    business,
    setBusiness,
    unlockedSteps,
    backEndReferral,
    backEndReferralBusiness,
    setBackEndReferral,
    setBackEndReferralBusiness,
    formWasChanged,
    setFormWasChanged,
  };

  return (
    <BusinessFormContext.Provider value={value}>
      {children}
    </BusinessFormContext.Provider>
  );
}
