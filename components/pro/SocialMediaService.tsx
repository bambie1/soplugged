import Link from "next/link";

const SocialMediaService = () => {
  return (
    <div className="my-container relative grid lg:min-h-[90vh] lg:grid-cols-2 lg:gap-10">
      <aside className="relative flex flex-1 items-center justify-center px-10 py-10">
        <img
          src="/instagram_reel.svg"
          alt="2 iPhones placed side-by-side displaying instagram reels"
        />
      </aside>
      <div className="flex h-full w-full flex-col justify-center py-10 lg:items-start">
        <h1 className="mb-6 text-4xl font-bold lg:text-6xl">
          Full <span className="text-accent-dark">social media</span> management
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
    </div>
  );
};

export default SocialMediaService;
