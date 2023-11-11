import Image from "next/image";

import { ButtonLink } from "@/styled/ButtonLink";

const PluggedInAd = () => {
  return (
    <div className="my-container mt-10 lg:mt-0">
      <div className="relative mt-4 w-full gap-10 overflow-hidden rounded-lg bg-white py-16 px-8 text-center shadow-md shadow-primary/50 backdrop-blur-[1px] md:p-10 lg:grid-cols-5 lg:rounded-xl xl:py-24 xl:px-16">
        <div className="absolute inset-0 -z-10 opacity-20">
          <Image src="/illustrations/texture.jpeg" alt="" layout="fill" />
        </div>
        <h3 className="mb-4 inline-flex flex-wrap justify-center text-5xl font-extrabold text-primary sm:text-6xl lg:text-7xl">
          PluggedIn
          <span className="outlinedText ml-1">2024</span>
        </h3>

        <p className="prose mx-auto max-w-2xl lg:prose-lg">
          Come Network with fellow business-owners, share ideas and learn{" "}
          <span className="underline lg:block">
            How to Scale Your Small Business Successfully
          </span>
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          <p>Toronto, ON</p>
          <span className="h-2 w-2 shrink-0 rounded-full bg-primary"></span>
          <p>February 17, 2024</p>
        </div>

        <ButtonLink href="/pluggedin" className="mt-10" variant="outlined">
          Join the waitlist
        </ButtonLink>
      </div>
    </div>
  );
};

export default PluggedInAd;
