export const SearchResults = ({ businesses }: { businesses?: any[] }) => {
  return (
    <div className="mt-10 grid gap-6 px-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-8">
      {businesses?.map((business) => {
        const mainImage = business.sample_images?.split(",")[0];

        return (
          <div key={business} className="">
            <div className="aspect-video border">
              {mainImage && (
                <img
                  src={mainImage}
                  alt=""
                  className="h-full w-full object-cover"
                />
              )}
            </div>

            <p className="text-primary">
              {business.business_name} ({business.confidence_rating})
            </p>
          </div>
        );
      })}
    </div>
  );
};
