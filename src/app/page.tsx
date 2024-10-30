import Link from "next/link";

import { FeaturedEvent } from "@/components/home/FeaturedEvent";
import { MissionCarousel } from "@/components/home/MissionCarousel";
import { client, getFileUrl } from "@/sanity/lib/client";
import { HOME_PAGE_QUERY } from "@/sanity/lib/queries";

import type { HOME_PAGE_QUERYResult } from "../../sanity.types";

export default async function Home() {
  const content = await client.fetch<HOME_PAGE_QUERYResult>(HOME_PAGE_QUERY);

  if (!content) {
    return null;
  }

  const videoUrl = content.video?.asset?._ref
    ? getFileUrl(content.video.asset._ref)
    : "";

  return (
    <main className="">
      <header className="relative text-white">
        <div className="absolute inset-0 bg-gradient-to-t from-black to-black/50">
          <video
            src={videoUrl}
            autoPlay
            muted
            loop
            className="h-full w-full object-cover"
          />
        </div>

        <div className="relative z-10 flex min-h-[60vh] flex-col bg-black bg-opacity-50 lg:min-h-[80vh]">
          <nav className="padded flex items-center justify-between gap-10 py-10">
            <img
              src="soplugged.svg"
              alt="SoPlugged logo"
              className="h-8 lg:h-10"
            />

            <div className="hidden items-center gap-4 text-white/80 lg:flex">
              <Link href="/about">About</Link>
              <Link href="/about">Events</Link>
              <Link href="/about">Directory</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/about">Join the community</Link>
            </div>
          </nav>
          <section className="padded flex flex-1 py-12">
            <div className="mr-auto mt-auto h-full lg:w-2/3">
              <h1 className="mb-4 text-4xl font-bold lg:text-6xl">
                {content.title}
              </h1>
              <p className="font-light lg:w-3/4 lg:text-lg">
                {content.subtitle}
              </p>

              <div className="mt-8">
                <button className="btn">{content.cta?.label}</button>
              </div>
            </div>
          </section>
        </div>
      </header>

      {content.featuredEvent?.event && (
        <FeaturedEvent
          event={content.featuredEvent.event}
          title={content.featuredEvent.title!}
        />
      )}

      {content.ourMission && <MissionCarousel mission={content.ourMission} />}
    </main>
  );
}
