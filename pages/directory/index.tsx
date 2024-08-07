import { GetStaticProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRef, useState } from "react";

import Grid from "@/components/directory/Grid";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import SEO from "@/components/SEO";
import { encodedCategories } from "@/lib/encodedCategories";
import { encodedLocations } from "@/lib/encodedLocations";
import { IBusiness } from "@/types/Business";
import supabase from "@/utils/supabase";

const DirectoryPage = ({ businesses }: { businesses: IBusiness[] }) => {
  const { query } = useRouter();
  const listInnerRef = useRef<any>();

  const [isAtEnd, setIsAtEnd] = useState(false);
  const [isAtBeginning, setIsAtBeginning] = useState(true);

  const onScroll = () => {
    if (listInnerRef.current) {
      const { clientWidth, scrollWidth, scrollLeft } = listInnerRef.current;

      setIsAtEnd(scrollLeft + clientWidth + 5 >= scrollWidth);
      setIsAtBeginning(scrollLeft === 0);
    }
  };

  const isLocationFilter = query.filter === "location";

  return (
    <>
      <SEO
        title="Discover Black-owned businesses | SoPlugged"
        description="Discover the best Black-owned businesses in Canada with SoPlugged's online directory."
      />
      <Header whiteBg />
      <main className="my-container mb-16 min-h-screen pt-12">
        <div className="flex flex-col items-center">
          <div className="mb-8 flex flex-col items-center">
            <h1 className="relative inline-block max-w-lg break-words text-center text-4xl font-semibold text-primary lg:text-5xl">
              Explore
            </h1>
            <span className="mt-2 text-lg lg:mt-4 lg:text-2xl">
              Businesses in Canada
            </span>
          </div>

          <div className="relative flex w-full overflow-auto">
            <div
              className={`pointer-events-none absolute bottom-0 left-0 flex w-10 justify-center bg-gradient-to-r from-white py-8 ${
                isAtBeginning ? "hidden" : "block"
              }`}
            ></div>
            <div
              onScroll={onScroll}
              className="overflow-x-auto bg-white"
              ref={listInnerRef}
            >
              <ul className="flex">
                {isLocationFilter
                  ? Object.keys(encodedLocations).map((location) => (
                      <li key={location}>
                        <Link
                          href={`/directory/l/${location}`}
                          className="m-1 inline-block whitespace-nowrap rounded-md border border-primary p-2 text-sm hover:opacity-80 lg:text-base"
                        >
                          {encodedLocations[location]}
                        </Link>
                      </li>
                    ))
                  : Object.keys(encodedCategories).map((category) => (
                      <li key={category}>
                        <Link
                          href={`/directory/c/${category}`}
                          className="m-1 inline-block whitespace-nowrap rounded-md border border-primary p-2 text-sm hover:opacity-80 lg:text-base"
                        >
                          {encodedCategories[category]}
                        </Link>
                      </li>
                    ))}
              </ul>
            </div>
            <div
              className={`pointer-events-none absolute bottom-0  right-0 flex w-10 justify-center bg-gradient-to-l from-white py-8 ${
                isAtEnd ? "hidden" : "block"
              }`}
            ></div>
          </div>

          <div className="mt-4 flex w-full">
            <Link
              href={
                isLocationFilter ? "/directory" : "/directory?filter=location"
              }
              className="z-10 ml-auto inline-flex text-sm underline"
            >
              Filter by {isLocationFilter ? "category" : "location"}
            </Link>
          </div>
          <Grid businesses={businesses} />
        </div>
      </main>
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const businesses = await getAllBusinesses();

  return {
    props: { businesses },
    revalidate: 5 * 60,
  };
};

const getAllBusinesses = async () => {
  const { data: businesses } = await supabase
    .from("businesses")
    .select(`*`)
    .eq("is_listed", true)
    .order("sample_images")
    .order("logo_url")
    .order("business_description");

  return businesses;
};

export default DirectoryPage;
