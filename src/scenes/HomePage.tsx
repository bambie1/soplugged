import dynamic from "next/dynamic";

import { FC } from "react";

import PopularBusinesses from "@/src/components/PopularBusinesses";
import CategoriesGrid from "@/src/components/home/CategoriesGrid";
import { ButtonLink } from "@/styled/ButtonLink";

import { BlogPost } from "@/types/BlogPost";
import BlogList from "@/components/blog/BlogList";
import { IBusiness } from "@/types/Business";
import CategoryHighlight from "@/components/home/CategoryHighlight";

const BuyOrSell = dynamic(() => import("../components/home/BuyOrSell"));
const FilterByLocation = dynamic(
  () => import("../components/home/FilterByLocation")
);
const FAQs = dynamic(() => import("../components/home/FAQs"));

const HomePage: FC<{ posts: BlogPost[]; featuredBusinesses: IBusiness[] }> = (
  props
) => {
  return (
    <>
      <div className="mt-10 flex flex-col gap-20 overflow-hidden lg:mt-20 lg:gap-40">
        <section className="mb-10 lg:hidden">
          <CategoriesGrid />
        </section>

        <PopularBusinesses businesses={props.featuredBusinesses} />

        <CategoryHighlight />

        <FilterByLocation />

        <BuyOrSell />

        <div className="my-container bg-white py-16 pb-4 sm:py-24 sm:pb-10">
          <div className="mx-auto mb-8 grid max-w-2xl gap-4 px-4 text-center sm:px-6">
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

          <div className="mt-6 flex justify-center lg:mt-12">
            <ButtonLink href="/blog" showArrow variant="text">
              View all posts
            </ButtonLink>
          </div>
        </div>
        <FAQs />
      </div>
    </>
  );
};

export default HomePage;
