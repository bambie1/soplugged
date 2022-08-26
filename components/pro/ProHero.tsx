import Link from "next/link";
import { FC } from "react";

const ProHero: FC = () => {
  return (
    <div className="my-container relative grid min-h-[90vh] gap-10 lg:grid-cols-5">
      <div className="flex h-full w-full flex-col justify-center py-10 text-center lg:col-span-3 lg:items-start lg:text-left">
        <h1 className="mb-6 text-4xl font-bold lg:pr-10 lg:text-6xl">
          Grow your <span className="text-accent-dark">business</span> with ease
        </h1>
        <p className="lg:w-[90%] lg:text-xl">
          Get strategic recommendations and professional services when you work
          with us on anything
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 lg:flex-row">
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
      <aside className="relative flex flex-1 items-center justify-center px-10 lg:col-span-2 lg:py-10">
        <div className="absolute bottom-0 -left-6 -z-[1] aspect-square w-48 animate-blob rounded-full bg-accent opacity-40 mix-blend-multiply blur-xl filter lg:-left-20 lg:w-96"></div>
        <div className="animation-delay-2000 absolute bottom-6 -right-6 -z-[1] aspect-square w-48 animate-blob rounded-full bg-secondary opacity-40 mix-blend-multiply blur-xl filter lg:-right-20 lg:w-96"></div>

        <img
          src="/instagram_reel.svg"
          alt="2 iPhones placed side-by-side displaying instagram reels"
        />
      </aside>
    </div>
  );
};

export default ProHero;
