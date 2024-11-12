import { defineField, type Rule } from "sanity";

export const podcastPageType = {
  name: "podcast",
  type: "document",
  title: "Podcast",
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
    defineField({
      name: "links",
      type: "object",
      fields: [
        {
          name: "youtube",
          type: "url",
        },
        {
          name: "spotify",
          type: "url",
        },
        {
          name: "applePodcasts",
          type: "url",
        },
      ],
    }),
  ],
};
