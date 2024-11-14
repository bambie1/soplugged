import { defineField, type Rule } from "sanity";

export const eventPageType = {
  name: "eventsPage",
  type: "document",
  title: "Event",
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
    defineField({
      name: "images",
      type: "array",
      of: [{ type: "image" }],
      validation: (Rule) => Rule.min(4),
    }),
  ],
};
