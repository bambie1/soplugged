const locationImages = [
  {
    city: "Ottawa",
    url: "https://cdn.pixabay.com/photo/2015/06/19/22/58/ottawa-815375__340.jpg",
  },
  {
    city: "Toronto",
    url: "https://cdn.pixabay.com/photo/2016/05/31/04/21/toronto-1426205__340.jpg",
  },
  {
    city: "Calgary",
    url: "https://cdn.pixabay.com/photo/2012/12/19/04/04/calgary-70848__480.jpg",
  },
  {
    city: "Mississauga",
    url: "https://cdn.pixabay.com/photo/2014/07/30/18/26/high-rise-405523__480.jpg",
  },
  {
    city: "Guelph",
    url: "https://cdn.pixabay.com/photo/2014/07/30/18/26/high-rise-405523__480.jpg",
  },
  {
    city: "Hamilton",
    url: "https://cdn.pixabay.com/photo/2014/07/30/18/26/high-rise-405523__480.jpg",
  },
];

const FilterByLocation = () => {
  return (
    <section className="mt-20 mb-20 bg-secondary/[.12] pt-10 pb-12">
      <div className="my-container grid">
        <h2 className="text-2xl lg:text-3xl font-bold mb-1 text-center">
          Find by location
        </h2>
        <p className="text-center lg:text-lg">
          There is a black-owned business near you
        </p>
        <div className="mt-10">
          <ul className="grid grid-cols-2 lg:flex gap-3 xl:gap-10 flex-wrap justify-center">
            {locationImages.map(({ city }) => (
              <li
                key={city}
                className="lg:w-[20%] relative overflow-hidden border border-black rounded-lg aspect-[2/1] flex items-center justify-center"
              >
                <p className="uppercase">{city}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FilterByLocation;
