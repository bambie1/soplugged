import type { Metadata } from "next";
import { PortableText } from "next-sanity";

import { TableOfContents } from "@/components/blog/TableOfContents";
import { Header } from "@/components/Header";
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
      <Header backgroundColor="light" />
      <div className="bg-light">
        <div className="padded grid gap-20 py-10 lg:grid-cols-3 lg:py-20">
          <div className="lg:col-span-2">
            <p className="uppercase">{getDate(content.publishedAt)}</p>
            <h1 className="mb-4 mt-4 text-primary">{content.title}</h1>
            <div className="flex items-center gap-2">
              <img
                src={urlFor(content.author.image).url()}
                alt=""
                className="h-10 w-10 rounded-full border border-primary object-cover"
              />
              <p>{content.author.name}</p>
            </div>
            <img
              src={urlFor(content.mainImage).url()}
              alt=""
              className="-mb-40 mt-10 aspect-video w-full rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
      <div className="padded mb-20 mt-40 flex flex-col lg:flex-row">
        <div className="prose">
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
        <div className="ml-auto max-w-sm flex-shrink-0 lg:w-1/3">
          <div className="sticky top-24">
            <TableOfContents blocks={content.headings} />

            <div>Advertisement</div>
          </div>
        </div>
      </div>
    </>
  );
}
