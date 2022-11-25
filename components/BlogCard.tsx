import Link from "next/link";
import { FC } from "react";
import Image from "next/image";

interface Props {
  post: any;
}

const BlogCard: FC<Props> = ({ post }) => {
  const { excerpt, blogImage, slug, createdAt, title } = post;

  return (
    <Link href={`/blog/${slug}`}>
      <a className="group flex h-full flex-col">
        <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-white object-cover shadow-none transition duration-200 group-hover:scale-[97%] group-hover:border-accent">
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
            className="mb-2 font-semibold uppercase lg:truncate"
            title={title}
          >
            {title}
          </h3>
          <p className="mb-1 truncate text-sm lg:block">{excerpt}</p>

          <p className="text-xs text-gray-600">
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

export default BlogCard;
