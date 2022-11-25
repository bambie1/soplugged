import { FC } from "react";

import BlogCard from "../BlogCard";

const Blogs: FC = ({ posts }: any) => {
  return (
    <div className="bg-white">
      <div className="mx-auto w-full py-16 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mx-auto mb-8 grid max-w-2xl gap-4 px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold xl:text-4xl">
            <span className="relative text-primary">
              Check out our blog
              <span className="absolute left-0 -bottom-1 h-3 w-full -rotate-2 bg-secondary/40" />
            </span>
          </h2>
          <p>
            We've penned-down some of our thoughts and general guidelines that
            have worked for us so far.
          </p>
        </div>

        <div className="relative w-full snap-x overflow-x-auto">
          <ul
            role="list"
            className="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:space-x-0"
          >
            {posts?.map((post: any) => {
              return (
                <li
                  key={post.slug}
                  className="inline-flex w-64 cursor-pointer snap-center flex-col lg:w-auto"
                >
                  <BlogCard post={post} hideDate />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
