import { CalendarDaysIcon, PinIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { Nav } from "@/components/nav";
import { SubscribeBanner } from "@/components/shared/SubscribeBanner";
import { client } from "@/sanity/lib/client";
import { getDate } from "@/utils/getDate";

import { EVENTS_QUERY } from "./queries";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Upcoming events | SoPlugged`,
  };
}

export default async function EventsPage() {
  const events = await client.fetch(EVENTS_QUERY);

  if (!events) {
    return null;
  }

  return (
    <div className="relative z-10">
      <Nav isLight />

      <div className="absolute left-0 top-0 -z-10 h-80 w-full bg-gradient-to-b from-[#F2EDE3] to-white"></div>

      <div className="mx-auto flex max-w-3xl flex-col items-center pb-20 pt-40 text-center text-primary lg:pt-48">
        <h1 className="large mb-4">Upcoming events</h1>
        <p className="lg:text-lg">
          Join us at events for Black entrepreneurs and creators
        </p>
      </div>

      <div className="padded mb-20 lg:mt-10">
        <div className="mx-auto grid max-w-2xl gap-10">
          {events.map((event: any) => (
            <Link href={`/events/${event.slug.current}`} key={event.name}>
              <div className="mb-4 flex items-center gap-8">
                <div className="flex items-center gap-1 rounded-lg bg-gray-100 p-2 font-medium">
                  <CalendarDaysIcon size={16} />
                  {getDate(event.date)}
                </div>
                <div className="flex items-center gap-1">
                  <PinIcon size={16} />
                  <p>Toronto, ON</p>
                </div>
              </div>
              <img
                src="/events_filler.jpeg"
                alt=""
                className="mb-4 aspect-video rounded-lg"
              />
              <h3 className="mb-4">{event.name}</h3>
              <p>
                Come enjoy a time of networking with other Black entrepreneurs
                and creators.
              </p>
            </Link>
          ))}
        </div>
      </div>

      <SubscribeBanner />
    </div>
  );
}
