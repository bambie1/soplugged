import { defineField } from "sanity";

export const homeType = {
  name: "home",
  type: "document",
  title: "Home Page",
  fields: [
    { name: "title", type: "string", title: "Title" },
    { name: "subtitle", type: "string", title: "Subtitle" },
    {
      name: "seo",
      title: "SEO Metadata",
      type: "seo",
    },
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
      name: "podcastHighlight",
      type: "object",
      title: "Podcast Highlight",
      fields: [
        defineField({
          name: "title",
          type: "string",
          title: "Title",
          validation: (rule) =>
            rule.required().error("A section title is required"),
        }),
        defineField({
          name: "description",
          type: "string",
          title: "Description",
          validation: (rule) =>
            rule.required().error("A description is required"),
        }),
        defineField({
          name: "episodes",
          type: "array",
          of: [{ type: "reference", to: { type: "episode" } }],
          validation: (rule) =>
            rule.min(3).max(3).error("You must select 3 episodes"),
        }),
      ],
    },
    {
      name: "featuredBusinesses",
      type: "object",
      title: "Featured Businesses",
      fields: [
        { name: "title", type: "string", title: "Title" },
        defineField({
          name: "businesses",
          type: "array",
          of: [{ type: "reference", to: { type: "business" } }],
        }),
      ],
    },
  ],
};
