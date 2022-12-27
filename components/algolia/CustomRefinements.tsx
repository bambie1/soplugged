import { connectCurrentRefinements } from "react-instantsearch-dom";

const CurrentRefinements = ({ items, refine, createURL }: any) => {
  return (
    <ul className="flex gap-2">
      {items.map((item: any) => {
        if (item.attribute === "business_location") {
          return (
            <li
              key={item.label}
              className="rounded-md border border-primary p-2 text-sm"
            >
              {item.currentRefinement}{" "}
              <button
                onClick={(event) => {
                  event.preventDefault();
                  refine(item.value);
                }}
                className="button ml-2 h-5 w-5 rounded-full border border-primary p-1 text-xs leading-[1]"
              >
                ✕
              </button>
            </li>
          );
        }
      })}
    </ul>
  );
};

export default connectCurrentRefinements(CurrentRefinements);
