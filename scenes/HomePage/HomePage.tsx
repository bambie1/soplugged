import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

import Hero from "@/components/Hero";
import { FAQs } from "@/components/FAQs";
import { popularCategories } from "@/lib/popularCategories";

const Header = dynamic(() => import("../../components/Header/Header"));
const Footer = dynamic(() => import("../../components/Footer/Footer"));

const HomePage = () => {
  return (
    <>
      <Header color="brown" />
      <Hero />
      <div className="flex flex-col mt-10 lg:mt-20">
        <section className="lg:hidden">
          {/* <h2 className="text-2xl font-bold">Popular Categories</h2> */}
          <div className="lg:hidden overflow-x-auto">
            <ul className="inline-flex px-4 gap-4">
              {[0, 1, 2, 3, 4, 5].map((item) => (
                <li
                  key={item}
                  className="w-40 h-40 rounded-full relative overflow-hidden"
                >
                  <Image
                    src={popularCategories[item].url}
                    objectFit="cover"
                    alt=""
                    layout="fill"
                  />
                </li>
              ))}
            </ul>
          </div>
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
