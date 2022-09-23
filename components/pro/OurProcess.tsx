const steps = [
  { title: "Book consult", image: "/doodles/video-camera.svg" },
  { title: "We get to work", image: "/doodles/pen-tool.svg" },
  { title: "Ready to launch", image: "/doodles/plane.svg" },
];

const OurProcess = () => {
  return (
    <div className="w-full">
      <div className="relative mx-auto flex max-w-3xl items-center gap-20">
        {steps.map(({ title, image }, index) => (
          <div
            className="flex max-w-[5rem] flex-col items-center text-center"
            key={title}
          >
            <div
              className={`flex aspect-square w-10 rounded-full ${
                index % 2 === 0 ? "bg-gradient-to-r" : "bg-gradient-to-b"
              } from-accent-dark to-black p-3 lg:w-24 lg:p-6`}
            >
              <img src={image} alt="" />
            </div>
            <p>{title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProcess;
