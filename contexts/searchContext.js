import React, { useState, createContext, useContext } from "react";

const SearchContext = createContext();
export const useSearch = () => {
  return useContext(SearchContext);
};

export function SearchProvider({ children }) {
  const [contextCategory, setContextCategory] = useState();

  const value = {
    contextCategory,
    setContextCategory,
  };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
}
