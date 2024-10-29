import { defineField, defineType } from "sanity";

export const eventType = defineType({
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      validation: (rule) =>
        rule.required().error(`Required to generate a page on the website`),
      options: {
        source: "name",
      },
    }),
    defineField({
      name: "eventType",
      type: "string",
      options: {
        list: ["in-person", "virtual"],
        layout: "radio",
      },
    }),
    defineField({
      name: "date",
      type: "datetime",
    }),
    defineField({
      name: "venue",
      type: "string",
      validation: (rule) =>
        rule.custom((value, context) => {
          if (value && context?.document?.eventType === "virtual") {
            return "Only in-person events can have a venue";
          }

          return true;
        }),
    }),
    defineField({
      name: "image",
      type: "image",
    }),
    defineField({
      name: "details",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "ctaLink",
      type: "url",
    }),
    defineField({
      name: "ctaLabel",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "venue.name",
      media: "image",
    },
  },
});
