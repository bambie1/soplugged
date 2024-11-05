export const TableOfContents = ({
  blocks,
}: {
  blocks: { children: { text: string }[] }[];
}) => {
  const getText = (block: any) =>
    block.children.map((child: any) => child.text || "").join(" ") ||
    "Untitled";

  if (!blocks?.length) {
    return null;
  }

  return (
    <div className="mb-10">
      <p className="uppercase">Table of contents</p>

      <ul>
        {blocks.map((block, index) => (
          <li key={index}>{getText(block)}</li>
        ))}
      </ul>
    </div>
  );
};
