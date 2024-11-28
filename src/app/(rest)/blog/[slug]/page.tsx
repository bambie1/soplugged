import type { Metadata } from "next";

import { TableOfContents } from "@/components/blog/TableOfContents";
import { Nav } from "@/components/nav";
import { PortableText } from "@/components/shared/PortableText";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { getDate } from "@/utils/getDate";

import { POST_QUERY, POSTS_QUERY } from "../queries";

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
      <Nav isLight />
      <div className="bg-light">
        <div className="padded grid gap-20 py-10 lg:grid-cols-3 lg:py-20">
          <div className="mt-10 lg:col-span-2 lg:mt-16">
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
        <div className="prose order-2 lg:order-1">
          <PortableText value={content.body} />
        </div>
        <div className="order-1 max-w-sm flex-shrink-0 lg:order-2 lg:ml-auto lg:w-1/3">
          <div className="sticky top-24">
            <TableOfContents blocks={content.headings} />

            <div>Advertisement</div>
          </div>
        </div>
      </div>
    </>
  );
}
