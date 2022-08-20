const steps = [
  {
    title: "Discovery & Planning",
    description:
      "You'll be meeting with both our marketing specialist, and developer consultant. This is to understand your business needs and room for growth.",
    icon: "",
  },
  {
    title: "Mockup designs",
    description:
      "It is now time for our experts to roll up their sleeves to exceed your expectations! All you need to do, is keep on being an amazing entrepreneur, and we'll check in with you if needed.",
    icon: "",
  },
  {
    title: "Build & Launch",
    description:
      "If your request was for a website, we'll contact you once it's ready, and have a follow-up meeting to cross 't's and dot 'i's. And have a follow-up meeting to cross 't's and dot 'i's",
    icon: "",
  },
  {
    title: "Maintain & Support",
    description:
      "If your request was for a website, we'll contact you once it's ready, and have a follow-up meeting to cross 't's and dot 'i's. And have a follow-up meeting to cross 't's and dot 'i's",
    icon: "",
  },
];

const HowWeDoIt = () => {
  return (
    <section className="mt-20 flex">
      <div className="my-container flex flex-1 flex-col pt-12">
        <h2 className="text-center text-3xl font-bold xl:text-4xl">
          How we do it
        </h2>
        <div className="mx-auto mt-10 flex w-full max-w-4xl flex-1 flex-col gap-10 pb-8 md:mt-20 lg:gap-20">
          {steps.map(({ description, icon, title }, index) => (
            <div
              key={title}
              className="relative grid max-w-lg grid-cols-[2.5rem_auto] gap-4 even:md:ml-auto lg:max-w-xl lg:grid-cols-[4rem_auto]"
            >
              <aside className="relative aspect-square w-full flex-grow rounded-full bg-accent ring-2 ring-accent ring-offset-2 lg:ring-4 lg:ring-offset-4">
                {/* <p className="inset-center top-0 text-lg font-medium text-gray-600/30 lg:text-5xl ">
                  {index + 1}
                </p> */}
              </aside>
              <section className="flex-shrink-0">
                <h3 className="text-lg font-bold lg:text-xl">{title}</h3>
                <p>{description}</p>
              </section>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeDoIt;
