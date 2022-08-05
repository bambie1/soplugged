import { FC, useState } from "react";
import { Highlight, connectMenu } from "react-instantsearch-dom";

const Menu: FC = ({ items, isFromSearch, refine, createURL }: any) => {
  const [hide, setHide] = useState(true);

  return (
    <div className="relative w-40">
      <button
        className="flex h-full w-full items-center justify-center border border-black"
        onClick={() => setHide(!hide)}
      >
        Filter by location
      </button>
      <ul
        className={`absolute right-0 flex-1 gap-2 overflow-x-auto whitespace-nowrap ${
          hide ? "-z-1 opacity-0" : "z-[2] opacity-100"
        }`}
      >
        {items.map((item: any) => (
          <li key={item.label}>
            <a
              href={createURL(item.value)}
              className={`m-1 inline-block whitespace-nowrap rounded-md border border-primary p-2 text-sm hover:opacity-80 ${
                item.isRefined ? "bg-secondary text-primary" : ""
              }`}
              onClick={(event) => {
                event.preventDefault();
                refine(item.value);
              }}
            >
              {isFromSearch ? (
                <Highlight attribute="label" hit={item} />
              ) : (
                item.label.split(", Canada")[0]
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const LocationMenu = connectMenu(Menu);
