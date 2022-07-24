const content = [
  { number: "90+", text: "Businesses" },
  { number: "10+", text: "Cities" },
  { number: "10+", text: "Categories" },
  { number: "1", text: "Platform" },
];

const Stats = () => {
  return (
    <div className="bg-white mt-auto border border-black w-1/2">
      <div className="bg-secondary/[.13] py-8">
        <div className="">
          <ul className="grid md:flex flex-wrap grid-cols-2 gap-4 justify-between max-w-3xl mx-auto">
            {content.map(({ number, text }) => (
              <li
                key={text}
                className="justify-self-center text-gray-500 text-center"
              >
                <h3 className="mb-2 text-6xl">{number}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Stats;
