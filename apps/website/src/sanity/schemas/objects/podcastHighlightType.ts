import { defineField, defineType } from "sanity";

export const podcastHighlightType = defineType({
  name: "podcastHighlight",
  title: "Podcast Highlight",
  type: "object",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      validation: (rule) =>
        rule.required().error("A section title is required"),
    }),
    defineField({
      name: "description",
      type: "string",
      title: "Description",
      validation: (rule) => rule.required().error("A description is required"),
    }),
    defineField({
      name: "episodes",
      type: "array",
      of: [{ type: "reference", to: { type: "episode" } }],
      validation: (rule) =>
        rule.min(3).max(3).error("You must select 3 episodes"),
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        subtitle: "Podcast Highlight",
        title,
      };
    },
  },
});
