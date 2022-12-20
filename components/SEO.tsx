import { FC } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

interface Props {
  description?: string;
  title?: string;
  variant?: "pro" | "blog";
}

const SEO: FC<Props> = ({ description, title, variant }) => {
  const router = useRouter();
  const firstUrl = router.asPath || "not-found";
  const url = "https://www.soplugged.com" + firstUrl;

  const ogImage =
    variant === "blog"
      ? "https://res.cloudinary.com/denbpv9kp/image/upload/v1661476048/soplugged_images/og_images/blog-og-image_l3ives.png"
      : variant === "pro"
      ? "https://res.cloudinary.com/denbpv9kp/image/upload/v1661476048/soplugged_images/og_images/pro-og-image_t2qdfh.png"
      : "https://res.cloudinary.com/denbpv9kp/image/upload/v1660913947/soplugged_images/og_images/og-img_ouruhc.png";

  return (
    <Head>
      <meta name="description" content={description || ""} />
      <meta name="title" content={title} />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#cdb693" />
      <meta
        name="keywords"
        content="black-owned, business, Canada, Ottawa, Toronto, hair, Calgary, buyblack, black, fashion"
      />
      <meta name="robots" content="follow, index" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description || ""} />
      <meta property="og:url" content={url} />
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
      <link rel="canonical" href={url} />
      <title>{title}</title>
    </Head>
  );
};

export default SEO;
