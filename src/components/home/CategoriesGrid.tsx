import { FC } from "react";
import Image from "next/image";
import classNames from "classnames";

import useAlgolia from "@/hooks/useAlgolia";
import { popularCategories } from "@/lib/popularCategories";

const CategoriesGrid: FC = () => {
  const { handleCategoryClick } = useAlgolia();

  return (
    <div className="relative">
      <ul className="grid grid-cols-2 gap-4 px-4 md:grid-cols-6">
        {popularCategories.map(({ title, url }, index) => (
          <li
            key={url}
            className={classNames("", {
              "": index === 0,
              "mt-10": index === 1,
              "-mt-10 md:mt-0": index === 2 || index === 4,
              "md:mt-10": index === 3 || index === 5,
            })}
          >
            <button
              className="relative flex aspect-[4/5] w-full flex-col items-center overflow-hidden rounded-lg"
              onClick={() => handleCategoryClick(title)}
            >
              <div className="absolute inset-0 flex h-full w-full  bg-secondary/20"></div>

              <Image src={url} objectFit="cover" alt="" layout="fill" />
              <div className="absolute bottom-0 flex w-full items-center bg-gradient-to-t from-black to-black/5 py-2 px-2">
                <p className="text-sm text-white">{title}</p>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesGrid;
