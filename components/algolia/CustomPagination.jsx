import { connectPagination } from "react-instantsearch-dom";
import * as styles from "styles/AlgoliaSearch.module.scss";

const Pagination = ({ currentRefinement, nbPages, refine, createURL }) => {
  return (
    <ul className={styles.pagination_list}>
      {new Array(nbPages).fill(null).map((_, index) => {
        const page = index + 1;
        const active = currentRefinement === page;

        return (
          <li key={index}>
            <a
              href={createURL(page)}
              onClick={(event) => {
                event.preventDefault();
                refine(page);
                window.scrollTo(0, 0);
              }}
              className={`${styles.pagination_list_item} ${
                active ? styles.active : ""
              }`}
            >
              {page}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export const CustomPagination = connectPagination(Pagination);
