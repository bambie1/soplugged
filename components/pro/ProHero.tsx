import Link from "next/link";
import { FC } from "react";

const ProHero: FC = () => {
  return (
    <>
      <div className="my-container relative flex items-center justify-center">
        <div className="relative mx-auto flex flex-col items-center py-10 text-center md:py-20">
          <div className="absolute top-40 -left-10 flex aspect-square w-16 rounded-full bg-accent-dark/5 p-4 lg:-left-60 lg:top-40 lg:w-20 lg:animate-pulse-slow lg:p-6">
            <img
              src="/doodles/bag.svg"
              className="object-contain opacity-60"
              alt=""
            />
          </div>
          <div className="absolute top-80 left-0 flex aspect-square w-16 rounded-full bg-secondary/5 p-4 lg:-left-24 lg:top-96 lg:w-20 lg:animate-bounce-slow lg:p-6">
            <img
              src="/doodles/globe.svg"
              className="object-contain opacity-60"
              alt=""
            />
          </div>
          <div className="absolute top-0 -right-10 flex aspect-square w-16 rounded-full bg-black/5 p-4 lg:-right-60 lg:top-40 lg:w-20 lg:animate-bounce-slow lg:p-6">
            <img
              src="/doodles/camera.svg"
              className="object-contain opacity-60"
              alt=""
            />
          </div>
          <div className="absolute top-64 right-0 flex aspect-square w-16 rounded-full bg-accent/5 p-4 lg:-right-24 lg:top-96 lg:w-20 lg:animate-pulse-slow lg:p-6">
            <img
              src="/doodles/instagram.svg"
              className="object-contain opacity-60"
              alt=""
            />
          </div>
          <h1 className="relative mx-auto mb-3 bg-gradient-to-r from-black to-accent-dark bg-clip-text pb-2 text-6xl font-bold text-transparent lg:mb-6 lg:max-w-5xl lg:text-7xl xl:text-[6rem]">
            Digital experiences <br></br>your customers <br></br>will love
          </h1>
          <p className="font-light lg:max-w-3xl lg:text-xl xl:text-2xl">
            Hire our team of experts to handle your digital needs, from custom
            websites to social media management
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 lg:mt-20 lg:flex-row">
            <Link href="#book-consult">
              <a className="rounded-md bg-black px-4 py-3 text-lg text-white transition duration-200 hover:-translate-y-1 focus-visible:outline-offset-2 lg:py-4 lg:px-5 lg:text-xl">
                Book a FREE consultation
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProHero;
