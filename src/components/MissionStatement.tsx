import Image from "next/legacy/image";

import { ButtonLink } from "@/styled/ButtonLink";

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
          <h2 className="mb-4 max-w-2xl text-3xl font-semibold text-primary xl:text-4xl">
            Empowering Black entrepreneurs across Canada
          </h2>
          <div className="prose text-black lg:prose-lg">
            <p className="mb-2">
              Our mission is to foster a vibrant community of like-minded
              individuals, committed to breaking down barriers and creating
              opportunities for growth and success in the entrepreneurial
              landscape.
            </p>
            <p>
              Through collaboration, education, and mentorship, we strive to
              uplift and celebrate the achievements of Black entrepreneurs,
              paving the way for a more inclusive and diverse future in the
              Canadian business ecosystem.
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
