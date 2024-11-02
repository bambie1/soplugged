import { PageHeader } from "@/components/shared/PageHeader";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { EVENTS_QUERY } from "@/sanity/lib/queries";

export default async function EventsPage() {
  const content = await client.fetch(EVENTS_QUERY);

  if (!content) {
    return null;
  }

  return (
    <main className="bg-white text-black">
      <div className="padded mb-20">
        <PageHeader title="Events" description="Upcoming events" />

        <div className="mx-auto grid max-w-3xl gap-10">
          {content.map((event: any) => (
            <div key={event.name}>
              <h2>{event.name}</h2>
              <p>{event.date}</p>
              <img src={urlFor(event.image).url()} alt="" />
              {/* <p>{event.details}</p> */}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
