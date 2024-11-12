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
