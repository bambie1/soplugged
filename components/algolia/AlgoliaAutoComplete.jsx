import React, { useState } from "react";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, Configure } from "react-instantsearch-dom";
import Autocomplete from "./Autocomplete";
import { useSearch } from "@contexts/searchContext";
import { useRouter } from "next/router";

const searchClient = algoliasearch(
  "0P514VMKM1",
  "a991b7a115a14c6c44df6fb753511267"
);

const AlgoliaAutoComplete = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const { setContextCategory } = useSearch();

  const onSuggestionSelected = (_, { suggestion }) => {
    // console.log({ suggestion });
    // setContextCategory(suggestion.name);
    // router.push("/search");
  };

  const onSuggestionCleared = () => {
    setQuery("");
  };

  return (
    <div className="autocomplete-search-container">
      <InstantSearch indexName="dev_BUSINESSES" searchClient={searchClient}>
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
