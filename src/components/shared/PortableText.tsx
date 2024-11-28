import type { PortableTextComponents, PortableTextProps } from "next-sanity";
import { PortableText as SanityPortableText, toPlainText } from "next-sanity";
import slugify from "slugify";

import { urlFor } from "@/sanity/lib/image";

const components: PortableTextComponents = {
  types: {
    image: ({ value }) => (
      <img src={urlFor(value.asset).url()} alt={value.alt} />
    ),
  },
  block: {
    h2: ({ children, value }) => {
      // `value` is the single Portable Text block for this header
      const slug = slugify(toPlainText(value));
      return <h2 id={slug}>{children}</h2>;
    },
    h3: ({ children, value }) => {
      const slug = slugify(toPlainText(value));
      return <h3 id={slug}>{children}</h3>;
    },
  },
};

export const PortableText = (props: PortableTextProps) => {
  return <SanityPortableText components={components} {...props} />;
};
