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
        <div className="mb-2 flex flex-1 flex-col items-start gap-3 xl:flex-row">
          <div className="relative aspect-video w-full flex-shrink-0 overflow-hidden rounded-lg border border-white object-cover shadow-none transition duration-200 group-hover:scale-[99%] group-hover:border-accent xl:aspect-square xl:w-[30%]">
            <Image
              src={blogImage.url}
              alt=""
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOcPGlSPQAFrwI48uvwCAAAAABJRU5ErkJggg==`}
            />
          </div>

          <div className="flex h-full flex-1 flex-col">
            <h3
              className="text-lg font-semibold transition duration-200 group-hover:text-primary group-hover:underline lg:text-2xl"
              title={title}
            >
              {title}
            </h3>
            <div className="mt-1 mb-4 flex flex-wrap gap-3">
              {categories.map((category) => (
                <CategoryPill category={category} isTiny />
              ))}
            </div>

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
        </div>
      </a>
    </Link>
  );
};

export default BlogCard;
