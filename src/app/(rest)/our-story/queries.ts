import { defineQuery, groq } from "next-sanity";

export const OURSTORY_PAGE_QUERY = groq`
  *[_type == "our-story"][0]{
    title,
    description, images[]{
      asset-> {
        url
      }
    }, content,
    ourPartners,
    meetTheTeam {
      title,
      content,
      members[]->{
        name,
        slug,
        image,
        role
      }
    } 
  }
`;
