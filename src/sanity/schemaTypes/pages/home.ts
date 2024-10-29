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
