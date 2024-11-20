import type { Metadata } from "next";
import Link from "next/link";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { BuyBlackSection } from "@/components/home/BuyBlackSection";
import { FeaturedEvent } from "@/components/home/FeaturedEvent";
import { PodcastHighlight } from "@/components/home/PodcastHighlight";
import { RecentBlogs } from "@/components/home/RecentBlogs";
import { VideoHero } from "@/components/home/VideoHero";
import { SubscribeBanner } from "@/components/shared/SubscribeBanner";
import { client } from "@/sanity/lib/client";

import { HOME_PAGE_QUERY, HOME_POSTS_QUERY } from "./queries";

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
      <main className="bg-black text-white selection:bg-light/90 selection:text-black">
        {content.video && <VideoHero content={content} />}

        <div className="mx-auto mt-10 grid max-w-screen-2xl gap-8 px-4 lg:grid-cols-3">
          <div className="flex aspect-[3/1] items-center justify-center border border-white/20">
            Amplify
          </div>
          <div className="flex aspect-[3/1] items-center justify-center border border-white/20">
            Educate
          </div>
          <div className="flex aspect-[3/1] items-center justify-center border border-white/20">
            Connect
          </div>
        </div>

        <div className="page-section padded mt-10">
          <div className="flex max-w-2xl flex-col items-start">
            <p className="mb-2 opacity-70">
              Our journey began with a simple question
            </p>
            <p className="mb-8 text-2xl lg:text-4xl xl:text-5xl">
              How can we close the gap for Black entrepreneurs who often face
              unique challenges in visibility and resources?
            </p>

            <Link
              href="/our-story"
              className="py-8 underline decoration-pink underline-offset-8 transition-all duration-150 hover:underline-offset-4"
            >
              Learn more about us
            </Link>
          </div>
        </div>

        {content.podcastHighlight && (
          <PodcastHighlight content={content.podcastHighlight} />
        )}
        {/* 
        {content.featuredEvent?.event && (
          <FeaturedEvent
            event={content.featuredEvent.event}
            title={content.featuredEvent.title!}
          />
        )} */}

        {/* {content.featuredBusinesses && (
          <BuyBlackSection content={content.featuredBusinesses} />
        )}

        {recentBlogs && <RecentBlogs posts={recentBlogs} />} */}

        {/* <SubscribeBanner /> */}
      </main>

      <div className="fixed bottom-4 hidden w-full">
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
              Get your tickets
            </Link>
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </>
  );
}
