import React, { createElement } from "react";
import { getAlgoliaResults } from "@algolia/autocomplete-js";
import algoliasearch from "algoliasearch";
import "@algolia/autocomplete-theme-classic";

import { Autocomplete } from "./Autocomplete";
import { CategoryHit } from "./CategoryHit";
import { BusinessHit } from "./BusinessHit";

const appId = process.env.NEXT_PUBLIC_ALGOLIA_ID!;
const apiKey = process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API!;
const searchClient = algoliasearch(appId, apiKey);

const Searchbar = () => {
  return (
    <>
      <Autocomplete
        openOnFocus={false}
        getSources={({ query }: any) => [
          {
            sourceId: "categories",
            getItems() {
              return getAlgoliaResults({
                searchClient,
                queries: [
                  {
                    indexName: "Category",
                    query,
                    params: {
                      hitsPerPage: 4,
                    },
                  },
                ],
              });
            },
            templates: {
              item({ item, components }: any) {
                return <CategoryHit hit={item} components={components} />;
              },
            },
          },
          {
            sourceId: "businesses",
            getItems() {
              return getAlgoliaResults({
                searchClient,
                queries: [
                  {
                    indexName: "Business",
                    query,
                    params: {
                      hitsPerPage: 3,
                    },
                  },
                ],
              });
            },
            templates: {
              item({ item, components }: any) {
                return <BusinessHit hit={item} components={components} />;
              },
            },
          },
        ]}
      />
    </>
  );
};

export default Searchbar;
