import { ButtonLink } from "@/styled/ButtonLink";

const steps = [
  {
    title: "Book consult",
    body: "We discuss your business needs and ideas",
    image: "/doodles/video-camera.svg",
  },
  {
    title: "We get to work",
    body: "Designs, mood boards, iterations",
    image: "/doodles/pen-tool.svg",
  },
  {
    title: "Ready to launch",
    body: "After testing, we hand over the website to you and properly onboard you",
    image: "/doodles/plane.svg",
  },
];

const OurProcess = () => {
  return (
    <div
      id="our-process"
      className="my-container mt-14 flex scroll-mt-20 flex-col items-center lg:mt-40 xl:mt-56"
    >
      <h2 className="mb-10 text-3xl font-semibold lg:mb-20 lg:text-5xl">
        How it works
      </h2>
      <div className="relative mx-auto mb-10 flex flex-wrap justify-center gap-10 lg:mb-20 lg:gap-20">
        {steps.map(({ title, image, body }, index) => (
          <div
            className="relative flex flex-col items-center text-center lg:w-[20rem]"
            key={title}
          >
            {index === 0 && (
              <img
                alt=""
                src="/doodles/up_right_arrow.svg"
                className="absolute -right-10 -top-6 w-10 lg:-right-20 lg:w-20"
              />
            )}
            {index === 1 && (
              <img
                alt=""
                src="/doodles/down_right_arrow.svg"
                className="absolute -right-10 -bottom-6 w-10 lg:-right-20 lg:w-20"
              />
            )}
            <div
              className={`flex aspect-square w-10 rounded-full ${
                index % 2 === 0 ? "bg-gradient-to-r" : "bg-gradient-to-b"
              } mb-2 from-accent to-white p-3 lg:w-24 lg:p-7`}
            >
              <img src={image} alt="" />
            </div>
            <p className="mb-2 text-lg font-medium uppercase leading-tight lg:text-xl">
              {title}
            </p>
            <p className="text-base leading-tight">{body}</p>
          </div>
        ))}
      </div>

      <ButtonLink href="#book-consult" variant="outlined" showArrow>
        Get started
      </ButtonLink>
    </div>
  );
};

export default OurProcess;
