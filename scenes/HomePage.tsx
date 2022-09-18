import Link from "next/link";
import dynamic from "next/dynamic";
import {
  GlobeAltIcon,
  LightningBoltIcon,
  PlusIcon,
} from "@heroicons/react/outline";

import PopularBusinesses from "@/components/PopularBusinesses";
import CategoriesGrid from "@/components/CategoriesGrid";
import { ButtonLink } from "@/styled/ButtonLink";

const secondaryLinks = [
  {
    id: 2,
    name: "Add your business",
    description:
      "Easily add your business to our directory for FREE, and let potential customers come to you",
    linkText: "Add your business",
    linkHref: "/my-business",
    color: "bg-gradient-to-tr from-accent to-secondary",
    icon: PlusIcon,
  },
  {
    id: 3,
    name: "Go PRO",
    description:
      "Reach out to our team of experts if you are looking to launch or improve your digital presence with a website or social media marketing.",
    linkText: "Explore Pro",
    linkHref: "/pro",
    color: "bg-gradient-to-tr from-accent to-white",
    icon: LightningBoltIcon,
  },
  {
    id: 1,
    name: "Become a sponsor",
    description:
      "We rely on amazing people like you to keep our platform free and accessible to Black-owned businesses across Canada. ",
    linkText: "Show your support",
    linkHref: "/sponsors",
    color: "bg-gradient-to-tr from-secondary to-white",
    icon: GlobeAltIcon,
  },
];

const BuyOrSell = dynamic(() => import("../components/BuyOrSell"));
const FilterByLocation = dynamic(
  () => import("../components/FilterByLocation")
);
const FAQs = dynamic(() => import("../components/FAQs"));

const HomePage = () => {
  return (
    <>
      <div className="mt-10 flex flex-col overflow-hidden lg:mt-20">
        <section className="mb-10 lg:hidden">
          <CategoriesGrid />
        </section>

        <section className="">
          <PopularBusinesses />
        </section>

        <section className="relative my-10">
          <span className="absolute -left-24 bottom-20 -z-[1] -rotate-90 whitespace-nowrap font-extrabold text-primary/[.025] lg:text-[10rem] lg:leading-[.7]">
            black-<span className="block">owned</span>
          </span>
          <div className="my-container grid items-center gap-4 lg:grid-cols-2 lg:gap-10">
            <div className="flex flex-col items-start">
              <h2 className="text-3xl font-bold xl:text-4xl">
                <span className="relative text-primary">
                  #Buyingblack
                  <span className="absolute left-0 -bottom-1 h-3 w-full -rotate-2 bg-secondary/40" />
                </span>{" "}
                just got easier
              </h2>
              <p className="mt-3 text-gray-700 lg:text-lg">
                Find a local Black-owned business near you. From restaurants,
                hairstylists and salons to tutoring, tech and healthcare
                services.
              </p>
              <p className="mt-3 mb-6 text-gray-700">
                With our search friendly directory, you now have various
                Black-owned businesses in one place, right at your fingertips.
              </p>

              <ButtonLink href="/search" variant="outlined" showArrow>
                Explore businesses
              </ButtonLink>
            </div>
            <div>
              <dl className="mt-10 space-y-10">
                {secondaryLinks.map((item) => (
                  <span key={item.linkText} className="relative block">
                    <dt>
                      <div
                        className={`absolute flex h-12 w-12 items-center justify-center rounded-md ${item.color} border text-primary transition duration-200 group-hover:scale-[90%]`}
                      >
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 font-semibold uppercase leading-6 text-gray-900 lg:text-lg">
                        {item.name}
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 grid justify-items-start text-base text-gray-700">
                      <p className="mb-4">{item.description}</p>
                      <ButtonLink
                        variant="text"
                        showArrow
                        href={item.linkHref}
                        leftAlign
                      >
                        {item.linkText}
                      </ButtonLink>
                    </dd>
                  </span>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <FilterByLocation />

        <BuyOrSell />
        <FAQs />
      </div>
    </>
  );
};

export default HomePage;
