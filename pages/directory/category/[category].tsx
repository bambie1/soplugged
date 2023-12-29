import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/outline";
import type { GetStaticPathsResult, GetStaticProps } from "next";

import SEO from "@/src/components/SEO";
import { categoryMetaDescriptions } from "@/lib/categoryMetaDescriptions";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";

export default function Page(props: { businesses: any[] }) {
  const category = "Hair / Beauty";

  const seoTitle = `${category} Black-owned businesses | SoPlugged`;

  const seoDescription = `Discover the best Black-owned ${category} businesses in Canada with SoPlugged's online directory. ${categoryMetaDescriptions[category]}`;

  return (
    <>
      <SEO title={seoTitle} description={seoDescription} />
      <Header whiteBg />
      <main className="mb-16 min-h-screen pt-12">
        <div className="flex flex-col items-center">
          <div className="my-container mb-8 flex flex-col items-center">
            <Link href="/search/all">
              <a className="mb-5 -mt-4 flex gap-2 self-start rounded-3xl text-gray-500">
                <ArrowLeftIcon className="h-6 w-6" strokeWidth={0.8} />
                Back to all categories
              </a>
            </Link>

            <h1 className="relative inline-block max-w-lg break-words text-center text-4xl font-semibold text-primary lg:text-5xl">
              {category || "Explore"}
            </h1>
            <span className="mt-2 text-lg lg:mt-4 lg:text-2xl">
              Businesses in Canada
            </span>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

type Params = {
  category: string;
};

export function getStaticPaths(): GetStaticPathsResult<Params> {
  return {
    paths: [],
    fallback: true,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {
      businesses: [],
    },
    revalidate: 5 * 60 * 60,
  };
};
