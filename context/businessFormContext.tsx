import { FC, useState, createContext, useContext } from "react";

const BusinessFormContext = createContext<any>({});

export const BusinessFormProvider: FC = ({ children }) => {
  const [agreementSigned, setAgreementSigned] = useState(false);
  const [isNew, setIsNew] = useState(false);

  const [referralSource, setReferralSource] = useState("");
  const [referringBusiness, setReferringBusiness] = useState("");

  const value = {
    agreementSigned,
    setAgreementSigned,
    isNew,
    setIsNew,
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

export const useBusinessFormContext = () => {
  return useContext(BusinessFormContext);
};
