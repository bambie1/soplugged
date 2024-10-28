// ./schemas/ctaType.ts

import { defineField, defineType } from "sanity";

export const ctaType = defineType({
  name: "cta",
  type: "object",
  title: "CTA",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "link",
      type: "url",
    }),
  ],
});
