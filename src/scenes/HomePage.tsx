import type { FC } from "react";

import BusinessResources from "@/components/home/BusinessResources";
import FAQs from "@/components/home/FAQs";
import FeaturedBusinesses from "@/components/home/FeaturedBusinesses";
import MissionStatement from "@/components/MissionStatement";
import { BlogPost } from "@/types/BlogPost";
import { IBusiness } from "@/types/Business";

const HomePage: FC<{ posts: BlogPost[]; featuredBusinesses: IBusiness[] }> = (
  props
) => {
  return (
    <div className="overflow-hidden md:mt-10 lg:mt-20 lg:gap-40 xl:mt-36">
      <div className="flex flex-col gap-20">
        <FeaturedBusinesses businesses={props.featuredBusinesses} />
        <MissionStatement />

        <BusinessResources posts={props.posts} />
      </div>
      <div className="mt-10 bg-light py-10 lg:mt-20 lg:py-20">
        <FAQs />
      </div>
    </div>
  );
};

export default HomePage;
