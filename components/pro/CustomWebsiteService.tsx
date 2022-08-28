import Link from "next/link";

const CustomWebsiteService = () => {
  return (
    <div className="my-container relative mt-10 grid lg:mt-0 lg:min-h-[90vh] lg:grid-cols-2 lg:gap-10">
      <div className="flex h-full w-full flex-col justify-center py-10 lg:items-start">
        <h1 className="mb-6 text-4xl font-bold lg:text-6xl">
          <span className="text-accent-dark lg:block">Custom-made</span>{" "}
          websites
        </h1>
        <p className="lg:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat a
          pellentesque arcu, sapien. Luctus ut fermentum urna dolor. Fringilla
          sit est at amet justo nec. Quam eli.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link href="#book-consult">
            <a className="rounded-md bg-black px-4 py-3 text-white">
              Book a FREE consultation
            </a>
          </Link>
          <Link href="#custom-website">
            <a className="border-b border-black">Learn more</a>
          </Link>
        </div>
      </div>
      <aside className="relative row-start-1 flex flex-1 items-center justify-center px-10 py-10 lg:row-start-auto">
        <div className="absolute bottom-0 -left-20 -z-[1] aspect-square w-96 animate-blob rounded-full bg-gray-300 opacity-40 mix-blend-multiply filter"></div>

        <img
          src="/custom_website.svg"
          alt="2 iPhones placed side-by-side displaying instagram reels"
          className="z-[1]"
        />
      </aside>
    </div>
  );
};

export default CustomWebsiteService;
