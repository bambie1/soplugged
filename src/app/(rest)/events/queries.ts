import { defineQuery, groq } from "next-sanity";

export const EVENTS_QUERY = groq`*[_type == "event"]{
  name, slug, eventType, date, venue, image, details, ctaLink, ctaLabel
}`;

export const EVENT_QUERY =
  defineQuery(groq`*[_type == "event" && slug.current == $slug][0]{
  name, date, details[]{
    ...,
    _type == "image" => {
      ...,
      asset->
    }
  }, image,  
}`);
