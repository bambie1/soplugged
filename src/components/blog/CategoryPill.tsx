import { FC } from "react";

import { BlogCategory } from "@/types/BlogCategory";

interface Props {
  category: BlogCategory;
}

const CategoryPill: FC<Props> = ({ category }) => {
  const { title, color } = category;

  const { r, g, b } = color.rgba;
  const bgColor = `rgba(${r}, ${g}, ${b}, .2)`;

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
