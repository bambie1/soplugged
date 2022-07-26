const FilterByLocation = () => {
  return (
    <section className="mt-20 mb-20 bg-secondary/[.12] pt-10 pb-12">
      <div className="my-container grid">
        <h2 className="text-2xl lg:text-3xl font-bold mb-1 lg:text-center">
          Find by location
        </h2>
        <p className="text-center">There is a black-owned business near you</p>
        <div className="mt-10">
          <ul className="flex gap-10 flex-wrap justify-center">
            {[...Array(6)].map((item) => (
              <li
                key={item}
                className="w-[20%] relative overflow-hidden border border-black rounded-lg aspect-[2/1]"
              >
                Ottawa
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FilterByLocation;
