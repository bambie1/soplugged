import { useRef, useState } from "react";
import { connectMenu, Highlight } from "react-instantsearch-dom";

const Menu = ({ items, refine, isFromSearch, createURL }: any) => {
  const listInnerRef = useRef<any>();

  const [isAtEnd, setIsAtEnd] = useState(false);
  const [isAtBeginning, setIsAtBeginning] = useState(true);

  const onScroll = () => {
    if (listInnerRef.current) {
      const { clientWidth, scrollWidth, scrollLeft } = listInnerRef.current;

      setIsAtEnd(scrollLeft + clientWidth + 5 >= scrollWidth);
      setIsAtBeginning(scrollLeft === 0);
    }
  };

  return (
    <div className="relative flex w-full overflow-auto">
      <div
        className={`pointer-events-none absolute left-0 bottom-0 flex w-10 justify-center bg-gradient-to-r from-white py-8 ${
          isAtBeginning ? "hidden" : "block"
        }`}
      ></div>
      <div
        onScroll={onScroll}
        className="overflow-x-auto bg-white"
        ref={listInnerRef}
      >
        <ul className="flex">
          {items.map((item: any) => (
            <li key={item.label}>
              <a
                href={createURL(item.value)}
                className={`m-1 inline-block whitespace-nowrap rounded-md border border-primary p-2 text-sm hover:opacity-80 lg:text-base ${
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
      <div
        className={`pointer-events-none absolute right-0  bottom-0 flex w-10 justify-center bg-gradient-to-l from-white py-8 ${
          isAtEnd ? "hidden" : "block"
        }`}
      ></div>
    </div>
  );
};

const CustomMenu = connectMenu(Menu);

export default CustomMenu;
