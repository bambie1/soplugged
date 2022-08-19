import React, { FC } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

interface Props {
  description?: string;
  title?: string;
}

const SEO: FC<Props> = ({ description, title }) => {
  const router = useRouter();
  const firstUrl = router.asPath || "not-found";
  const url = "https://www.soplugged.com" + firstUrl;

  return (
    <Head>
      <meta name="description" content={description || ""} />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#cdb693" />
      <meta
        name="keywords"
        content="black-owned, business, Canada, Ottawa, Toronto, hair, Calgary, buyblack, black, fashion"
      />
      <meta
        property="og:image"
        content="https://res.cloudinary.com/denbpv9kp/image/upload/v1660913947/soplugged_images/og_images/og-img_ouruhc.png"
      />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description || ""} />
      <meta property="og:url" content={url} />
      <meta
        httpEquiv="Content-Security-Policy"
        content="upgrade-insecure-requests"
      />

      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/favicon.ico" />
      <link rel="canonical" href={url} />
      <title>{title}</title>
    </Head>
  );
};

export default SEO;
