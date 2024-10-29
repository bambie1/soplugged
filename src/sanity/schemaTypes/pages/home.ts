export default {
  name: "home",
  type: "document",
  title: "Home Page",
  fields: [
    { name: "title", type: "string", title: "Title" },
    { name: "subtitle", type: "string", title: "Subtitle" },
    {
      name: "cta",
      type: "object",
      title: "CTA Button",
      fields: [{ name: "label", type: "string", title: "Button Text" }],
    },
    {
      name: "video",
      type: "file",
      title: "Hero Video",
      options: {
        accept: "video/*",
      },
    },
    // Featured Event section
    {
      name: "featuredEvent",
      type: "object",
      title: "Featured Event",
      fields: [
        { name: "title", type: "string", title: "Title" },
        {
          name: "event",
          type: "reference",
          title: "Select Event",
          to: [{ type: "event" }],
        },
        {
          name: "ctaLabel",
          type: "string",
          title: "CTA Label",
        },
        {
          name: "ctaLink",
          type: "url",
          title: "CTA Link",
        },
      ],
    },
  ],
};
