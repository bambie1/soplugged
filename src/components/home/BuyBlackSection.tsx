export const BuyBlackSection = ({ content }: { content: any }) => {
  return (
    <div className="page-section lg:pt-36">
      <div className="padded">
        <h2 className="mx-auto max-w-md text-center">{content.title}</h2>
      </div>
    </div>
  );
};
