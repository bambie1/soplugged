import { FC } from "react";
import { RefinementListProvided } from "react-instantsearch-core";
import { Highlight, connectRefinementList } from "react-instantsearch-dom";

import styles from "./CustomRefinementList.module.scss";

const ITEMS_LIMIT = 20;

type Props = RefinementListProvided & {
  hide?: boolean;
};

const MyRefinementList: FC<Props> = ({
  items,
  isFromSearch,
  refine,
  createURL,
  hide,
}: any) => {
  return (
    <>
      <ul
        className={`list ${styles.refinementList} ${hide && styles.hideList}`}
      >
        {items.map(
          (item: any, index: any) =>
            index < ITEMS_LIMIT &&
            item.label && (
              <li key={item.label}>
                <a
                  href={createURL(item.value)}
                  className={`${styles.refinementListItem} ${
                    item.isRefined ? styles.isRefined : ""
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
                  )}
                </a>
              </li>
            )
        )}
      </ul>
    </>
  );
};

export const CustomRefinementList = connectRefinementList(MyRefinementList);
