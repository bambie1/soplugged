const guides = [...Array(4)];

const HomeGuides = () => {
  return (
    <div className="my-container mt-20 grid items-center gap-4 lg:grid-cols-2 lg:gap-8">
      <div className="flex flex-col items-start">
        <h2 className="mb-4 text-3xl font-bold xl:text-4xl">
          Getting-started guides
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat a
          pellentesque arcu, sapien. Luctus ut fermentum urna dolor. Fringilla
          sit est at amet justo nec. Quam eli.
        </p>
      </div>

      <div className="overflow-x-auto">
        <ul className="inline-flex gap-2 lg:grid lg:grid-cols-2">
          {guides.map((guide, index) => (
            <div
              key={index}
              className="aspect-video w-36 rounded-lg border border-black lg:w-full"
            ></div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomeGuides;
