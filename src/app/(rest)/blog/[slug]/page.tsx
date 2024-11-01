import { PortableText } from "next-sanity";

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { POST_QUERY, POSTS_QUERY } from "@/sanity/lib/queries";

export async function generateStaticParams() {
  const posts = await client.fetch(POSTS_QUERY);

  return posts.map((post: any) => ({
    slug: post.slug.current,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  const content = await client.fetch(POST_QUERY, { slug });

  if (!content) {
    return null;
  }

  return (
    <div>
      <div className="padded">
        <div className="prose">
          <img
            src={urlFor(content.mainImage).url()}
            alt=""
            className="mb-4 aspect-video rounded-lg object-cover"
          />
          <h1 className="mb-10 text-4xl font-bold">{content.title}</h1>
          <PortableText
            value={content.body}
            components={{
              types: {
                image: ({ value }) => (
                  <img src={urlFor(value.asset).url()} alt={value.alt} />
                ),
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
