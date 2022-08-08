import { FC } from "react";

import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import BlogCard from "@/components/BlogCard";

interface Props {
  posts: any[];
}

const BlogsHomePage: FC<Props> = ({ posts }) => {
  return (
    <>
      <Header />
      <main>
        <section className="relative flex bg-gradient-to-b from-accent to-white pt-24 pb-20">
          <div className="my-container min-h-[30vh]">
            <div className="flex flex-col items-center justify-center p-10 lg:p-20">
              <h1 className="mx-auto mb-8 max-w-xl text-center text-3xl font-bold leading-[1.05] lg:mb-4 lg:text-5xl lg:leading-[1.2]">
                Blogs
              </h1>
            </div>
          </div>
        </section>

        <div className="my-container">
          <div className="">
            <ul className="mt-4 inline-flex grid-cols-3 gap-4 lg:grid lg:gap-8">
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
