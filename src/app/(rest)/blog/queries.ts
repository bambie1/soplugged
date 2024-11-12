import { defineQuery, groq } from "next-sanity";

export const POSTS_QUERY = groq`*[_type == "post"] | order(publishedAt desc){
  slug,title, body, mainImage, publishedAt,excerpt, author
}`;

export const POST_QUERY =
  defineQuery(groq`*[_type == "post" && slug.current == $slug][0]{
  title, body[]{
    ...,
    _type == "image" => {
      ...,
      asset->
    }
  }, mainImage, publishedAt, excerpt,author -> {
    name, image  
  },
  "headings": body[style in [ "h2", "h3" ]]

}`);
