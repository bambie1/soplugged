import React, { FC, useState, createContext, useContext } from "react";

const BusinessFormContext = createContext<any>({});

export const useBusinessFormContext = () => {
  return useContext(BusinessFormContext);
};

export const BusinessFormProvider: FC = ({ children }) => {
  const [agreementSigned, setAgreementSigned] = useState(false);

  const value = {
    agreementSigned,
    setAgreementSigned,
  };

  return (
    <BusinessFormContext.Provider value={value}>
      {children}
    </BusinessFormContext.Provider>
  );
};
