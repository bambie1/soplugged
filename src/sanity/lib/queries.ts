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
    missionTitle,
    missionDescription,
    ourMission,
    featuredEvent {
      ctaLabel,
      ctaLink,
      title,
      event->{
        name,
        details,
        date,
        image
      }
    }
  }
`;

export const POST_QUERY =
  defineQuery(groq`*[_type == "post" && slug.current == $slug][0]{
  title, body, mainImage
}`);
