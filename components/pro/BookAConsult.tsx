const BookAConsult = () => {
  return (
    <div className="my-container mt-20 grid gap-4 lg:grid-cols-2">
      <div id="book-consult" className="sr-only"></div>
      <div className="flex flex-col items-start">
        <h2 className="mb-4 text-3xl font-bold xl:text-4xl">
          Get started for <span className="relative inline-block">FREE</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat a
          pellentesque arcu, sapien. Luctus ut fermentum urna dolor. Fringilla
          sit est at amet justo nec. Quam eli.
        </p>
      </div>

      <div className="overflow-hidden rounded-lg border-2">Form goes here</div>
    </div>
  );
};

export default BookAConsult;
