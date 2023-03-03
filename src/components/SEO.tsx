import { FC } from "react";
import Head from "next/head";

interface Props {
  description?: string;
  title?: string;
  variant?: "pro" | "blog" | "pluggedin";
  overrideImage?: string;
}

const SEO: FC<Props> = ({ description, title, variant, overrideImage }) => {
  let ogImage =
    "https://res.cloudinary.com/denbpv9kp/image/upload/v1660913947/soplugged_images/og_images/og-img_ouruhc.png";

  switch (variant) {
    case "blog":
      ogImage =
        "https://res.cloudinary.com/denbpv9kp/image/upload/v1661476048/soplugged_images/og_images/blog-og-image_l3ives.png";
      break;
    case "pro":
      ogImage =
        "https://res.cloudinary.com/denbpv9kp/image/upload/v1661476048/soplugged_images/og_images/pro-og-image_t2qdfh.png";
      break;
    case "pluggedin":
      ogImage =
        "https://res.cloudinary.com/denbpv9kp/image/upload/v1673299410/soplugged_images/og_images/og-pluggedin_d8bor7.png";
      break;
    default:
      break;
  }

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
