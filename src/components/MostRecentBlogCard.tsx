import Link from "next/link";
import { FC } from "react";
import Image from "next/image";
import { BlogPost } from "@/types/BlogPost";

interface Props {
  post: BlogPost;
}

const MostRecentBlogCard: FC<Props> = ({ post }) => {
  const { excerpt, blogImage, slug, createdAt, title } = post;

  return (
    <Link href={`/blog/${slug}`}>
      <a className="group mb-6 flex h-full flex-col gap-4 lg:flex-row lg:gap-8">
        <div className="relative aspect-video w-full flex-shrink-0 overflow-hidden rounded-lg border border-white object-cover shadow-none transition duration-200 group-hover:scale-[99%] group-hover:border-accent lg:w-[50%]">
          <Image
            src={blogImage.url}
            alt=""
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOcPGlSPQAFrwI48uvwCAAAAABJRU5ErkJggg==`}
          />
        </div>
        <div className="mt-2 flex flex-col">
          <h3
            className="mb-2 text-xl font-semibold transition duration-200 group-hover:underline lg:text-3xl"
            title={title}
          >
            {title}
          </h3>
          <p className="mb-1 text-gray-600 lg:block">{excerpt}</p>

          <p className="text-gray-600">
            {new Date(createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </p>
        </div>
      </a>
    </Link>
  );
};

export default MostRecentBlogCard;
