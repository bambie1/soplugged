import { defineField, defineType } from "sanity";

export const videoHeroType = defineType({
  name: "videoHero",
  title: "Video Hero",
  type: "object",
  fields: [
    defineField({
      name: "video",
      type: "file",
      title: "Hero Video",
      options: {
        accept: "video/*",
      },
      validation: (rule) =>
        rule.required().error("A background video is required"),
    }),
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
      validation: (rule) => rule.required(),
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
