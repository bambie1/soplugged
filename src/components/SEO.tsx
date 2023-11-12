import { FC } from "react";
import Head from "next/head";

interface Props {
  description?: string;
  title?: string;
  overrideImage?: string;
}

const SEO: FC<Props> = ({ description, title, overrideImage }) => {
  let ogImage =
    "https://res.cloudinary.com/denbpv9kp/image/upload/v1699825514/new-og_ewjrjb.png";

  if (overrideImage) ogImage = overrideImage;

  return (
    <Head>
      <meta name="description" content={description || ""} />
      <meta name="title" content={title} />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#fff" />
      <meta
        name="keywords"
        content="Black-owned, business, Canada, Ottawa, Toronto, hair, Calgary, buyblack, black, fashion"
      />
      <meta property="og:image" content={ogImage} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description || ""} />
      <meta property="og:site_name" content="SoPlugged" />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      <meta
        httpEquiv="Content-Security-Policy"
        content="upgrade-insecure-requests"
      />

      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
};

export default SEO;
