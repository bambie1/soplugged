import Link from "next/link";
import { PortableText } from "next-sanity";

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { POSTS_QUERY } from "@/sanity/lib/queries";

export default async function Home() {
  const content = await client.fetch(POSTS_QUERY);

  if (!content) {
    return null;
  }

  console.log(content);

  return (
    <main>
      Blog page
      <div className="padded grid gap-10 lg:grid-cols-3">
        {content.map((post) => (
          <Link href={`/blog/${post.slug.current}`} key={post.title}>
            <article key={post.title}>
              <img src={urlFor(post.mainImage).url()} alt="" />
              <h2>{post.title}</h2>
            </article>
          </Link>
        ))}
      </div>
    </main>
  );
}
