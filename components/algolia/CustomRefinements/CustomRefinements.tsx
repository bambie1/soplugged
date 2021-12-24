import { connectCurrentRefinements } from "react-instantsearch-dom";

import styles from "./CustomRefinements.module.scss";

const CurrentRefinements = ({ items, refine, createURL }: any) => {
  return (
    <ul className={styles.list}>
      {items.map((item: any) => (
        <li key={item.label} className={styles.refinementGroup}>
          {item.items ? (
            <>
              {item.items.map((nested: any) => (
                <span key={nested.label} className={styles.refinementItem}>
                  {nested.label}{" "}
                  <button
                    onClick={(event) => {
                      event.preventDefault();
                      refine(nested.value);
                    }}
                    className={`button ${styles.removeQuery}`}
                  >
                    ✕
                  </button>
                </span>
              ))}
            </>
          ) : (
            <>
              {/* <a href={createURL(item.value)} className={styles.refinementItem}>
                {item.label}{" "}
                <button
                  onClick={(event) => {
                    event.preventDefault();
                    refine(item.value);
                  }}
                  className={`button ${styles.removeQuery}`}
                >
                  ✕
                </button>
              </a> */}
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default connectCurrentRefinements(CurrentRefinements);
