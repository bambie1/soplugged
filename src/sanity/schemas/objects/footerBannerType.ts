import { defineField, defineType } from "sanity";

export const footerBannerType = defineType({
  name: "footerBanner",
  title: "Footer Banner",
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
        subtitle: "Footer Banner",
        title,
      };
    },
  },
});
