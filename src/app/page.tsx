import Link from "next/link";

import { FeaturedEvent } from "@/components/home/FeaturedEvent";
import { client, getFileUrl } from "@/sanity/lib/client";
import { HOME_PAGE_QUERY } from "@/sanity/lib/queries";

export default async function Home() {
  const content = await client.fetch(HOME_PAGE_QUERY);

  const videoUrl = getFileUrl(content.video.asset._ref);

  return (
    <main className="">
      <header className="relative text-white">
        <div className="absolute bg-gradient-to-t from-black to-black/50 inset-0">
          <video
            src={videoUrl}
            autoPlay
            muted
            loop
            className="object-cover w-full h-full"
          />
        </div>

        <div className="relative z-10 flex flex-col min-h-[60vh] lg:min-h-[80vh] bg-black bg-opacity-50">
          <nav className="padded py-10 flex items-center justify-between gap-10">
            <img
              src="soplugged.svg"
              alt="SoPlugged logo"
              className="h-8 lg:h-10"
            />

            <div className="hidden lg:flex items-center gap-4 text-white/80">
              <Link href="/about">About</Link>
              <Link href="/about">Events</Link>
              <Link href="/about">Directory</Link>
              <Link href="/about">Resources</Link>
              <Link href="/about">Join the community</Link>
            </div>
          </nav>
          <section className="padded py-12 flex flex-1">
            <div className="lg:w-2/3 mr-auto mt-auto h-full">
              <h1 className="text-4xl mb-4 lg:text-6xl font-bold">
                {content.title}
              </h1>
              <p className="lg:text-lg lg:w-3/4 font-light">
                {content.subtitle}
              </p>

              <div className="mt-8">
                <button className="btn">{content.cta.label}</button>
              </div>
            </div>
          </section>
        </div>
      </header>

      <div>
        {content.featuredEvent.event && (
          <FeaturedEvent
            event={content.featuredEvent.event}
            title={content.featuredEvent.title}
          />
        )}
      </div>
    </main>
  );
}
