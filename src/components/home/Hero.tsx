import { MicrophoneIcon } from "@heroicons/react/solid";

import { ButtonLink } from "@/styled/ButtonLink";

const Hero = () => {
  return (
    <div className="relative overflow-x-hidden">
      <div className="absolute top-0 left-0 right-0 bottom-60 bg-light lg:bottom-64"></div>
      <div className="my-container flex flex-col py-10">
        <div className="relative flex w-full max-w-3xl shrink-0 flex-col items-start lg:mt-20">
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
          <h1 className="text-5xl font-semibold tracking-tight text-primary sm:text-6xl lg:text-7xl">
            A Thriving Community of Black Entrepreneurs
          </h1>
          <p className="mt-3 text-gray-700 lg:text-lg">
            Our free directory makes it easy to support Black entrepreneurs and
            discover new products and services in your area.
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
        <div className="mt-20 hidden w-full grid-cols-5 items-center gap-6 overflow-hidden lg:grid [&>*:nth-child(even)]:mt-20">
          <HeroImage url="/people/nina_and_toffy.jpeg" />
          <HeroImage url="/people/group_1.jpeg" />
          <HeroImage url="/people/leon_suave.jpeg" />
          <HeroImage url="/people/large_group.jpeg" />
          <HeroImage url="/people/group_2.jpeg" />
        </div>
        <div className="mt-10 grid w-full grid-cols-2 items-center gap-4 overflow-hidden lg:hidden [&>*:nth-child(even)]:mt-20">
          <HeroImage url="/people/nina_and_toffy.jpeg" />
          <HeroImage url="/people/group_1.jpeg" />
        </div>
      </div>
    </div>
  );
};

const HeroImage = ({ url }: { url: string }) => (
  <div className="relative">
    <img
      src={url}
      alt=""
      className="pointer-events-none aspect-[3/4] w-full rounded-xl bg-primary/5 object-cover shadow-lg"
    />
    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-primary/10" />
  </div>
);

export default Hero;
