import { FC } from "react";
import dynamic from "next/dynamic";

import BlogCard from "@/components/BlogCard";

const ProHeader = dynamic(() => import("../components/Header/ProHeader"));
const Footer = dynamic(() => import("../components/Footer/Footer"));

interface Props {
  posts: any[];
}

const BlogsHomePage: FC<Props> = ({ posts }) => {
  return (
    <>
      <ProHeader />
      <main className="mb-10 lg:mb-20">
        <section className="relative flex bg-gradient-to-b from-accent to-white py-14 md:pt-16 md:pb-14 lg:pt-24 lg:pb-20">
          <div className="my-container flex min-h-[30vh] items-center justify-center text-center">
            <div className="flex flex-col items-center justify-center p-10 lg:p-20">
              <h1 className="mx-auto mb-8 max-w-xl text-3xl font-bold leading-[1.05] text-primary lg:mb-4 lg:text-5xl lg:leading-[1.2]">
                SoPlugged blog
              </h1>
              <p className="lg:text-lg">
                Helpful guides to create or improve your business' digital
                presence
              </p>
            </div>
          </div>
        </section>

        <div className="my-container">
          <div className="">
            <ul className="mt-4 inline-flex grid-cols-2 flex-wrap gap-8 md:grid lg:grid-cols-3">
              {posts?.map((post: any) => (
                <li
                  key={post.slug}
                  className="min-w-[70vw] md:min-w-[20rem] lg:min-w-0"
                >
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
