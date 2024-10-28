import { defineQuery, groq } from "next-sanity";

export const PAGE_QUERY = defineQuery(groq`*[_type == "page"]{
  pageBuilder[]{
    _type == "hero" => {
      _type,
      heading,
      tagline,
      image
    },
    _type == "callToAction" => @-> {
      _type,
      title,
      link
    }
  },
}`);

export const POST_QUERY =
  defineQuery(groq`*[_type == "post" && slug.current == $slug][0]{
  title, body, mainImage
}`);
