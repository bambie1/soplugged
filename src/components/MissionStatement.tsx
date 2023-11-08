import { ButtonLink } from "@/styled/ButtonLink";
import Image from "next/image";

const MissionStatement = () => {
  return (
    <div className="relative flex min-h-[10rem] bg-light lg:min-h-[40rem]">
      <div className="mx-auto grid w-full gap-8 lg:max-w-7xl lg:px-8 2xl:max-w-screen-2xl">
        <div className="relative aspect-video w-full lg:hidden">
          <Image
            src="/nina_and_ben.jpeg"
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex h-full max-w-xl flex-col justify-center px-4 pb-8 sm:px-6 lg:py-10 xl:py-20 2xl:max-w-3xl">
          <h2 className="mb-4 text-3xl font-semibold text-primary xl:text-4xl">
            AMPLIFYING the voices of Black entrepreneurs in Canada
          </h2>
          <div className="prose text-black lg:prose-lg">
            <p className="mb-2">
              We started SoPlugged in 2021 to empower Black entrepreneurs by
              sharing inspiring stories, practical tips, and valuable insights
              from successful Black entrepreneurs in Canada.
            </p>
            <p>
              Since then, we've empower Black entrepreneurs by sharing inspiring
              stories, practical tips, and value.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <ButtonLink href="/our-story" variant="filled" className="mt-8">
              Learn More
            </ButtonLink>
            <ButtonLink href="/join" className="mt-8">
              Join our community
            </ButtonLink>
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-0 bottom-0 hidden w-[45%] lg:block">
        <Image
          src="/nina_and_ben.jpeg"
          alt=""
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default MissionStatement;
