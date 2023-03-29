import Image from "next/image";

const LOGOS = [
  { url: "ashabi.png", title: "Ashabi" },
  { url: "badest_events.png", title: "The Badest Events" },
  { url: "bare.png", title: "Stripped Bare" },
  { url: "mills_kitchen.png", title: "Mills Kitchen" },
  { url: "f10.png", title: "F10 Studio" },
  { url: "emaege.png", title: "Emaege Studio" },
  { url: "mazic_beauty.png", title: "Mazic Beauty" },
  { url: "twins_in_kitchen.png", title: "Twins In Kitchen" },
  { url: "nnor.png", title: "Nnor Hair" },
  { url: "barry_air.png", title: "Barry Air" },
];

const Logo = ({ logo }: { logo: typeof LOGOS[number] }) => (
  <li className="relative aspect-video h-10 flex-shrink-0 grayscale-[.5] transition duration-150 hover:grayscale-0 lg:h-14">
    <Image
      src={`/featured_logos/${logo.url}`}
      alt={`Website logo for ${logo.title}`}
      layout="fill"
      objectFit="contain"
      title={logo.title}
    />
  </li>
);

const LogoCloud = () => {
  return (
    <div className="bg-[#FCFAF8] p-4">
      <ul className="flex animate-slide gap-10 p-4 lg:gap-20">
        {LOGOS.map((logo) => (
          <Logo key={logo.url} logo={logo} />
        ))}
        {LOGOS.map((logo) => (
          <Logo key={logo.url} logo={logo} />
        ))}
        {LOGOS.map((logo) => (
          <Logo key={logo.url} logo={logo} />
        ))}
      </ul>
    </div>
  );
};

export default LogoCloud;
