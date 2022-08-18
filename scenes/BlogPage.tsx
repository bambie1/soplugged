import Link from "next/link";
import { FC, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

import { ProPlug } from "@/components/ProPlug";
import BlogCard from "@/components/BlogCard";

const Header = dynamic(() => import("../components/Header"));
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

  const { title, content, subtitle, createdAt, seo } = post;

  return (
    <>
      <Header />
      <main className="mx-auto mb-10 max-w-2xl lg:max-w-none">
        <section className="my-container relative grid gap-4 pt-24 pb-10 lg:grid-cols-2 lg:gap-10 lg:pb-20">
          <div className="">
            <div className="flex flex-col py-4 lg:py-20">
              <h1 className="relative mb-8 text-3xl font-bold leading-[1.05] lg:mb-4 lg:text-5xl lg:leading-[1.2]">
                {title}
                {/* <span className="absolute left-0 top-8 h-3 w-full -rotate-2 bg-accent/40" /> */}
              </h1>
              <p className="">
                <span>{"SoPlugged team"}</span> &middot;{" "}
                {/* {createdAt.substring(0, 10)} */}
              </p>
              <div className="">
                <p className="">Share:</p>
                <FacebookShareButton url={blogUrl}>
                  <FontAwesomeIcon icon={faFacebook} />
                </FacebookShareButton>
                <TwitterShareButton url={blogUrl}>
                  <FontAwesomeIcon icon={faTwitter} />
                </TwitterShareButton>
                <WhatsappShareButton url={blogUrl}>
                  <FontAwesomeIcon icon={faWhatsapp} />
                </WhatsappShareButton>
              </div>
            </div>
          </div>
          <div className="relative">
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
          <div className="relative my-10 grid-cols-3 items-start gap-4 lg:grid lg:gap-8">
            <div
              dangerouslySetInnerHTML={{ __html: content.html }}
              className="prose col-span-2 col-start-1 max-w-none lg:mr-10"
            />
            <hr className="lg:hidden" />
            <div className="top-20 lg:sticky lg:my-20">
              <div className="flex min-h-[10rem] flex-col items-start rounded-xl bg-secondary/10 p-4 shadow shadow-accent/40 lg:p-8">
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
              <div className="overflow-x-auto">
                <ul className="mt-4 inline-flex grid-cols-4 gap-4 lg:grid lg:gap-8">
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
