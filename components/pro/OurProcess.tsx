import { usePlausible } from "next-plausible";

import { ButtonLink } from "@/styled/ButtonLink";
import { ProCTAType } from "@/types/Plausible";

const steps = [
  {
    title: "Book consult",
    body: "We discuss your business needs, where we can help and timeline expectations",
    image: "/doodles/video-camera.svg",
  },
  {
    title: "We get to work",
    body: "We have a close-collaboration process where we send you regular updates to keep you in the loop",
    image: "/doodles/pen-tool.svg",
  },
  {
    title: "Ready to launch",
    body: "After proper testing, we set up a thorough onboarding for you, and strategize a launch plan!",
    image: "/doodles/plane.svg",
  },
];

const OurProcess = () => {
  const plausible = usePlausible();

  return (
    <div
      id="our-process"
      className="my-container mt-36 flex max-w-xl scroll-mt-20 flex-col items-center lg:mt-40"
    >
      <h2 className="mb-10 text-3xl font-semibold lg:mb-20 lg:text-5xl">
        How it works
      </h2>
      <div className="relative mx-auto mb-10 flex flex-col gap-4 lg:mb-20 lg:flex-row xl:justify-center xl:gap-20">
        <div className="absolute top-4 bottom-4 left-4 w-[1px] border border-dashed border-accent-dark"></div>
        {steps.map(({ title, image, body }, index) => (
          <div
            className="relative flex w-full flex-col rounded-lg border border-accent/40 bg-white py-3 px-2 xl:w-[20rem] xl:items-center xl:border-none xl:bg-none xl:text-center"
            key={title}
          >
            {index === 0 && (
              <img
                alt=""
                src="/doodles/up_right_arrow.svg"
                className="absolute -right-10 -top-6 hidden w-10 xl:-right-20 xl:block xl:w-20"
              />
            )}
            {index === 1 && (
              <img
                alt=""
                src="/doodles/down_right_arrow.svg"
                className="absolute -right-10 -bottom-6 hidden w-10 xl:-right-20 xl:block xl:w-20"
              />
            )}
            <div
              className={`flex aspect-square w-10 rounded-full ${
                index % 2 === 0 ? "bg-gradient-to-r" : "bg-gradient-to-b"
              } mb-2 from-accent to-white p-3 xl:w-24 xl:p-7`}
            >
              <img src={image} alt="" />
            </div>
            <p className="mb-2 text-lg font-medium uppercase leading-tight lg:text-xl">
              {title}
            </p>
            <p className="text-base">{body}</p>
          </div>
        ))}
      </div>

      <ButtonLink
        href="#book-consult"
        variant="outlined"
        showArrow
        onClick={() =>
          plausible("Book consult CTA", {
            props: { position: "Our process" } as ProCTAType,
          })
        }
      >
        Get started
      </ButtonLink>
    </div>
  );
};

export default OurProcess;
