import { defineField, defineType } from "sanity";

export const categoryType = defineType({
  name: "businessCategory",
  title: "Category",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
      validation: (rule) => rule.required().error("A name is required"),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (rule) => rule.required().error("A slug is required"),
    }),
  ],
  preview: {
    select: {
      title: "name",
    },
  },
});
