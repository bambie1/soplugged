import type { Metadata } from "next";

import { Nav } from "@/components/nav";
import BlogCard from "@/components/shared/BlogCard";
import { SubscribeBanner } from "@/components/shared/SubscribeBanner";
import { client } from "@/sanity/lib/client";

import { POSTS_QUERY } from "./queries";

export const metadata: Metadata = {
  title: "The Business Corner | SoPlugged Blog",
  description: "Empowering Black entrepreneurs & creators",
};

export default async function BlogPage() {
  const content = await client.fetch(POSTS_QUERY);

  if (!content) {
    return null;
  }

  return (
    <>
      <div className="relative z-10">
        <Nav isLight />

        <div className="absolute left-0 top-0 -z-10 h-80 w-full bg-gradient-to-b from-[#F2EDE3] to-white"></div>

        <div className="mx-auto flex max-w-3xl flex-col items-center px-4 pb-16 pt-36 text-center text-primary lg:pt-48">
          <h1 className="large mb-4">The Business Corner</h1>
          <p className="lg:text-lg">
            SoPlugged updates, and helpful resources to grow your business as an
            entrepreneur
          </p>
        </div>

        <div className="padded mb-20">
          <div className="mt-20 grid gap-10 lg:grid-cols-3">
            {content.map((post: any) => (
              <BlogCard post={post} key={post.title} />
            ))}
          </div>
        </div>

        <SubscribeBanner />
      </div>
    </>
  );
}
