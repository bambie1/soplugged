import { PortableText } from "next-sanity";

import { Header } from "@/components/Header";
import { SubscribeBanner } from "@/components/shared/SubscribeBanner";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { OURSTORY_PAGE_QUERY } from "@/sanity/lib/queries";

export default async function OurStoryPage() {
  const content = await client.fetch(OURSTORY_PAGE_QUERY);

  const { images, ourPartners } = content;

  const renderImage = (url: string) => (
    <div className="flex h-full overflow-hidden rounded-xl">
      <img src={url} alt="" className="w-full object-cover" />
    </div>
  );

  return (
    <>
      <Header />

      <div className="absolute left-0 top-0 -z-10 h-80 w-full bg-gradient-to-b from-[#F2EDE3] to-white"></div>

      <div className="flex flex-col items-center pb-20 pt-40 text-center text-primary lg:pt-48">
        <h1 className="mb-4">{content.title}</h1>
        <p className="lg:text-lg">{content.description}</p>

        <div className="mt-20 grid aspect-[3/1] w-full max-w-5xl grid-cols-3 gap-2 lg:gap-4">
          {renderImage(images[0].asset.url)}

          <div className="grid h-full min-h-0 grid-rows-2 gap-2 rounded-xl lg:gap-4">
            {renderImage(images[1].asset.url)}
            {renderImage(images[2].asset.url)}
          </div>
          {renderImage(images[3].asset.url)}
        </div>
      </div>
      <div className="padded mb-20">
        <div className="prose mx-auto">
          <PortableText value={content.content} />
        </div>

        <div className="mx-auto my-10 h-60 w-full max-w-4xl rounded-xl bg-[#D0E1EA] lg:my-20"></div>

        <div className="prose mx-auto">
          {ourPartners.partners.length > 0 && (
            <div>
              <h2>{ourPartners.title}</h2>

              {ourPartners.partners.map((partner: any) => (
                <div key={partner.partnerName} className="max-w-60">
                  <img src={urlFor(partner.logo).url()} alt="" />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <SubscribeBanner
        title="Join the growing community"
        subtitle="On this podcast, we amplify the stories of Black entrepreneurs in Canada as we explore their journey to building a successful business."
      />
    </>
  );
}
