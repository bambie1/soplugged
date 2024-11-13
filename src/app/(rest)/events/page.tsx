import Link from "next/link";

import { Header } from "@/components/Header";
import { PageHeader } from "@/components/shared/PageHeader";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { getDate } from "@/utils/getDate";

import { EVENTS_QUERY } from "./queries";
import { SubscribeBanner } from "@/components/shared/SubscribeBanner";

export default async function EventsPage() {
  const content = await client.fetch(EVENTS_QUERY);

  if (!content) {
    return null;
  }

  return (
    <>
      <Header />

      <div className="absolute left-0 top-0 -z-10 h-80 w-full bg-gradient-to-b from-[#F2EDE3] to-white"></div>

      <div className="mx-auto flex max-w-3xl flex-col items-center pb-20 pt-40 text-center text-primary lg:pt-48">
        <h1 className="mb-4">Upcoming events</h1>
        {/* <p className="lg:text-lg">{content.description}</p>  */}
      </div>

      <div className="padded mb-20">
        <div className="mx-auto grid max-w-2xl gap-10">
          {content.map((event: any) => (
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
