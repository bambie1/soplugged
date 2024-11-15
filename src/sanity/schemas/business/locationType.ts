import { defineField, defineType } from "sanity";

export const locationType = defineType({
  name: "location",
  title: "Location",
  type: "document",
  fields: [
    defineField({
      name: "city",
      type: "string",
    }),
    defineField({
      name: "province",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
    }),
  ],
});
