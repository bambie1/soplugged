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

import { PageWrapper } from "@/components/PageWrapper";
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
      <main>
        <section className="relative flex bg-gradient-to-b from-accent to-white pt-24 pb-20">
          <div className="my-container min-h-[30vh]">
            <div className="flex flex-col items-center justify-center p-10 lg:p-20">
              <p className="">{subtitle}</p>
              <h1 className="mx-auto mb-8 max-w-xl text-center text-3xl font-bold leading-[1.05] lg:mb-4 lg:text-5xl lg:leading-[1.2]">
                {title}
              </h1>{" "}
              <p className="">
                <span>{"SoPlugged team"}</span> &middot;{" "}
                {/* {createdAt.substring(0, 10)} */}
              </p>
            </div>
          </div>
        </section>
        <div className="my-container">
          <div className="relative mb-10 grid-cols-3 items-start gap-4 lg:grid lg:gap-8">
            <div className="col-span-2 col-start-1 flex flex-col">
              <img
                src={seo.image.url}
                alt=""
                className="aspect-[2/1] w-full rounded-lg object-cover"
              />
              <div
                dangerouslySetInnerHTML={{ __html: content.html }}
                className="prose mt-10 max-w-none"
              />
            </div>
            <hr className="lg:hidden" />
            <div className="top-20 min-h-[10rem] border border-black lg:sticky">
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
