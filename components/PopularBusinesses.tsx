import NewBusinessCard from "./NewBusinessCard";

const stagingBusinesses = [
  "https://cdn.pixabay.com/photo/2015/06/19/22/58/ottawa-815375__340.jpg",
  "https://cdn.pixabay.com/photo/2015/11/07/11/00/toronto-city-hall-1030731__480.jpg",
  "https://images.unsplash.com/photo-1608473657422-12b9f339652c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGFtaWx0b24lMjBvbnRhcmlvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
  "https://images.unsplash.com/photo-1574541647051-099cedfb7f8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZWRtb250b258ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
  "https://images.unsplash.com/photo-1483790488866-adee346370c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWlzc2lzc2F1Z2F8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
];

const prodBusinesses = ["jam-tutor"];

const PopularBusinesses = () => {
  // console.log(window.location.hostname);

  return (
    <section className="mt-20 mb-20 lg:mt-0 lg:mb-10 bg-secondary/[.15] pt-10 pb-12">
      <div className="my-container">
        {/* <h2 className="text-2xl lg:text-3xl font-bold mb-8">
          Find a business near you
        </h2> */}
        <div className="">
          <ul className="grid grid-cols-2 gap-7 lg:grid-cols-5">
            {stagingBusinesses.map((item) => (
              <li key={item} className="w-full relative overflow-hidden">
                <NewBusinessCard slug={item} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PopularBusinesses;
