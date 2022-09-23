import Link from "next/link";
import { FC, useEffect, useState } from "react";

const features = [
  { title: "Websites", class: "from-black to-accent-dark" },
  { title: "Social content", class: "from-black to-secondary" },
  { title: "Photography", class: "from-primary to-accent" },
];

const ProHero: FC = () => {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) =>
        prevIndex === features.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="my-container relative flex flex-col items-center justify-center">
        <div className="relative mx-auto flex flex-col items-center pt-10 text-center md:pt-20">
          <h1 className="relative mx-auto mb-3 pb-2 text-6xl font-bold transition duration-1000 lg:mb-6 lg:max-w-5xl lg:text-7xl xl:text-[5rem]">
            <span
              key={textIndex}
              className={`roll-out inline-block bg-gradient-to-l ${features[textIndex].class} bg-clip-text pb-2 text-transparent`}
            >
              {features[textIndex].title}
            </span>{" "}
            your <br></br>customers will love
          </h1>
          <p className="text-lg font-light lg:max-w-3xl lg:text-xl xl:text-2xl">
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
        <img
          loading="lazy"
          src="/brandbird.webp"
          alt=""
          className="hidden md:block"
        />
        <img
          loading="lazy"
          src="/mobile_brandbird.webp"
          alt=""
          className="md:hidden"
        />
      </div>
    </>
  );
};

export default ProHero;
