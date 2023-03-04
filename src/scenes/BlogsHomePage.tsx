import { FC } from "react";
import dynamic from "next/dynamic";

import { BlogPost } from "@/types/BlogPost";
import MostRecentBlogCard from "@/components/blog/MostRecentBlogCard";
import BlogList from "@/components/blog/BlogList";

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
              <p className="mx-auto hidden max-w-3xl text-lg text-gray-600 md:block lg:text-xl">
                Explore our blog for helpful guides on creating or improving
                your business' digital presence and to stay up-to-date with the
                latest SoPlugged news.
              </p>

              <p className="text-lg text-gray-600 md:hidden">
                Stay updated with SoPlugged news and helpful business tips
              </p>
            </div>
          </div>
        </section>

        <div className="my-container">
          <MostRecentBlogCard post={posts[0]} />

          <div className="mt-8 flex flex-col lg:mt-20">
            <div className="relative mb-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex">
                <h2 className="bg-white pr-4 text-lg font-semibold text-gray-700 lg:text-2xl">
                  Recent posts
                </h2>
              </div>
            </div>

            <BlogList posts={posts.filter((_, i) => i !== 0)} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BlogsHomePage;
