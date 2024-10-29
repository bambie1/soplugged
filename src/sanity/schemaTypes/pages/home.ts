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
      fields: [
        { name: "label", type: "string", title: "Button Text" },
        { name: "link", type: "reference", to: [{ type: "page" }] },
      ],
    },
    {
      name: "video",
      type: "file",
      title: "Hero Video",
      options: {
        accept: "video/*",
      },
    },
  ],
};
