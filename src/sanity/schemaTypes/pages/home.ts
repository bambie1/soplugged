import { defineField } from "sanity";

export default {
  name: "home",
  type: "document",
  title: "Home Page",
  fields: [
    { name: "title", type: "string", title: "Title" },
    { name: "subtitle", type: "string", title: "Subtitle" },
    defineField({
      name: "cta",
      type: "object",
      title: "CTA Button",
      fields: [{ name: "label", type: "string", title: "Button Text" }],
      validation: (rule) => rule.required().error("A CTA button is required"),
    }),
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
    // Featured Event section
    {
      name: "featuredEvent",
      type: "object",
      title: "Featured Event",
      fields: [
        defineField({
          name: "title",
          type: "string",
          title: "Title",
          validation: (rule) =>
            rule.required().error("A section title is required"),
        }),
        {
          name: "event",
          type: "reference",
          title: "Select Event",
          to: [{ type: "event" }],
        },
      ],
    },
    {
      name: "ourMission",
      type: "object",
      title: "Our Mission",
      fields: [
        { name: "title", type: "string", title: "Title" },
        {
          name: "missionCarousel",
          type: "array",
          title: "Mission Carousel Slides",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "backgroundColor",
                  type: "string",
                  title: "Background Color",
                },
                { name: "image", type: "image", title: "Image" },
                { name: "title", type: "string", title: "Title" },
                { name: "description", type: "text", title: "Description" },
              ],
            },
          ],
        },
      ],
    },
  ],
};
