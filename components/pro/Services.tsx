const listOfServices = [
  {
    title: "Custom websites",
    text: "Professional services from experts to provide all the support you need to grow your business.",
  },
  {
    title: "Social media management",
    text: "Professional services from experts to provide all the support you need to grow your business.",
  },
  {
    title: "Brainstorming sessions",
    text: "Professional services from experts to provide all the support you need to grow your business.",
  },
];

const Services = () => {
  return (
    <div className="my-container">
      <h2 className="mb-4 text-3xl font-bold xl:text-4xl">Our services</h2>
      <ul className="mt-10 grid gap-6 md:grid-cols-3">
        {listOfServices.map(({ title, text }) => (
          <li key={title} className="relative rounded-md bg-accent/20 p-10">
            <div className="absolute -top-7 left-5 aspect-square w-14 rounded-full border-4 border-white bg-accent/20" />
            <h3 className="mb-2 font-semibold lg:text-lg">{title}</h3>
            <p className="lg:text-base">{text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Services;
