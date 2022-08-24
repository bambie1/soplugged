const CustomWebsiteService = () => {
  return (
    <div className="relative flex h-screen snap-start">
      <div className="my-container flex flex-1">
        <div className="flex h-full w-full flex-1 flex-col justify-center pt-16 pb-10 lg:max-w-[60%] lg:items-start">
          <div className="flex min-h-0 justify-center lg:hidden">
            <img src="/instagram_reel.png" alt="" className="object-contain" />
          </div>

          <h1 className="mb-6 text-4xl font-bold lg:text-6xl">
            <span className="text-accent-dark lg:block">Custom-made</span>{" "}
            websites
          </h1>
          <p className="w-[90%] lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat a
            pellentesque arcu, sapien. Luctus ut fermentum urna dolor. Fringilla
            sit est at amet justo nec. Quam eli.
          </p>

          <a
            href="#book-consult"
            className="mt-10 inline-flex rounded-md bg-black px-4 py-3 text-white"
          >
            Book a FREE consultation
          </a>
        </div>
      </div>
      <aside className="absolute top-0 right-0 hidden h-full w-[40%] bg-gradient-to-b from-accent to-accent/5 lg:flex">
        <div className="flex flex-1 items-center justify-center p-10">
          <img src="/instagram_reel.png" alt="" className="" />
        </div>
      </aside>
    </div>
  );
};

export default CustomWebsiteService;
