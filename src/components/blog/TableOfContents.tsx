import Link from "next/link";
import slugify from "slugify";

export const TableOfContents = ({
  blocks,
}: {
  blocks: { children: { text: string }[] }[];
}) => {
  const getText = (block: any) => {
    const text =
      block.children.map((child: any) => child.text || "").join(" ") ||
      "Untitled";

    const slug = slugify(text);

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

      <ul className="mt-4 space-y-2 text-gray-700">
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
