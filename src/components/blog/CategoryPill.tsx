import { FC } from "react";

import { BlogCategory } from "@/types/BlogCategory";

interface Props {
  category: BlogCategory;
  isTiny?: boolean;
}

const CategoryPill: FC<Props> = ({ category, isTiny }) => {
  const { title, color } = category;

  const { r, g, b } = color.rgba;
  const bgColor = `rgba(${r}, ${g}, ${b}, .2)`;

  if (isTiny)
    return (
      <span
        key={title}
        className={`relative inline-flex items-center rounded-full px-3 py-0.5 text-sm font-light uppercase text-primary`}
      >
        <span
          style={{ background: bgColor }}
          className="absolute top-0 left-0 aspect-square w-4 rounded-full"
        ></span>
        {title}
      </span>
    );

  return (
    <span
      key={title}
      style={{ background: bgColor }}
      className={`inline-flex items-center rounded-full border px-3 py-0.5 text-sm text-primary`}
    >
      {title}
    </span>
  );
};

export default CategoryPill;
