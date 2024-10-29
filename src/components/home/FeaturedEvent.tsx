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
    <div className="bg-black text-white py-10 lg:py-20">
      <div className="padded">
        <h2 className="font-semibold text-xl lg:text-4xl mb-10">{title}</h2>

        <div className="grid items-center lg:grid-cols-2 gap-10">
          <img src={urlFor(event.image).url()} alt="" />
          <div>
            <h3 className="mb-4 font-semibold text-3xl">{event.name}</h3>
            <PortableText value={event.details} />

            <a href={event.ctaLink} className="inline-flex underline mt-10">
              {event.ctaLabel}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
