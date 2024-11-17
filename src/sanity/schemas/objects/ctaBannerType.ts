import { defineField, defineType } from "sanity";

export const ctaBannerType = defineType({
  name: "ctaBanner",
  title: "CTA Banner",
  type: "object",
  fields: [
    defineField({
      type: "string",
      name: "title",
      title: "Title",
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: "text",
      name: "subTitle",
      title: "Subtitle",
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: "link",
      name: "link",
      title: "Link",
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        subtitle: "CTA Banner",
        title,
      };
    },
  },
});
