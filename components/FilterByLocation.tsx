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
  {
    city: "Guelph",
    cityFull: "Guelph, ON, Canada",
    url: "https://cdn.pixabay.com/photo/2014/07/30/18/26/high-rise-405523__480.jpg",
  },
  {
    city: "Hamilton",
    cityFull: "Hamilton, ON, Canada",
    url: "https://cdn.pixabay.com/photo/2014/07/30/18/26/high-rise-405523__480.jpg",
  },
];

const FilterByLocation = () => {
  const { handleLocationClick } = useAlgolia();

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
            {locationImages.map(({ city, cityFull }) => (
              <li
                key={city}
                className="lg:w-[20%] relative overflow-hidden border border-black rounded-lg flex items-center justify-center"
              >
                <button
                  className="flex-1 aspect-[2/1]"
                  onClick={() => handleLocationClick(cityFull)}
                >
                  <p className="uppercase">{city}</p>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FilterByLocation;
