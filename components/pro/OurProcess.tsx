const steps = [
  { title: "Book consult", image: "/doodles/video-camera.svg" },
  { title: "We get to work", image: "/doodles/pen-tool.svg" },
  { title: "Ready to launch", image: "/doodles/plane.svg" },
];

const OurProcess = () => {
  return (
    <div className="my-container my-10">
      <div className="relative mx-auto flex max-w-3xl items-center justify-center gap-10 lg:gap-20">
        {steps.map(({ title, image }, index) => (
          <div
            className="relative flex max-w-[7rem] flex-col items-center text-center"
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
            <p className="font-medium leading-tight">{title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProcess;
