import { DocumentIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const pageType = defineType({
  type: "document",
  name: "page",
  title: "Page",
  icon: DocumentIcon,
  fields: [
    defineField({
      type: "string",
      name: "title",
      title: "Title",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "subHeading",
      description: "Used for the subheading on the page (if applicable).",
      title: "Sub Heading",
      type: "text",
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
      name: "seoOverride",
      description: "Override the default SEO meta tags for this page",
      title: "SEO Override",
      type: "seo",
    }),
    defineField({
      name: "pageBuilder",
      title: "Page builder",
      type: "array",
      of: [{ type: "ctaBanner" }],
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        subtitle: "Page",
        title,
      };
    },
  },
});
