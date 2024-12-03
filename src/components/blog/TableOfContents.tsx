import clsx from "clsx";
import Link from "next/link";
import slugify from "slugify";

export const TableOfContents = ({
  blocks,
  isDark = false,
}: {
  blocks: { children: { text: string }[] }[];
  isDark?: boolean;
}) => {
  const getText = (block: any) => {
    const text =
      block.children.map((child: any) => child.text || "").join(" ") ||
      "Untitled";

    const slug = slugify(text, { lower: true });

    return {
      text,
      slug,
    };
  };

  if (!blocks?.length) {
    return null;
  }

  return (
    <div className="mb-10 hidden lg:block">
      <p className="font-semibold">On this page</p>

      <ul
        className={clsx(
          "mt-4 space-y-2",
          isDark ? "text-gray-400" : "text-gray-700",
        )}
      >
        {blocks.map((block, index) => {
          const { text, slug } = getText(block);
          return (
            <li key={index} className="text-sm">
              <Link href={`#${slug}`}>{text}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
