import type { FC } from "react";

import BusinessResources from "@/components/home/BusinessResources";
import FAQs from "@/components/home/FAQs";
import FeaturedBusinesses from "@/components/home/FeaturedBusinesses";
import PluggedInAd from "@/components/home/PluggedInAd";
import MissionStatement from "@/components/MissionStatement";
import { BlogPost } from "@/types/BlogPost";
import { IBusiness } from "@/types/Business";

const HomePage: FC<{ posts: BlogPost[]; featuredBusinesses: IBusiness[] }> = (
  props
) => {
  return (
    <div className="flex flex-col gap-20 overflow-hidden md:my-10 lg:mt-20 lg:gap-40 xl:mt-36">
      <PluggedInAd />
      <MissionStatement />

      <FeaturedBusinesses businesses={props.featuredBusinesses} />

      <BusinessResources posts={props.posts} />
      <FAQs />
    </div>
  );
};

export default HomePage;
