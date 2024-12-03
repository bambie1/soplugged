import type { Metadata } from "next";

import { Nav } from "@/components/nav";
import { SubscribeBanner } from "@/components/shared/SubscribeBanner";
import { client } from "@/sanity/lib/client";

import { EventCard } from "./event-card";
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
        <div className="mx-auto grid max-w-4xl gap-10">
          {events.map((event: any) => (
            <EventCard
              key={event._id}
              event={{
                name: event.name,
                date: event.date,
                href: `/events/${event.slug.current}`,
                location: "Toronto, ON",
              }}
            />
          ))}
        </div>
      </div>

      <SubscribeBanner />
    </div>
  );
}
