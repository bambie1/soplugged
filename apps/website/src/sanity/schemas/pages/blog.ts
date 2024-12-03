import { type Rule } from "sanity";

export const blogPageType = {
  name: "blogsPage",
  type: "document",
  title: "Blog",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "description",
      type: "string",
      title: "Description",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "seo",
      title: "SEO Metadata",
      type: "seo",
    },
  ],
};
