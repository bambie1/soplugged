import { PageHeader } from "@/components/shared/PageHeader";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { EVENTS_QUERY } from "@/sanity/lib/queries";
import { getDate } from "@/utils/getDate";

export default async function EventsPage() {
  const content = await client.fetch(EVENTS_QUERY);

  if (!content) {
    return null;
  }

  return (
    <>
      <PageHeader title="Events" description="Upcoming events" />
      <div className="padded mb-20">
        <div className="mx-auto grid max-w-2xl gap-10">
          {content.map((event: any) => (
            <div key={event.name}>
              <img src={urlFor(event.image).url()} alt="" className="mb-4" />
              <h3 className="mb-4">{event.name}</h3>
              <p>{getDate(event.date)}</p>
              {/* <p>{event.details}</p> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
