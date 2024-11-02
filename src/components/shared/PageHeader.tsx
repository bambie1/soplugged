export const PageHeader = ({
  preTitle,
  title,
  description,
  children,
}: {
  preTitle?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className="bg-light relative mb-10 mt-4 overflow-hidden rounded-lg p-10 text-center lg:mb-16 lg:rounded-2xl lg:p-20">
      <div className="absolute -left-20 -right-20 -top-20">
        <img src="/header_pattern.svg" alt="" className="w-full opacity-60" />
      </div>

      <span>
        {preTitle && (
          <p className="text-primary mb-2 text-lg font-semibold uppercase">
            {preTitle}
          </p>
        )}
      </span>
      <h1 className="text-primary text-xl font-bold tracking-tight lg:text-2xl xl:text-5xl">
        {title}
      </h1>
      <p className="text-primary mt-2 lg:text-lg">{description}</p>

      {children}
    </div>
  );
};
