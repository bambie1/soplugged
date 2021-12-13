import React, { FC } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

interface Props {
  description?: string;
  title?: string;
}

const SEO: FC<Props> = ({ description, title }) => {
  const router = useRouter();
  const firstUrl = router.pathname || "not-found";
  const url = "https://www.soplugged.com" + firstUrl;
  return (
    <Head>
      <meta name="description" content={description || ""} />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#cdb693" />
      <meta
        property="og:image"
        content="https://firebasestorage.googleapis.com/v0/b/soplugged-stg.appspot.com/o/splgd_og_image_tiny.png?alt=media&token=89cffe13-be44-4e77-b1ba-1d27049129ef"
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
