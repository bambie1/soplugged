import { FC } from "react";
import Image from "next/image";
import classNames from "classnames";

import useAlgolia from "@/hooks/useAlgolia";
import { popularCategories } from "@/lib/popularCategories";

const CategoriesGrid: FC = () => {
  const { handleCategoryClick } = useAlgolia();

  return (
    <div className="relative">
      <ul className="grid grid-cols-2 gap-4 px-4 md:grid-cols-6 lg:grid-cols-3 lg:px-0">
        {popularCategories.map(({ title, url }, index) => (
          <li
            key={url}
            className={classNames("", {
              "lg:col-start-3": index === 0,
              "mt-10 lg:col-start-3 lg:row-start-2 lg:mt-0": index === 1,
              "-mt-10 md:mt-0 lg:col-start-2 lg:row-start-2 lg:mt-0":
                index === 2,
              "md:mt-10 lg:row-start-3 lg:mt-0": index === 3,
              "-mt-10 md:mt-0 lg:col-start-2 lg:row-start-3 lg:mt-0":
                index === 4,
              "md:mt-10 lg:col-start-3 lg:row-start-3 lg:mt-0": index === 5,
            })}
          >
            <button
              className="relative flex aspect-[4/5] w-full flex-col items-center overflow-hidden rounded-lg"
              onClick={() => handleCategoryClick(title)}
            >
              <div className="absolute inset-0 z-[2] flex h-full w-full  bg-secondary/20"></div>

              <Image src={url} objectFit="cover" alt="" layout="fill" />
              <div className="absolute bottom-0 flex h-[30%] w-full items-center bg-gradient-to-t from-black to-transparent pl-4">
                <p className="text-sm text-white">{title}</p>
              </div>
            </button>
          </li>
        ))}
      </ul>

      <div className="absolute -bottom-40 -right-40 -z-10 h-96 w-96 rounded-full bg-gradient-to-t from-white to-secondary/40 " />
    </div>
  );
};

export default CategoriesGrid;
