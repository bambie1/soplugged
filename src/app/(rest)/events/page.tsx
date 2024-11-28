import type { Metadata } from "next";
import Link from "next/link";

import { Nav } from "@/components/nav";
import { SubscribeBanner } from "@/components/shared/SubscribeBanner";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { getDate } from "@/utils/getDate";

import { EVENTS_PAGE_QUERY, EVENTS_QUERY } from "./queries";

export async function generateMetadata(): Promise<Metadata> {
  const content = await client.fetch(EVENTS_PAGE_QUERY);

  if (!content?.seo) return {};

  return {
    title: `${content.seo.title} | SoPlugged`,
    openGraph: {
      description: content.seo.description,
    },
  };
}

export default async function EventsPage() {
  const content = await client.fetch(EVENTS_PAGE_QUERY);
  const events = await client.fetch(EVENTS_QUERY);

  if (!events) {
    return null;
  }

  return (
    <>
      <Nav />

      <div className="absolute left-0 top-0 -z-10 h-80 w-full bg-gradient-to-b from-[#F2EDE3] to-white"></div>

      <div className="mx-auto flex max-w-3xl flex-col items-center pb-20 pt-40 text-center text-primary lg:pt-48">
        <h1 className="large mb-4">{content.title}</h1>
        <p className="lg:text-lg">{content.description}</p>
      </div>

      <div className="mx-auto mb-20 grid w-full scale-125 grid-cols-4 gap-4">
        {content.images.map((i: any) => (
          <div
            className="relative aspect-[2/1] overflow-hidden rounded-xl"
            key={i}
          >
            <img src={urlFor(i).url()} alt="" className="w-full object-cover" />

            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60"></div>
          </div>
        ))}
      </div>

      <div className="padded my-20">
        <div className="mx-auto grid max-w-2xl gap-10">
          {events.map((event: any) => (
            <Link href={`/events/${event.slug.current}`} key={event.name}>
              {/* <img src={urlFor(event.image).url()} alt="" className="mb-4" /> */}
              <h3 className="mb-4">{event.name}</h3>
              <p>{getDate(event.date)}</p>
              {/* <p>{event.details}</p> */}
            </Link>
          ))}
        </div>
      </div>

      <SubscribeBanner />
    </>
  );
}
