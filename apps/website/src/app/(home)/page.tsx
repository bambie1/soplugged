import type { Metadata } from "next";

import { Footer } from "@/components/Footer";
import { Nav } from "@/components/nav";
import { SubscribeBanner } from "@/components/shared/SubscribeBanner";
import { client } from "@/sanity/lib/client";
import supabase from "@/utils/supabase/server";

import { ConnectPillar } from "./connect-pillar";
import { GrowthPillar } from "./growth-pillar";
import { MissionStatement } from "./mission-statement";
import { Pillars } from "./pillars";
import { PodcastPillar } from "./podcast-pillar";
import { HOME_PAGE_QUERY, HOME_POSTS_QUERY } from "./queries";
import { RecentBlogs } from "./recent-blogs";
import { StickyAnnouncement } from "./sticky-announcement";
import { VideoHero } from "./video-hero";

export async function generateMetadata(): Promise<Metadata> {
  const content = await client.fetch(HOME_PAGE_QUERY);

  return {
    title: `${content.seo.title} | SoPlugged`,
    openGraph: {
      description: content.seo.description,
    },
  };
}

export default async function Home() {
  const content = await client.fetch(HOME_PAGE_QUERY);
  const recentBlogs = await client.fetch(HOME_POSTS_QUERY);
  const { data: featuredBusinesses } = await supabase
    .from("businesses")
    .select("business_name, slug, sample_images")
    .order("confidence_rating", { ascending: false, nullsFirst: false })
    .order("sample_images", { ascending: false, nullsFirst: false })
    .limit(10);

  if (!content) {
    return null;
  }

  return (
    <>
      <Nav />
      <main className="relative bg-black text-white selection:bg-light/90 selection:text-black">
        {content.video && <VideoHero content={content} />}

        <Pillars />

        <MissionStatement />

        {content.podcastHighlight && (
          <PodcastPillar content={content.podcastHighlight} />
        )}

        <ConnectPillar />
        <GrowthPillar featuredBusinesses={featuredBusinesses} />

        {recentBlogs && <RecentBlogs posts={recentBlogs} />}

        <StickyAnnouncement />
        <SubscribeBanner />
      </main>

      <Footer />
    </>
  );
}
