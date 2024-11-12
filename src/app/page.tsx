import { Footer } from "@/components/Footer";
import { BuyBlackSection } from "@/components/home/BuyBlackSection";
import { FeaturedEvent } from "@/components/home/FeaturedEvent";
import { PodcastHighlight } from "@/components/home/PodcastHighlight";
import { RecentBlogs } from "@/components/home/RecentBlogs";
import { VideoHero } from "@/components/home/VideoHero";
import { client } from "@/sanity/lib/client";
import { HOME_PAGE_QUERY, HOME_POSTS_QUERY } from "@/sanity/lib/queries";

export default async function Home() {
  const content = await client.fetch(HOME_PAGE_QUERY);
  const recentBlogs = await client.fetch(HOME_POSTS_QUERY);

  console.log(content.podcastHighlight);

  if (!content) {
    return null;
  }

  return (
    <>
      <main className="bg-black text-white">
        {content.video && <VideoHero content={content} />}

        {content.featuredEvent?.event && (
          <FeaturedEvent
            event={content.featuredEvent.event}
            title={content.featuredEvent.title!}
          />
        )}

        {content.podcastHighlight && (
          <PodcastHighlight content={content.podcastHighlight} />
        )}

        {/* {content.featuredBusinesses && (
          <BuyBlackSection content={content.featuredBusinesses} />
        )} */}

        {recentBlogs && <RecentBlogs posts={recentBlogs} />}
      </main>

      <Footer />
    </>
  );
}
