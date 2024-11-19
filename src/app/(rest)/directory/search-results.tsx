export const SearchResults = () => {
  return (
    <div className="mt-10 grid gap-6 px-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-8">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="">
          <div className="aspect-video border"></div>
        </div>
      ))}
    </div>
  );
};
