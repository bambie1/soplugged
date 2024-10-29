import { PortableText } from "@portabletext/react";
import Link from "next/link";

import { client, getFileUrl } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { HOME_PAGE_QUERY } from "@/sanity/lib/queries";

export default async function Home() {
  const content = await client.fetch(HOME_PAGE_QUERY);

  const videoUrl = getFileUrl(content.video.asset._ref);

  return (
    <main className="">
      <header className="relative text-white">
        <div className="absolute inset-0">
          <video
            src={videoUrl}
            autoPlay
            muted
            loop
            className="object-cover w-full h-full"
          />
        </div>

        <div className="relative z-10 flex flex-col min-h-[80vh] bg-black bg-opacity-50">
          <nav className="padded py-10 flex items-center justify-between gap-10">
            <img src="soplugged.svg" alt="SoPlugged logo" className="h-10" />

            <div className="flex items-center gap-4 text-white/80">
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
          <div className="bg-black text-white py-10 lg:py-20">
            <div className="padded">
              <h2 className="font-semibold text-xl lg:text-4xl mb-10">
                {content.featuredEvent.title}
              </h2>

              <div className="grid items-center lg:grid-cols-2 gap-10">
                <img
                  src={urlFor(content.featuredEvent.event.image).url()}
                  alt=""
                />
                <div>
                  <h3 className="mb-4 font-semibold text-3xl">
                    {content.featuredEvent.event.name}
                  </h3>
                  <PortableText value={content.featuredEvent.event.details} />

                  <a
                    href={content.featuredEvent.ctaLink}
                    className="inline-flex underline mt-10"
                  >
                    {content.featuredEvent.ctaLabel}
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
