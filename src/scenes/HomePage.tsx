import dynamic from "next/dynamic";

import { FC } from "react";

import PopularBusinesses from "@/src/components/PopularBusinesses";
import CategoriesGrid from "@/src/components/home/CategoriesGrid";
import { ButtonLink } from "@/styled/ButtonLink";

import { BlogPost } from "@/types/BlogPost";
import BlogList from "@/components/blog/BlogList";
import { IBusiness } from "@/types/Business";
import CategoryHighlight from "@/components/home/CategoryHighlight";
import LogoCloud from "@/components/home/LogoCloud";
import AddYourBusiness from "@/components/home/AddYourBusiness";

const LocationHighlight = dynamic(
  () => import("../components/home/LocationHighlight")
);
const FAQs = dynamic(() => import("../components/home/FAQs"));

const HomePage: FC<{ posts: BlogPost[]; featuredBusinesses: IBusiness[] }> = (
  props
) => {
  return (
    <>
      <div className="mt-10 flex flex-col gap-20 overflow-hidden lg:mt-20 lg:gap-40">
        <LogoCloud />

        <section className="mb-10 lg:hidden">
          <CategoriesGrid />
        </section>

        <PopularBusinesses businesses={props.featuredBusinesses} />

        <CategoryHighlight />

        <AddYourBusiness />

        <LocationHighlight />

        <div className="my-container bg-white pb-4 sm:pb-10">
          <div className="mb-8 grid max-w-2xl gap-4">
            <h2 className="text-3xl font-semibold xl:text-4xl">
              <span className="relative text-primary">
                Check out our blog
                <span className="absolute left-0 -bottom-1 h-3 w-full -rotate-2 bg-secondary/40" />
              </span>
            </h2>
            <p>
              We've penned-down some of our thoughts and general guidelines that
              have worked for us so far.
            </p>
          </div>

          <BlogList {...props} />
        </div>
        <FAQs />
      </div>
    </>
  );
};

export default HomePage;
