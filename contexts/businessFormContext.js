import React, { useState, createContext, useContext } from "react";

const BusinessFormContext = createContext();
export const useBusinessFormContext = () => {
  return useContext(BusinessFormContext);
};

export function BusinessFormProvider({ children }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [business, setBusiness] = useState(null);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [unlockedSteps, setUnlockedSteps] = useState([]);
  const [backEndReferral, setBackEndReferral] = useState("");
  const [backEndReferralBusiness, setBackEndReferralBusiness] = useState("");

  const formSteps = [
    {
      number: 0,
      title: "Name and Location",
      text: "Add your business name, and location",
      bottomImage: "/images/man_globe.svg",
      fieldNames: ["businessName", "businessLocation"],
    },
    {
      number: 1,
      title: "Category",
      text: "Select the most-fitting category for your business",
      bottomImage: "/images/man_globe.svg",
      fieldNames: ["businessCategory"],
    },
    {
      number: 2,
      title: "Description and Contact",
      text: "Elaborate on the services you provide, and add contact info",
      bottomImage: "/images/social_media_pixels.svg",
      fieldNames: ["businessDescription", "businessUrl", "igHandle"],
    },
    {
      number: 3,
      title: "Images",
      text: "Upload a logo and sample images of your work",
      bottomImage: "/images/img-carousel.svg",
      fieldNames: ["logoUrl", "sampleImages"],
    },
    {
      number: 4,
      title: "Review & Submit",
      text: "Take a chance to review your business info, then Submit",
    },
  ];

  const markStepUnlocked = (number) => {
    if (!unlockedSteps.includes(number)) {
      setUnlockedSteps((prevArr) => [...prevArr, number]);
    }
  };
  const markStepComplete = (number) => {
    if (!completedSteps.includes(number)) {
      setCompletedSteps((prevArr) => [...prevArr, number]);
    }
  };
  const markStepIncomplete = (number) => {
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
  };

  return (
    <BusinessFormContext.Provider value={value}>
      {children}
    </BusinessFormContext.Provider>
  );
}
