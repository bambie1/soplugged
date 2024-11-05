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
    <div className="mb-6 mt-4 pb-10 text-center lg:mb-10">
      <div className="padded relative overflow-hidden bg-light py-12 md:rounded-2xl lg:py-20">
        <div className="absolute -top-10 left-0 right-0">
          <img src="/header_pattern.svg" alt="" className="w-full opacity-30" />
        </div>

        <div className="padded">
          <span>
            {preTitle && (
              <p className="mb-2 font-medium uppercase text-primary lg:text-lg">
                {preTitle}
              </p>
            )}
          </span>
          <h1 className="mx-auto mb-4 max-w-3xl text-primary">{title}</h1>
          <p className="text-primary lg:text-lg">{description}</p>

          {children}
        </div>
      </div>
    </div>
  );
};
