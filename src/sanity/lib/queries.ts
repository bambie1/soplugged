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
        slug,
        details,
        date,
        image,
        ctaLink,
        ctaLabel
      }
    },
    podcastHighlight {
      title, 
      description,
      episodes[]->{
        title,
        slug,
        coverImage, 
        episodeNumber,
        season,
        owner,
        businessName
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
  slug, title, mainImage, excerpt,publishedAt
}`;

export const HOME_TBM_QUERY = groq`*[_type == "episode"] | order(publishedAt desc)[0...3]{
  slug, title, coverImage, excerpt,publishedAt, episodeNumber, season
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
  }, mainImage, publishedAt, excerpt,author -> {
    name, image  
  },
  "headings": body[style in [ "h2", "h3" ]]

}`);

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
