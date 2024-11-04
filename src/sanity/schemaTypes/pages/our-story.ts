import type { Rule } from "sanity";

export default {
  name: "our-story",
  type: "document",
  title: "Our Story",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
};
