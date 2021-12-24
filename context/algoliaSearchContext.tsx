import { useState, createContext, useContext, FC } from "react";

const AlgoliaSearchContext = createContext<any>({});

export const AlgoliaSearchProvider: FC = ({ children }) => {
  const [category, setCategory] = useState();
  const [location, setLocation] = useState();

  const value = {
    category,
    location,
    setCategory,
    setLocation,
  };

  return (
    <AlgoliaSearchContext.Provider value={value}>
      {children}
    </AlgoliaSearchContext.Provider>
  );
};

export const useAlgoliaSearch = () => {
  return useContext(AlgoliaSearchContext);
};
