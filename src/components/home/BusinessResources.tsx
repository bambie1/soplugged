import { FC } from "react";

import { BlogPost } from "@/types/BlogPost";

import BlogCard from "../blog/BlogCard";

interface Props {
  posts: BlogPost[];
}
const BusinessResources: FC<Props> = ({ posts }) => {
  return (
    <div className="py-10">
      <div className="my-container">
        <div className="mb-8 grid max-w-xl gap-4">
          <h2 className="text-3xl font-semibold text-primary xl:text-4xl">
            The Business Corner
          </h2>
          <p>
            We've penned-down some of our thoughts and general guidelines that
            have worked for us so far.
          </p>
        </div>

        <ul className="inline-flex w-full flex-wrap gap-8 md:grid md:grid-cols-2 lg:grid-cols-3 xl:gap-12 xl:gap-y-20">
          {posts?.map((post) => {
            return (
              <li key={post.slug} className="w-full">
                <BlogCard post={post} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default BusinessResources;
