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
    <div className="bg-black py-10 text-white lg:py-20">
      <div className="padded">
        <h2 className="mb-10 text-xl font-semibold lg:text-4xl">{title}</h2>

        <div className="grid items-center gap-10 lg:grid-cols-2">
          <img src={urlFor(event.image).url()} alt="" />
          <div>
            <h3 className="mb-4 text-3xl font-semibold">{event.name}</h3>
            <PortableText value={event.details} />

            <a href={event.ctaLink} className="mt-10 inline-flex underline">
              {event.ctaLabel}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
