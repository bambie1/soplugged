export const SubscribeBanner = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="bg-light">
      <div className="padded page-section grid gap-8 lg:grid-cols-2">
        <div className="">
          <h2 className="mb-2">{title}</h2>
          <p>{subtitle}</p>
        </div>
      </div>
    </div>
  );
};
