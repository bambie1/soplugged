import Link from "next/link";

const cardInfo = [
  {
    number: 1,
    title: "I'm looking for a black-owned business",
    text: "Discover all businesses",
    linkText: "Explore",
    href: "/search",
  },
  {
    number: 2,
    title: "I am a black entrepreneur",
    text: "Add your business",
    linkText: "",
    href: "/my-business",
  },
];

const BuyOrSell = () => {
  return (
    <section className="my-10">
      <div className="my-container">
        <div className="relative grid items-center gap-5 lg:grid-cols-2">
          <div className="absolute top-1/2 left-1/2 -z-10 mx-auto aspect-square w-40  max-w-xs -translate-x-1/2 -translate-y-1/2 transform rounded-full border-2 border-secondary/40 lg:w-full"></div>
          {cardInfo.map(({ text, title, number, href }) => (
            <Link href={href} key={title}>
              <a
                className={`flex w-full flex-col justify-center rounded-lg p-10 shadow backdrop-blur-[1px] transition duration-200 hover:border hover:border-secondary ${
                  number == 2
                    ? "bg-gradient-to-tr from-accent/50 to-secondary/50 hover:skew-y-1 lg:mt-48"
                    : "bg-gradient-to-tr from-secondary/50 to-white/50 hover:-skew-y-1 lg:mb-48"
                } lg:min-h-[20rem]`}
              >
                <h2 className="mb-1 text-2xl font-bold xl:text-3xl">{title}</h2>
                <p>{text}</p>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BuyOrSell;
