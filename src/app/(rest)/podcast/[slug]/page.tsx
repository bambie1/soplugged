import type { Metadata } from "next";
import Link from "next/link";
import type { PortableTextComponents } from "next-sanity";
import { PortableText, toPlainText } from "next-sanity";
import slugify from "slugify";

import { TableOfContents } from "@/components/blog/TableOfContents";
import { Header } from "@/components/Header";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { getDate } from "@/utils/getDate";

import { EPISODE_QUERY, EPISODES_QUERY } from "../queries";

export async function generateStaticParams() {
  const posts = await client.fetch(EPISODES_QUERY);

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
  const content = await client.fetch(EPISODE_QUERY, { slug });

  return {
    title: `${content.title} | SoPlugged Blog`,
    openGraph: {
      images: [urlFor(content.coverImage).url()],
      description: content.excerpt,
    },
  };
}

const components: PortableTextComponents = {
  block: {
    h2: ({ children, value }) => {
      // `value` is the single Portable Text block for this header
      const slug = slugify(toPlainText(value));
      return <h2 id={slug}>{children}</h2>;
    },
    h3: ({ children, value }) => {
      const slug = slugify(toPlainText(value));
      return <h3 id={slug}>{children}</h3>;
    },
  },
};

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  const content = await client.fetch(EPISODE_QUERY, { slug });

  if (!content) {
    return null;
  }

  return (
    <>
      <Header isDark />
      <div className="relative -mb-10 pt-20 text-white lg:pt-48">
        <div className="bg-tbm-gradient absolute left-0 right-0 top-0 -z-10 h-[80%]"></div>
        <div className="padded">
          <div className="mb-10 flex items-center gap-4">
            <Link href="/podcast" className="underline opacity-70">
              TBM Podcast
            </Link>
            <p>{content.businessName}</p>
          </div>
          <h1 className="mb-10 max-w-3xl lg:mb-16">{content.title}</h1>

          <img
            src={urlFor(content.coverImage).url()}
            alt=""
            className="aspect-video max-w-4xl rounded-xl"
          />

          <div className="py-4 text-black">Youtube</div>
          <hr className="mb-10 max-w-3xl" />
        </div>
      </div>

      <div className="padded mb-20 mt-12">
        <div className="prose">
          <PortableText value={content.body} components={components} />
        </div>
      </div>
    </>
  );
}
