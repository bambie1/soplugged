import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import SEO from "@/components/SEO";
import Grid from "@/components/directory/Grid";
import { GetStaticProps } from "next";
var Airtable = require("airtable");

const DirectoryPage = ({ businesses }) => {
  return (
    <>
      <SEO
        title="Discover Black-owned businesses | SoPlugged"
        description="Discover the best Black-owned businesses in Canada with SoPlugged's online directory."
      />
      <Header whiteBg />
      <main className="mb-16 min-h-screen pt-12">
        <div className="flex flex-col items-center">
          <div className="my-container mb-8 flex flex-col items-center">
            <h1 className="relative inline-block max-w-lg break-words text-center text-4xl font-semibold text-primary lg:text-5xl">
              Explore
            </h1>
            <span className="mt-2 text-lg lg:mt-4 lg:text-2xl">
              Businesses in Canada
            </span>
          </div>

          <div className="my-container mt-10 w-full">
            <Grid businesses={businesses} />
          </div>
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
  };
};

const getAllBusinesses = async () => {
  let base = new Airtable({
    apiKey: process.env.AIRTABLE_SOPLUGGED_API_KEY,
  }).base("appMt18vrIMQC8k6h");

  const businesses = [];

  const records = await base("Businesses")
    .select({
      maxRecords: 50,
      fields: [
        "id",
        "business_name",
        "business_location",
        "logo_url",
        "sample_images",
        "category",
        "slug",
        "verified",
      ],
      sort: [
        { field: "sample_images", direction: "desc" },
        { field: "verified", direction: "desc" },
        {
          field: "logo_url",
          direction: "desc",
        },
      ],
    })
    .all();

  records.forEach((record) => {
    businesses.push(record.fields);
  });

  return businesses;
};

export default DirectoryPage;
