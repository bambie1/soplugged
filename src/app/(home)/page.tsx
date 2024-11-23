import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SubscribeBanner } from "@/components/shared/SubscribeBanner";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

import { ConnectPillar } from "./connect-pillar";
import { GrowthPillar } from "./growth-pillar";
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

  if (!content) {
    return null;
  }

  return (
    <>
      <Header isDark />
      <main className="relative bg-black text-white selection:bg-light/90 selection:text-black">
        {content.video && <VideoHero content={content} />}

        <Pillars />

        <div className="page-section padded mt-10">
          <div className="flex max-w-2xl flex-col items-start">
            <p className="mb-2 font-medium text-yellow-50 opacity-70">
              Our journey began with a simple question
            </p>
            <p className="mb-8 text-3xl tracking-tight lg:text-4xl xl:text-5xl">
              How can we close the gap for Black entrepreneurs who often face
              unique challenges in visibility and resources?
            </p>

            <Link
              href="/our-story"
              className="py-8 underline decoration-yellow-100 underline-offset-8 transition-all duration-150 hover:underline-offset-4"
            >
              Learn more about us
            </Link>
          </div>
        </div>

        {content.podcastHighlight && (
          <PodcastPillar content={content.podcastHighlight} />
        )}

        <ConnectPillar />
        <GrowthPillar content={content.featuredBusinesses} />

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
            <div className="flex items-center justify-center gap-10 rounded-full bg-light p-2 text-black shadow-md shadow-light/40">
              <div className="flex items-center gap-4">
                <div className="aspect-square h-12 rounded-full border border-black"></div>
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
