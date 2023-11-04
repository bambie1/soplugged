import dynamic from "next/dynamic";
import { FC } from "react";

import { BlogPost } from "@/types/BlogPost";
import BlogList from "@/components/blog/BlogList";
import { IBusiness } from "@/types/Business";
import PopularBusinesses from "@/components/home/PopularBusinesses";
import PluggedInAd from "@/components/home/PluggedInAd";
import JoinTheCommunity from "@/components/JoinTheCommunity";

const FAQs = dynamic(() => import("../components/home/FAQs"));

const HomePage: FC<{ posts: BlogPost[]; featuredBusinesses: IBusiness[] }> = (
  props
) => {
  return (
    <>
      <div className="flex flex-col gap-20 overflow-hidden md:my-10 lg:mt-20 lg:gap-40">
        <PluggedInAd />
        <JoinTheCommunity />

        <PopularBusinesses businesses={props.featuredBusinesses} />

        <div className="relative">
          <div className="absolute left-0 bottom-0 -z-[1] hidden h-28 w-full bg-[#FCFAF8] lg:block"></div>
          <div className="my-container pb-4 sm:pb-10">
            <div className="mb-8 grid max-w-xl gap-4">
              <h2 className="text-3xl font-semibold xl:text-4xl">
                <span className="relative text-primary">
                  Check out our blog
                  <span className="absolute left-0 -bottom-1 h-3 w-full -rotate-2 bg-secondary/40" />
                </span>
              </h2>
              <p>
                We've penned-down some of our thoughts and general guidelines
                that have worked for us so far.
              </p>
            </div>

            <BlogList {...props} />
          </div>
        </div>
        <FAQs />
      </div>
    </>
  );
};

export default HomePage;
