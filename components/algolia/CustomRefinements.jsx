import React, { useState } from "react";
import { connectCurrentRefinements } from "react-instantsearch-dom";

const CurrentRefinements = ({ items, refine, createURL }) => {
  const [storedItems, setStoredItems] = useState(items);
  console.log({ items });

  return (
    <ul className="ais-CurrentRefinements-list">
      {items.map((item) => (
        <li key={item.label} className="ais-CurrentRefinements-item">
          {item.items ? (
            <React.Fragment>
              {item.items.map((nested) => (
                <span
                  key={nested.label}
                  className="ais-CurrentRefinements-category"
                >
                  <span className="ais-CurrentRefinements-categoryLabel">
                    {nested.label}
                  </span>
                  <button
                    className="ais-CurrentRefinements-delete"
                    onClick={(event) => {
                      event.preventDefault();
                      refine(nested.value);
                    }}
                  >
                    ✕
                  </button>
                </span>
              ))}
            </React.Fragment>
          ) : (
            <>
              <a href={createURL(item.value)}>
                {item.label}{" "}
                <span
                  onClick={(event) => {
                    event.preventDefault();
                    refine(item.value);
                  }}
                >
                  ✕
                </span>
              </a>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export const CustomCurrentRefinements =
  connectCurrentRefinements(CurrentRefinements);
