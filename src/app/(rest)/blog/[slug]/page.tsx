import type { Metadata } from "next";
import Image from "next/image";

import { TableOfContents } from "@/components/blog/TableOfContents";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
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
      <div className="padded mt-40">
        <div className="max-w-5xl">
          <p className="">{getDate(content.publishedAt)}</p>
          <h1 className="mb-6 mt-4 text-primary">{content.title}</h1>
          <div className="flex items-center gap-2">
            <Image
              width={40}
              height={40}
              src={urlFor(content.author.image).url()}
              alt=""
              className="h-10 w-10 rounded-full border border-primary object-cover"
            />
            <p>{content.author.name}</p>
          </div>

          <div className="relative mt-10 aspect-video overflow-hidden rounded-lg">
            <Image
              src={urlFor(content.mainImage).url()}
              alt=""
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="mb-20 mt-20 flex max-w-5xl flex-col gap-10 lg:flex-row lg:gap-16">
          <div className="max-w-sm flex-shrink-0 lg:ml-auto lg:w-1/3">
            <div className="sticky top-32">
              <TableOfContents blocks={content.headings} />

              <div className="rounded-lg bg-light p-4">
                <p className="mb-2 text-lg font-semibold leading-tight tracking-tight lg:text-xl">
                  Join our newsletter for the latest business tips
                </p>
                <p className="mb-8 text-sm opacity-80">
                  Get monthly updates in your inbox. Unsubscribe at any time
                </p>

                <NewsletterForm size="small" />
              </div>
            </div>
          </div>
          <div>
            <div className="prose order-2 lg:order-1">
              <PortableText value={content.body} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
