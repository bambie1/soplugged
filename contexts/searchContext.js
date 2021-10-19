import React, { useState, createContext, useContext } from "react";

const SearchContext = createContext();
export const useSearch = () => {
  return useContext(SearchContext);
};

export function SearchProvider({ children }) {
  const [contextCategory, setContextCategory] = useState();
  const [contextLocation, setContextLocation] = useState();

  const value = {
    contextCategory,
    contextLocation,
    setContextCategory,
    setContextLocation,
  };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
}
