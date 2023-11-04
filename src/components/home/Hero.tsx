import Image from "next/image";
import { MicrophoneIcon } from "@heroicons/react/solid";

import { ButtonLink } from "@/styled/ButtonLink";

const Hero = () => {
  return (
    <div className="relative overflow-x-hidden">
      <div className="absolute top-0 left-0 right-0 bottom-20 bg-light"></div>
      <div className="my-container flex flex-col py-10 text-center lg:pt-0 lg:text-left">
        <section className="relative flex-1 items-center justify-between gap-10 py-5 lg:flex lg:py-0">
          <div className="relative flex w-full max-w-2xl shrink-0 flex-col items-start">
            <a
              href="https://tbmpodcast.soplugged.com/"
              target="_blank"
              rel="noreferrer"
              className="group mb-4 flex items-center gap-4 rounded-full bg-secondary/30 py-1 px-4 pl-2 text-sm transition duration-150 hover:bg-secondary/50"
            >
              <MicrophoneIcon className="h-4 w-4 text-primary" />

              <span className="ml-0 transition-all duration-150 group-hover:ml-2">
                Check out The Business Mindset Podcast
              </span>
            </a>
            <h1 className="text-5xl font-semibold tracking-tight text-primary sm:text-6xl">
              A Thriving Community of Black Entrepreneurs
            </h1>
            <p className="mt-3 text-gray-700 lg:w-[80%] lg:text-lg">
              Our free directory makes it easy to support Black entrepreneurs
              and discover new products and services in your area.
            </p>

            <div className="mt-10 flex items-center gap-4">
              <ButtonLink href="/join" variant="filled">
                Join the Community
              </ButtonLink>
              <ButtonLink href="/partners" variant="text">
                Become a Partner
              </ButtonLink>
            </div>
          </div>
          <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-7 lg:pl-0">
            <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
              <HeroImage url="/people/nina_and_toffy.jpeg" />
            </div>
            <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
              <HeroImage url="/people/group_1.jpeg" />
              <HeroImage url="/people/leon_suave.jpeg" />
            </div>
            <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
              <HeroImage url="/people/large_group.jpeg" />
              <HeroImage url="/people/group_2.jpeg" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

const HeroImage = ({ url }: { url: string }) => (
  <div className="relative">
    <img
      src={url}
      alt=""
      className="aspect-[2/3] w-full rounded-xl bg-primary/5 object-cover shadow-lg"
    />
    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-primary/10" />
  </div>
);

export default Hero;
