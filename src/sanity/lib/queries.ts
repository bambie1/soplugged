import { defineQuery, groq } from "next-sanity";

export const HOME_PAGE_QUERY = groq`
  *[_type == "page"][1]
`;

export const POST_QUERY =
  defineQuery(groq`*[_type == "post" && slug.current == $slug][0]{
  title, body, mainImage
}`);
