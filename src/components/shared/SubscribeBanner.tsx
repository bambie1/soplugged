export const SubscribeBanner = ({
  title = "Never miss a SoPlugged event",
  subtitle = "Subscribe to our newsletter to stay up to date on all things SoPlugged.",
}: {
  title?: string;
  subtitle?: string;
}) => {
  return (
    <div className="bg-light text-black">
      <div className="padded page-section grid gap-8 lg:grid-cols-2">
        <div className="">
          <h2 className="mb-2">{title}</h2>
          <p>{subtitle}</p>
        </div>
      </div>
    </div>
  );
};
