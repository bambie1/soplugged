import Link from "next/link";
import { FC, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";

import BlogCard from "@/components/BlogCard";

const ProHeader = dynamic(() => import("../components/Header/ProHeader"));
const Footer = dynamic(() => import("../components/Footer/Footer"));

interface Props {
  post: any;
  morePosts: any;
}

const BlogPage: FC<Props> = ({ post, morePosts }) => {
  const [blogUrl, setBlogUrl] = useState("");

  useEffect(() => {
    setBlogUrl(window.location.href);
  }, []);

  if (!post) return null;

  const { title, content, createdBy, createdAt, seo } = post;

  return (
    <>
      <ProHeader />
      <main className="mx-auto mb-10 max-w-2xl  lg:max-w-none">
        <section className="my-container relative grid items-center gap-4 py-10 lg:grid-cols-2 lg:gap-10">
          <div className="flex flex-col py-4 lg:py-20">
            <h1 className="relative mb-4 text-3xl font-bold leading-[1.05] lg:mb-2 lg:text-5xl lg:leading-[1.2]">
              {title}
            </h1>
            <p className="text-gray-700">{seo.description}</p>

            <div className="mt-6">
              <p className="uppercase">{createdBy?.name || "SoPlugged team"}</p>
              <p className="text-sm text-gray-600">
                {new Date(createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>
          <div className="relative row-start-1 lg:row-start-auto">
            <img
              src={seo.image.url}
              alt=""
              loading="lazy"
              className="ml-auto aspect-[3/2] w-full rounded-lg object-cover lg:w-[90%]"
            />
            <div className="absolute -bottom-10 left-0 -z-[1] hidden h-full w-[90%] rounded-lg bg-gradient-to-tr from-white to-accent/50 lg:block"></div>
          </div>
        </section>
        <div className="my-container">
          <div className="relative grid-cols-3 items-start gap-4 lg:my-10 lg:grid lg:gap-8">
            <div
              dangerouslySetInnerHTML={{ __html: content.html }}
              className="prose col-span-2 col-start-1 max-w-none lg:mr-10"
            />
            <hr className="mt-10 mb-4 lg:hidden" />
            <div className="top-20 lg:sticky lg:my-20">
              <div className="mb-6 flex flex-col items-start rounded-xl border-secondary p-4 lg:p-0">
                <p className="">Share:</p>
                <div className="mt-4 flex items-center gap-4">
                  <FacebookShareButton url={blogUrl}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-facebook"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </FacebookShareButton>
                  <TwitterShareButton url={blogUrl}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-twitter"
                    >
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </TwitterShareButton>
                  <LinkedinShareButton url={blogUrl}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-linkedin"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </LinkedinShareButton>
                </div>
              </div>
              <div className="flex min-h-[10rem] flex-col items-start rounded-xl bg-accent/10 p-4 shadow shadow-accent/40 lg:p-8">
                <h3 className="mb-4 text-lg font-semibold lg:text-xl">
                  List your business on SoPlugged for FREE
                </h3>
                <p>
                  SoPlugged is an online platform that makes #buyingblack easy!
                </p>
                <Link href="/my-business">
                  <a className="mt-8 rounded-lg border border-primary p-4 text-primary">
                    Add your business
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="">
            <div className="">
              <h3>READ MORE...</h3>
              <div className="overflow-x-auto pb-2">
                <ul className="mt-4 inline-flex gap-4 lg:grid lg:grid-cols-4 lg:gap-8">
                  {morePosts?.map((post: any) => (
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
          </div>
        </div>
      </main>
      <Footer tertiary />
    </>
  );
};

export default BlogPage;
