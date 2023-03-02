import { FC, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

import { BlogPost } from "@/types/BlogPost";
import CategoryPill from "@/components/blog/CategoryPill";
import BlogList from "@/components/blog/BlogList";
import ShareButtons from "@/components/blog/ShareButtons";

const Header = dynamic(() => import("../components/Header/Header"));
const Footer = dynamic(() => import("../components/Footer"));

interface Props {
  post: BlogPost;
  morePosts: BlogPost[];
}

const BlogPage: FC<Props> = ({ post, morePosts }) => {
  const [blogUrl, setBlogUrl] = useState("");

  useEffect(() => {
    setBlogUrl(window.location.href);
  }, []);

  if (!post) return null;

  const { title, content, author, createdAt, categories, blogImage } = post;

  return (
    <>
      <Header variant="blog" />
      <main className="relative mb-20">
        <div className="relative w-full">
          <div className="light-gradient absolute top-0 left-0 right-0 bottom-40 -z-10" />

          <div className="mx-auto max-w-[52rem] py-4 px-4 sm:px-6 lg:py-20">
            <div className="mb-2 flex flex-wrap gap-3">
              {categories.map((category) => (
                <CategoryPill category={category} key={category.title} />
              ))}
            </div>
            <h1 className="relative text-3xl font-semibold leading-[1.05] lg:text-5xl lg:leading-[1.2]">
              {title}
            </h1>
            <div className="mt-6 mb-8 flex flex-wrap items-center justify-between">
              <p className="uppercase">{author?.name || "SoPlugged team"}</p>
              <p className="text-gray-600">
                {new Date(createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </p>
            </div>
            <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow">
              <Image
                src={blogImage.url}
                alt=""
                objectFit="cover"
                layout="fill"
              />
            </div>
          </div>
        </div>

        <div className="my-container relative">
          <div className="top-0 left-0 mx-auto mt-4 max-w-[50rem] xl:absolute xl:mx-6 xl:w-[10rem]">
            <p className="xl:hidden">Share this article on:</p>
            <ShareButtons blogUrl={blogUrl} />
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: content.html }}
            className="prose mx-auto mt-8 mb-10 lg:prose-xl lg:mb-20 xl:mt-0"
          />

          <div>
            <div className="relative mb-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex">
                <h2 className="bg-white pr-4 text-lg font-semibold text-gray-700 lg:text-2xl">
                  Read more
                </h2>
              </div>
            </div>
            <BlogList posts={morePosts} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BlogPage;
