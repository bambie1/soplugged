import { FC } from "react";
import { Highlight, connectRefinementList } from "react-instantsearch-dom";

import styles from "./CustomRefinementList.module.scss";

const ITEMS_LIMIT = 20;

const MyRefinementList: FC = ({
  items,
  isFromSearch,
  refine,
  createURL,
  hide,
}: any) => {
  if (hide) return <></>;

  return (
    <>
      <ul className={styles.refinementList}>
        {items.map(
          (item: any, index: any) =>
            index < ITEMS_LIMIT && (
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
