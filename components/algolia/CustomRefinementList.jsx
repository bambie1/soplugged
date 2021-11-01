import React from "react";
import { Highlight, connectRefinementList } from "react-instantsearch-dom";
import { Button } from "@material/mui-components";
import * as styles from "styles/AlgoliaSearch.module.scss";

const ITEMS_LIMIT = 5;

const RefinementList = ({
  items,
  isFromSearch,
  refine,
  searchForItems,
  createURL,
  hide,
  label,
}) => {
  const [extended, setExtended] = React.useState(false);

  if (hide) return <></>;

  return (
    <>
      <ul className={styles.refinement_list}>
        {items.map(
          (item, index) =>
            (index < ITEMS_LIMIT || extended) && (
              <li key={item.label}>
                <a
                  href={createURL(item.value)}
                  className={`${styles.refinement_list_item} ${
                    item.isRefined ? styles.is_refined : ""
                  }`}
                  onClick={(event) => {
                    event.preventDefault();
                    refine(item.value);
                  }}
                >
                  {isFromSearch ? (
                    <Highlight attribute="label" hit={item} />
                  ) : (
                    item.label
                  )}{" "}
                  {/* <span className={classes.numBadge}>{item.count}</span> */}
                </a>
              </li>
            )
        )}
        {items.length > ITEMS_LIMIT && (
          <Button size="small" onClick={() => setExtended(!extended)}>
            {extended ? "Show Less" : "Show More"}
          </Button>
        )}
      </ul>
    </>
  );
};

export const CustomRefinementList = connectRefinementList(RefinementList);
