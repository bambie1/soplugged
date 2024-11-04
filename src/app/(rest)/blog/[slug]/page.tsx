import type { Metadata } from "next";
import { PortableText } from "next-sanity";

import { PageHeader } from "@/components/shared/PageHeader";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { POST_QUERY, POSTS_QUERY } from "@/sanity/lib/queries";
import { getDate } from "@/utils/getDate";

export async function generateStaticParams() {
  const posts = await client.fetch(POSTS_QUERY);

  return posts.map((post: any) => ({
    slug: post.slug.current,
  }));
}

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const slug = (await params).slug;

  // fetch data
  const content = await client.fetch(POST_QUERY, { slug });

  return {
    title: `${content.title} | SoPlugged Blog`,
    openGraph: {
      images: [urlFor(content.mainImage).url()],
      description: content.excerpt,
    },
  };
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
    <>
      <PageHeader
        title={content.title}
        description={`${getDate(content.publishedAt)} | ${content.author?.name}`}
      />
      <div className="padded">
        <div className="prose mx-auto">
          <img
            src={urlFor(content.mainImage).url()}
            alt=""
            className="mb-8 aspect-video rounded-lg object-cover"
          />
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
    </>
  );
}
