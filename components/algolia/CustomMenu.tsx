import { connectMenu, Highlight } from "react-instantsearch-dom";

const Menu = ({ items, refine, isFromSearch, createURL }: any) => (
  <div className="overflow-x-auto">
    <ul className="flex">
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

const CustomMenu = connectMenu(Menu);

export default CustomMenu;
