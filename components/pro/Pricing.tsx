import { ChangeEvent, useState } from "react";

const packages = {
  website: {
    title: "Custom website",
    fixedPrice: 750,
    monthlyPrice: 0,
  },
  socialMedia: {
    title: "Social media management",
    fixedPrice: 450,
    monthlyPrice: 400,
  },
  photography: {
    title: "Product photography",
    fixedPrice: 250,
    monthlyPrice: 0,
  },
};

const Pricing = () => {
  const [fixedCost, setFixedCost] = useState(0);
  const [monthlyCost, setMonthlyCost] = useState(0);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;

    if (checked) {
      setFixedCost(
        fixedCost + packages[value as keyof typeof packages].fixedPrice
      );
      setMonthlyCost(
        monthlyCost + packages[value as keyof typeof packages].fixedPrice
      );
    } else {
      setFixedCost(
        fixedCost - packages[value as keyof typeof packages].fixedPrice
      );
      setMonthlyCost(
        monthlyCost - packages[value as keyof typeof packages].fixedPrice
      );
    }
  };

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
            <form>
              {Object.keys(packages).map((key) => {
                const { title } = packages[key as keyof typeof packages];

                return (
                  <div key={title}>
                    <input
                      type="checkbox"
                      id={key}
                      name={key}
                      value={key}
                      onChange={handleChange}
                    />
                    <label htmlFor={key}>{title}</label>
                  </div>
                );
              })}
            </form>
          </div>
          <div className="m-4 flex items-center justify-center p-4 lg:p-10">
            <h3 className="text-4xl font-light lg:text-6xl">
              <sup className="text-3xl">$</sup>
              {fixedCost}
            </h3>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Pricing;
