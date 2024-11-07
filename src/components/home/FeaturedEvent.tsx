import Link from "next/link";
import { PortableText } from "next-sanity";

import { urlFor } from "@/sanity/lib/image";

export const FeaturedEvent = ({
  event,
  title,
}: {
  event: any;
  title: string;
}) => {
  return (
    <div className="page-section bg-black text-white">
      <div className="padded">
        <h2 className="mb-10">{title}</h2>

        <div className="grid items-center gap-5 lg:grid-cols-2 lg:gap-10">
          <Link href={`/events/${event.slug.current}`}>
            <img src={urlFor(event.image).url()} alt="" />
          </Link>
          <div>
            <Link href={`/events/${event.slug.current}`}>
              <h3 className="mb-4 hover:underline">{event.name}</h3>
            </Link>
            <PortableText value={event.details} />

            <a
              href={event.ctaLink}
              className="mt-5 inline-flex underline lg:mt-10"
            >
              {event.ctaLabel}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
