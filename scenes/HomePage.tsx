import Link from "next/link";
import dynamic from "next/dynamic";
import {
  GlobeAltIcon,
  LightningBoltIcon,
  PlusIcon,
} from "@heroicons/react/outline";

import PopularBusinesses from "@/components/PopularBusinesses";
import CategoriesGrid from "@/components/CategoriesGrid";
import { Button } from "@/styled/Button";
import { ArrowButton } from "@/styled/ArrowButton";

const secondaryLinks = [
  {
    id: 1,
    name: "Buy black",
    description:
      "We rely on amazing people like you to keep our platform free and accessible to Black-owned businesses across Canada. ",
    linkText: "Explore directory",
    linkHref: "/search",
    color: "bg-gradient-to-tr from-secondary to-white",
    icon: GlobeAltIcon,
  },
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
          <span className="absolute -left-24 bottom-20 -z-[1] -rotate-90 whitespace-nowrap font-extrabold leading-[1] text-primary/[.045] lg:text-[10rem]">
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
                It's time to stop searching. We're here to help you find the
                best black-owned businesses in your city with the click of a
                button. Find everything from restaurants, hairstylists and
                salons to tutoring, tech and healthcare services.
              </p>
              <p className="mt-3 mb-6 hidden text-gray-700 lg:block lg:text-lg">
                You can now have all your black-owned businesses in one place,
                right at your fingertips.
              </p>

              <ArrowButton href="/search" color="primary">
                Explore businesses
              </ArrowButton>
            </div>
            <div>
              <dl className="mt-10 space-y-10">
                {secondaryLinks.map((item) => (
                  <Link key={item.id} href={item.linkHref}>
                    <a className="group relative block">
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
                        <ArrowButton isSmall color="primary">
                          {item.linkText}
                        </ArrowButton>
                      </dd>
                    </a>
                  </Link>
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
