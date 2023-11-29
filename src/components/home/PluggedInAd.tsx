import Image from "next/image";

const PluggedInAd = () => {
  return (
    <div className="my-container mt-10 text-white lg:mt-0">
      <div className="relative mt-4 w-full gap-10 overflow-hidden rounded-lg bg-pluggedin-black py-16 px-8 text-center md:p-10 lg:grid-cols-5 lg:rounded-xl xl:py-24 xl:px-16">
        <div className="absolute inset-0">
          <Image
            src="/background_dots.png"
            alt=""
            layout="fill"
            objectFit="contain"
            objectPosition="center"
          />
        </div>

        <div className="relative z-10">
          <h3 className="mb-4 inline-flex flex-wrap justify-center text-5xl font-extrabold text-white sm:text-6xl lg:text-7xl">
            PluggedIn
            <span className="stroke-text ml-1 text-pluggedin-pink">2024</span>
          </h3>

          <p className="prose mx-auto max-w-2xl text-white lg:prose-lg">
            Come Network with fellow business-owners, share ideas and learn{" "}
            <span className="underline lg:block">
              How to Scale Your Business Successfully
            </span>
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            <p>Toronto, ON</p>
            <span className="h-2 w-2 shrink-0 rounded-full bg-pluggedin-pink"></span>
            <p>February 17, 2024</p>
          </div>

          <a
            href="https://pluggedin.soplugged.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-pink mt-10 inline-flex rounded-full bg-white px-4 py-3 font-medium text-pluggedin-black transition duration-200 hover:bg-pluggedin-pink hover:text-black"
          >
            Join the waitlist
          </a>
        </div>
      </div>
    </div>
  );
};

export default PluggedInAd;
