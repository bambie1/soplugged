import { defineField, defineType } from "sanity";

export const episodeType = defineType({
  name: "episode",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "links",
      type: "object",
      fields: [
        {
          name: "youtube",
          type: "url",
        },
      ],
    }),
    defineField({
      name: "businessName",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "businessName",
        maxLength: 96,
      },
    }),
    {
      name: "episodeNumber",
      title: "Episode Number",
      type: "number",
      validation: (Rule) => Rule.required().positive().integer(),
    },
    {
      name: "season",
      title: "Season",
      type: "number",
      description: "Season number for the episode",
      validation: (Rule) => Rule.positive().integer(),
    },
    defineField({
      name: "description",
      type: "string",
      validation: (Rule) =>
        Rule.required()
          .min(20)
          .max(500)
          .warning("Keep it between 20 and 500 characters."),
    }),
    defineField({
      name: "owner",
      type: "string",
    }),
    defineField({
      name: "coverImage",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "publishedAt",
      type: "datetime",
    }),
    defineField({
      name: "body",
      type: "blockContent",
    }),
  ],

  preview: {
    select: {
      title: "title",
      media: "coverImage",
    },
    prepare(selection) {
      const { title, media } = selection;
      return {
        title: title,
        media: media,
      };
    },
  },
});
