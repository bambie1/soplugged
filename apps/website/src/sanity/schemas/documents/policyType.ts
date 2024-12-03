import { DocumentIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const policyType = defineType({
  type: "document",
  name: "policy",
  title: "Policy",
  icon: DocumentIcon,
  fields: [
    defineField({
      type: "string",
      name: "title",
      title: "Title",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "lastUpdated",
      type: "datetime",
    }),
    defineField({
      type: "slug",
      name: "slug",
      title: "Slug",
      options: {
        source: "title",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "body",
      type: "blockContent",
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title,
        subtitle: "Policy",
      };
    },
  },
});
