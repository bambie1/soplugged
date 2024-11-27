import { ArrowRight, CalendarClock } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

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

        <div className="fixed bottom-4 right-4 lg:hidden">
          <Link
            href="/"
            className="flex aspect-square w-12 items-center justify-center rounded-full bg-light p-1 font-medium text-black"
          >
            <div className="aspect-square w-full rounded-full border border-black"></div>
          </Link>
        </div>
        <div className="fixed bottom-4 hidden w-full lg:block">
          <div className="padded flex items-center justify-center">
            <div className="flex items-center justify-center gap-10 rounded-full border border-black/10 bg-light p-2 text-black shadow-md shadow-light/40">
              <div className="flex items-center gap-4">
                <div className="flex aspect-square h-12 items-center justify-center rounded-full">
                  <CalendarClock size={24} />
                </div>
                <p className="font-bold">
                  Join us on February 14th for PluggedIn!
                </p>
              </div>
              <Link
                href="/"
                className="rounded-full bg-black p-4 font-medium text-white"
              >
                <span className="hidden md:inline">Get your tickets</span>

                <ArrowRight size={24} className="lg:hidden" />
              </Link>
            </div>
          </div>
        </div>
        <SubscribeBanner />
      </main>

      <Footer />
    </>
  );
}
