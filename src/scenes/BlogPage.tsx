import { FC, useEffect, useState } from "react";
import Image from "next/image";

import { BlogPost } from "@/types/BlogPost";
import CategoryPill from "@/components/blog/CategoryPill";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import BlogCard from "@/components/blog/BlogCard";

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

  const {
    title,
    content,
    author,
    createdAt,
    categories,
    blogImage,
    blogImageAlt,
  } = post;

  return (
    <>
      <Header />
      <main className="relative mb-20">
        <div className="relative w-full">
          <div className="bg-light py-10 xl:py-20">
            <section className="mx-auto max-w-3xl px-4 sm:px-6">
              <div className="mb-4 flex flex-wrap gap-3">
                {categories.map((category) => (
                  <CategoryPill category={category} key={category.title} />
                ))}
              </div>

              <h1 className="mb-6 max-w-2xl text-4xl font-semibold text-primary sm:text-5xl">
                {title}
              </h1>

              <div className="mt-6 mb-8 flex flex-wrap items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative aspect-square w-8 flex-shrink-0 overflow-hidden rounded-full bg-gray-400">
                    <Image
                      src={post.author.picture.url}
                      layout="fill"
                      objectFit="cover"
                      alt={`Profile picture for ${post.author.name}`}
                    />
                  </div>
                  <div>
                    <p className="uppercase text-gray-600">{author.name}</p>
                    <p className="text-sm font-semibold text-gray-600">
                      SoPlugged team
                    </p>
                  </div>
                </div>
                <p className="text-gray-600">
                  {new Date(createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
              </div>
            </section>
          </div>

          <div className="mx-auto -mt-10 max-w-3xl px-4 sm:px-6 lg:-mt-20">
            <div className="relative mx-auto aspect-video w-full max-w-3xl overflow-hidden rounded-lg px-4 shadow sm:px-6">
              <Image
                src={blogImage.url}
                alt={blogImageAlt}
                objectFit="cover"
                layout="fill"
                priority
              />
            </div>

            <div
              dangerouslySetInnerHTML={{ __html: content.html }}
              className="prose mt-6 mb-10 border-t pt-6 prose-h2:mb-2 prose-h2:text-primary prose-a:text-primary prose-blockquote:mt-2 prose-blockquote:text-gray-600 prose-strong:font-semibold prose-img:mb-2 prose-img:rounded-lg lg:prose-lg lg:mb-20 lg:prose-h2:mb-2 lg:prose-blockquote:mt-2 lg:prose-blockquote:text-base lg:prose-img:mb-2 xl:border-none"
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
              <ul className="inline-flex w-full flex-wrap gap-8 md:grid md:grid-cols-2 xl:gap-12 xl:gap-y-20">
                {morePosts?.map((post) => {
                  return (
                    <li
                      key={post.slug}
                      className="w-full border-b-2 last:border-none md:border-none"
                    >
                      <BlogCard post={post} />
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BlogPage;
