import { FC, useState, createContext, useContext } from "react";

const BusinessFormContext = createContext<any>({});

export const BusinessFormProvider: FC = ({ children }) => {
  const [agreementSigned, setAgreementSigned] = useState(false);
  const [isNew, setIsNew] = useState(false);

  const value = {
    agreementSigned,
    setAgreementSigned,
    isNew,
    setIsNew,
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
