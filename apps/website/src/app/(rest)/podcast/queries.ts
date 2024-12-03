import { defineQuery, groq } from "next-sanity";

export const PODCAST_PAGE_QUERY = groq`
  *[_type == "podcast"][0]{
    title,
    description,  
    links 
  }
`;

export const EPISODES_QUERY = groq`*[_type == "episode"] | order(publishedAt desc){
  slug,title, body, coverImage, publishedAt, episodeNumber,
  season, businessName
}`;

export const EPISODE_QUERY =
  defineQuery(groq`*[_type == "episode" && slug.current == $slug][0]{
  title, body[]{
    ...,
    _type == "image" => {
      ...,
      asset->
    }
  }, coverImage, publishedAt,businessName, links, 
  "headings": body[style in [ "h2", "h3" ]]

}`);
