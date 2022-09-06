const packageOptions = [
  {
    title: "Custom website",
    name: "website",
  },
  {
    title: "Social media management",
    name: "socialMedia",
  },
  {
    title: "Product photography",
    name: "photography",
  },
];

const Pricing = () => {
  return (
    <div>
      <div className="my-container">
        <div className="mb-10 text-center">
          <h1 className="mb-6 text-4xl font-bold lg:text-6xl">
            Package pricing
          </h1>
          <p>Select any of our 3 services to get the estimated starting cost</p>
        </div>

        <section className="grid gap-5 lg:grid-cols-2">
          <div>
            <p className="uppercase">I need:</p>
            <div>
              {packageOptions.map(({ title, name }) => (
                <div key={title}>
                  <input type="checkbox" id={name} name={name} value={title} />
                  <label htmlFor={name}>{title}</label>
                </div>
              ))}
            </div>
          </div>
          <div className="m-4 flex items-center justify-center rounded-lg bg-accent/20 p-4 lg:p-10">
            <h3 className="text-4xl font-light lg:text-6xl">
              <sup className="text-3xl">$</sup>750
            </h3>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Pricing;
