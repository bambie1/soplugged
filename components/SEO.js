import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

const SEO = ({ description, title }) => {
  const router = useRouter();
  const firstUrl = router.pathname || "not-found";
  const url = "https://www.soplugged.com" + firstUrl === "/" ? "" : firstUrl;
  return (
    <Head>
      <meta name="description" content={description || ""} />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#cdb693" />
      <meta
        property="og:image"
        content="https://firebasestorage.googleapis.com/v0/b/soplugged-stg.appspot.com/o/soplugged_og_image.PNG?alt=media&token=f17aa7ce-764f-4b99-bf0a-31ac7f7e27d7"
      />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description || ""} />
      <meta property="og:url" content={url} />

      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/favicon.ico" />
      <link rel="canonical" href={url} />
      <title>{title}</title>
    </Head>
  );
};

export default SEO;
