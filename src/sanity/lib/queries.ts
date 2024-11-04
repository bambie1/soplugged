import { defineQuery, groq } from "next-sanity";

export const HOME_PAGE_QUERY = groq`
  *[_type == "home"][0]{
    title,
    subtitle,
    video,
    cta {
      label,
      link->{
        slug
      }
    }, 
    featuredEvent {
      ctaLabel,
      ctaLink,
      title,
      event->{
        name,
        details,
        date,
        image,
        ctaLink,
        ctaLabel
      }
    },
    ourMission {
      title,
      missionCarousel[]{
         backgroundColor,
        image,
        title,
        description
      }
    } ,
    featuredBusinesses {
      title,
      description,
      featuredCategories[]{
        category->{
          name,
          slug
        },
        selectedBusinesses[]->{
          name,
          slug,
          sample_images[]{
            asset-> {
              url
            }
          }
        }
      }
    }  
  }
`;

export const HOME_POSTS_QUERY = groq`*[_type == "post"] | order(publishedAt desc)[0...3]{
  slug, title, body, mainImage, excerpt,publishedAt
}`;

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
  }, mainImage, publishedAt, excerpt,author ->
}`);

export const EVENTS_QUERY = groq`*[_type == "event"]{
  name, slug, eventType, date, venue, image, details, ctaLink, ctaLabel
}`;

export const EVENT_QUERY =
  defineQuery(groq`*[_type == "event" && slug.current == $slug][0]{
  name, details[]{
    ...,
    _type == "image" => {
      ...,
      asset->
    }
  }, image,  
}`);
