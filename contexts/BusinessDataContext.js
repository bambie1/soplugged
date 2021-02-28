import React, { createContext, useContext, useState } from "react";

const BusinessDataContext = createContext();

export const BusinessDataProvider = ({ children }) => {
  const [data, setData] = useState({});

  const setValues = (values) => {
    setData((prevData) => ({
      ...prevData,
      ...values,
    }));
    console.log({ data });
  };
  return (
    <BusinessDataContext.Provider value={{ data, setValues }}>
      {children}
    </BusinessDataContext.Provider>
  );
};

export const useBusinessData = () => useContext(BusinessDataContext);
