// ./schemas/heroType.ts

import { defineField, defineType } from "sanity";

export const videoHeroType = defineType({
  name: "videoHero",
  type: "object",
  title: "Video hero",
  fields: [
    defineField({
      name: "heading",
      type: "string",
    }),
    defineField({
      name: "tagline",
      type: "string",
    }),
    {
      name: "backgroundVideo",
      type: "file",
      title: "Background Video",
      description: "Upload or link to a video for the background",
      options: {
        accept: "video/*",
      },
    },
  ],
  preview: {
    select: {
      heading: "heading",
    },
    prepare(selection) {
      const { heading } = selection;

      return {
        title: heading,
        subtitle: "Video Hero",
      };
    },
  },
});
