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
          <Image src={blogImage.url} alt="" layout="fill" objectFit="cover" />
        </div>
        <div className="mt-2 flex flex-col">
          <h3
            className="mb-2 font-semibold uppercase lg:truncate"
            title={title}
          >
            {title}
          </h3>
          <p className="mb-2 hidden text-sm lg:block lg:truncate">{excerpt}</p>
          <p className="mt-auto text-sm">
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
