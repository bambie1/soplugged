import Link from "next/link";
import { FC } from "react";
import Image from "next/image";

import { BlogPost } from "@/types/BlogPost";
import CategoryPill from "./CategoryPill";

interface Props {
  post: BlogPost;
  isExtended?: boolean;
}

const BlogCard: FC<Props> = ({ post }) => {
  const { excerpt, blogImage, slug, createdAt, title, categories, author } =
    post;

  return (
    <Link href={`/blog/${slug}`}>
      <a className="group flex h-full flex-col">
        <div className="mb-2 flex flex-1 items-start gap-3">
          <div className="relative aspect-square w-[20%] flex-shrink-0 overflow-hidden rounded-lg border border-white object-cover shadow-none transition duration-200 group-hover:scale-[99%] group-hover:border-accent">
            <Image
              src={blogImage.url}
              alt=""
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOcPGlSPQAFrwI48uvwCAAAAABJRU5ErkJggg==`}
            />
          </div>

          <div>
            <h3
              className="mb-2 text-lg font-semibold transition duration-200 group-hover:text-primary group-hover:underline lg:text-2xl"
              title={title}
            >
              {title}
            </h3>
            <div className="mt-1 mb-4 flex flex-wrap gap-3">
              {categories.map((category) => (
                <CategoryPill category={category} />
              ))}
            </div>
          </div>
        </div>
        <div className="mt-auto flex flex-col">
          <p className="mb-4 text-gray-600 line-clamp-2 lg:text-base">
            {excerpt}
          </p>

          <div className="mt-auto">
            <p className="lg:text-base">{author.name}</p>
            <p className="text-sm text-gray-600 lg:text-sm">
              {new Date(createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default BlogCard;
