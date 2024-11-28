import { defineQuery, groq } from "next-sanity";

export const POLICIES_QUERY = groq`*[_type == "policy"] | order(publishedAt desc){
  slug,title, body, lastUpdated  
}`;

export const POLICY_QUERY =
  defineQuery(groq`*[_type == "policy" && slug.current == $slug][0]{
  title, body, lastUpdated 

}`);
