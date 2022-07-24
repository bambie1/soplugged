import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

import Hero from "@/components/Hero";
import { FAQs } from "@/components/FAQs";

const Header = dynamic(() => import("../../components/Header/Header"));
const Footer = dynamic(() => import("../../components/Footer/Footer"));
const TopCategories = dynamic(
  () => import("../../components/TopCategories/TopCategories")
);

const HomePage = () => {
  return (
    <>
      <Header color="brown" />
      <Hero />
      <div className="flex flex-col mt-20">
        <section className="lg:hidden">
          {/* <h2 className="text-2xl font-bold">Popular Categories</h2> */}
          <div className="lg:hidden overflow-x-auto">
            <ul className="inline-flex px-4 md:px-20 gap-4">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <li
                  key={item}
                  className="w-40 h-40 border border-black rounded-full"
                ></li>
              ))}
            </ul>
          </div>
        </section>
        <section className="my-container grid my-8 lg:my-5 items-center lg:grid-cols-2 gap-5">
          <div className="flex flex-col items-start">
            <h2 className="text-3xl font-bold mb-3">What is SoPlugged?</h2>
            <p className="text-lg leading-relaxed">
              We LOVE #buyingblack, and as we encourage everyone to buy-black,
              we're reducing the obstacles that you could possibly face if you
              wanted to support a local black-owned business. Check out some of
              our popular categories to get started!
            </p>

            <Link href="/search">
              <a className="bg-primary p-4 text-white rounded-md mt-6">
                Explore our categories
              </a>
            </Link>
          </div>
          <aside className="flex flex-col">
            <div className="hidden lg:flex ml-auto w-full -space-x-16">
              <ul className="flex flex-col flex-1 items-end">
                {[1, 2, 3].map((item) => (
                  <li
                    key={item}
                    className={`w-40 h-40 border border-black rounded-full ${
                      item === 2 ? "mr-20" : ""
                    }`}
                  ></li>
                ))}
              </ul>
              <ul className="flex flex-col flex-1 items-end">
                {[1, 2, 3].map((item) => (
                  <li
                    key={item}
                    className={`w-40 h-40 border border-black rounded-full ${
                      item === 2 ? "mr-20" : ""
                    }`}
                  ></li>
                ))}
              </ul>
            </div>
          </aside>
        </section>

        <section className="my-container my-8 lg:my-20">
          <h2 className="text-2xl font-bold">Filter by location</h2>
          <ul className="grid gap-3 grid-cols-2 md:grid-cols-3 md:gap-6 my-6">
            {[...Array(6)].map((item) => (
              <li
                key={item}
                className="h-20 rounded-md border border-black"
              ></li>
            ))}
          </ul>
        </section>
        <FAQs />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
