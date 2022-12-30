import { FC } from "react";
import dynamic from "next/dynamic";

import BlogCard from "@/src/components/BlogCard";
import { BlogPost } from "@/types/BlogPost";

const Header = dynamic(() => import("../components/Header/Header"));
const Footer = dynamic(() => import("../components/Footer"));

interface Props {
  posts: BlogPost[];
}

const BlogsHomePage: FC<Props> = ({ posts }) => {
  return (
    <>
      <Header variant="blog" />
      <main className="mb-10 lg:mb-20">
        <section className="relative flex">
          <div className="my-container flex min-h-[30vh] items-center justify-center text-center">
            <div className="flex flex-col items-center justify-center p-10 lg:p-20">
              <h1 className="h1 mx-auto mb-4 max-w-xl">SoPlugged blog</h1>
              <p className="text-lg lg:text-xl">
                Helpful guides to create or improve your business' digital
                presence
              </p>
            </div>
          </div>
        </section>

        <div className="my-container">
          <div className="flex">
            <ul className="mt-4 inline-flex w-full grid-cols-2 flex-wrap gap-8 md:grid lg:grid-cols-3 2xl:grid-cols-4">
              {posts?.map((post) => (
                <li key={post.slug} className="w-full">
                  <BlogCard post={post} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
      <Footer tertiary />
    </>
  );
};

export default BlogsHomePage;
