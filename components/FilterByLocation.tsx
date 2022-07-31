import useAlgolia from "@/hooks/useAlgolia";

const locationImages = [
  {
    city: "Ottawa",
    cityFull: "Ottawa, ON, Canada",
    url: "https://cdn.pixabay.com/photo/2015/06/19/22/58/ottawa-815375__340.jpg",
  },
  {
    city: "Toronto",
    cityFull: "Toronto, ON, Canada",
    url: "https://cdn.pixabay.com/photo/2016/05/31/04/21/toronto-1426205__340.jpg",
  },
  {
    city: "Calgary",
    cityFull: "Calgary, ON, Canada",
    url: "https://cdn.pixabay.com/photo/2012/12/19/04/04/calgary-70848__480.jpg",
  },
  {
    city: "Mississauga",
    cityFull: "Mississauga, ON, Canada",
    url: "https://cdn.pixabay.com/photo/2014/07/30/18/26/high-rise-405523__480.jpg",
  },
];

const FilterByLocation = () => {
  const { handleLocationClick } = useAlgolia();

  return (
    <section className="light-gradient relative mt-20 mb-20 pt-10 pb-12">
      <div className="my-container grid items-center gap-3 lg:grid-cols-2 lg:gap-10">
        <div className="mt-10">
          <ul className="flex-wrap justify-center gap-3 lg:flex">
            {locationImages.map(({ city, cityFull }) => (
              <li
                key={city}
                className="relative flex items-center justify-center overflow-hidden rounded-lg border border-black"
              >
                <button
                  className="flex-1 p-4"
                  onClick={() => handleLocationClick(cityFull)}
                >
                  <p className="uppercase">{city}</p>
                </button>
              </li>
            ))}
            {locationImages.reverse().map(({ city, cityFull }) => (
              <li
                key={city}
                className="relative flex items-center justify-center overflow-hidden rounded-lg border border-black"
              >
                <button
                  className="flex-1 p-4"
                  onClick={() => handleLocationClick(cityFull)}
                >
                  <p className="uppercase">{city}</p>
                </button>
              </li>
            ))}
          </ul>
        </div>
        <aside>
          <h2 className="text-3xl font-bold xl:text-4xl">
            <span className="relative text-primary">
              Filter by location
              <span className="absolute left-0 -bottom-1 h-3 w-full -rotate-2 bg-secondary/40" />
            </span>
          </h2>
          <p className="lg:text-lg">There is a black-owned business near you</p>
        </aside>
      </div>
    </section>
  );
};

export default FilterByLocation;
