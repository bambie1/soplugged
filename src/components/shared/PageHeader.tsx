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
    <div className="relative mb-10 overflow-hidden bg-light px-4 pb-10 pt-36 text-center lg:mb-16 lg:pt-40">
      <div className="absolute left-0 right-0 top-0">
        <img src="/header_pattern.svg" alt="" className="w-full opacity-30" />
      </div>

      <span>
        {preTitle && (
          <p className="mb-2 font-medium uppercase text-primary lg:text-lg">
            {preTitle}
          </p>
        )}
      </span>
      <h1 className="text-primary">{title}</h1>
      <p className="mt-2 text-primary lg:text-lg">{description}</p>

      {children}
    </div>
  );
};
