import Link from "next/link";
import useAlgolia from "@/hooks/useAlgolia";

const locationImages = [
  {
    city: "Ottawa, ON",
    cityFull: "Ottawa, ON, Canada",
    url: "https://images.unsplash.com/photo-1572955304332-bf714bd49add?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    category: "Hair & Beauty",
    categoryFull: "Hair / Beauty",
  },
  {
    city: "Calgary, AB",
    cityFull: "Calgary, AB, Canada",
    url: "https://images.unsplash.com/photo-1615557509870-98972c5e1396?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    category: "Baking & Catering",
    categoryFull: "Baking / Catering",
  },
  {
    city: "Toronto, ON",
    cityFull: "Toronto, ON, Canada",
    url: "https://images.unsplash.com/photo-1648328168368-3a25f2152802?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=722&q=80",
    category: "Fashion",
    categoryFull: "Fashion",
  },
  {
    city: "Hamilton, ON",
    cityFull: "Hamilton, ON, Canada",
    url: "https://images.unsplash.com/photo-1607083206139-7c5b07e66ac3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z2lmdGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    category: "Handcraft & Gifting",
    categoryFull: "Handcraft / Gifting Services",
  },
  {
    city: "Edmonton, AB",
    cityFull: "Edmonton, AB, Canada",
    url: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZXZlbnQlMjBwbGFubmluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    category: "Event planning",
    categoryFull: "Event Planning",
  },
];

const FilterByLocation = () => {
  const { handleCategoryAndLocation } = useAlgolia();

  const renderHeading = () => {
    return (
      <>
        <h2 className="mb-1 text-3xl font-bold xl:text-4xl">
          <span className="relative text-primary">
            Filter by location
            <span className="absolute left-0 -bottom-1 h-3 w-full -rotate-2 bg-secondary/40" />
          </span>
        </h2>
        <p className="font-medium lg:mb-4 lg:text-lg">
          There is a black-owned business near you
        </p>
      </>
    );
  };

  return (
    <section className="light-gradient relative mt-20 mb-20 pt-5 pb-12 lg:pt-10">
      <div className="my-container grid items-center gap-12 lg:grid-cols-2 lg:gap-10">
        <div className="text-center lg:hidden">{renderHeading()}</div>
        <div className="mt-10">
          <ul className="flex flex-col flex-wrap gap-8 md:flex-row md:justify-center lg:gap-12">
            {locationImages.map(
              ({ city, cityFull, category, url, categoryFull }) => (
                <li
                  key={city}
                  className="group relative odd:ml-4 odd:self-start even:self-end md:odd:ml-0 md:odd:self-auto md:even:self-auto"
                >
                  <img
                    src={url}
                    alt=""
                    className="absolute -top-5 -left-5 z-[1] aspect-square w-14 rounded-full border-2 border-transparent object-cover shadow-lg transition duration-200 group-hover:border-primary group-hover:shadow-none"
                  />
                  <button
                    className="relative flex flex-1 flex-col items-center justify-center overflow-hidden rounded-lg border border-transparent bg-white px-6 py-3 shadow-md transition duration-200 hover:border-primary hover:shadow-none"
                    onClick={() =>
                      handleCategoryAndLocation(categoryFull, cityFull)
                    }
                  >
                    <p className="mx-5 mb-2 font-semibold">{category}</p>
                    <p className="text-lg uppercase">{city}</p>
                  </button>
                </li>
              )
            )}
          </ul>
        </div>
        <div>
          <div className="hidden lg:block">{renderHeading()}</div>

          <p className="text-base">
            It's time to stop searching. We're here to help you find the best
            black-owned businesses in your city with the click of a button. Find
            everything from restaurants, hairstylists and salons to tutoring,
            tech and healthcare services.
          </p>
          <Link href="/search">
            <a className="group mt-6 inline-flex items-center gap-2 border-b border-primary transition duration-200 hover:font-semibold lg:text-lg">
              Explore businesses
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 transition duration-200 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FilterByLocation;
