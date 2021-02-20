import React, { useState } from "react";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, Configure } from "react-instantsearch-dom";
import Autocomplete from "./Autocomplete";

const searchClient = algoliasearch(
  "0P514VMKM1",
  "a991b7a115a14c6c44df6fb753511267"
);

const AlgoliaAutoComplete = () => {
  const [query, setQuery] = useState("");

  const onSuggestionSelected = (_, { suggestion }) => {
    setQuery(suggestion.name);
  };

  const onSuggestionCleared = () => {
    setQuery("");
  };

  return (
    <div className="autocomplete-search-container">
      <InstantSearch indexName="dev_CATEGORIES" searchClient={searchClient}>
        <Configure hitsPerPage={5} />
        <Autocomplete
          onSuggestionSelected={onSuggestionSelected}
          onSuggestionCleared={onSuggestionCleared}
        />
      </InstantSearch>
    </div>
  );
};

export default AlgoliaAutoComplete;
