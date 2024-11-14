import { defineField, type Rule } from "sanity";

export const ourStoryType = {
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
    defineField({
      name: "content",
      type: "array",
      of: [{ type: "block" }],
    }),
    {
      name: "meetTheTeam",
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
          name: "members",
          type: "array",
          title: "Members",
          of: [{ type: "reference", to: { type: "author" } }],
        }),
        defineField({
          name: "content",
          type: "array",
          of: [{ type: "block" }],
        }),
      ],
    },
    {
      name: "ourPartners",
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
          name: "partners",
          type: "array",
          title: "Partners",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "partnerName",
                  type: "string",
                  title: "Partner Name",
                  validation: (rule) =>
                    rule.required().error("Partner name is required"),
                },
                {
                  name: "logo",
                  type: "image",
                  title: "Logo",
                  options: {
                    hotspot: true,
                  },
                  validation: (rule) =>
                    rule.required().error("A logo is required"),
                },
              ],
            },
          ],
        }),
      ],
    },
  ],
};
