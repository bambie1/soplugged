import { defineArrayMember, defineField, defineType } from "sanity";

export const pageType = defineType({
  name: "page",
  type: "document",
  title: "Page",
  fields: [
    defineField({ name: "title", type: "string" }),
    defineField({
      name: "pageBuilder",
      type: "array",
      title: "Page builder",
      of: [
        defineArrayMember({
          name: "hero",
          type: "hero",
        }),
        defineArrayMember({
          name: "callToAction",
          type: "cta",
        }),
        defineArrayMember({
          name: "videoHero",
          type: "videoHero",
        }),
        // etc...
      ],
    }),
  ],
});
