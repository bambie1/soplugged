import { defineField, defineType } from "sanity";

export const businessType = defineType({
  name: "business",
  title: "Business",
  type: "document",
  groups: [
    { title: "Business Info", name: "business_info" },
    { title: "Images", name: "images" },
    { title: "Contact Info", name: "contact_info" },
  ],
  fields: [
    defineField({
      name: "name",
      type: "string",
      group: "business_info",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "name" },
      validation: (rule) => rule.required().error("A slug is required"),
      group: "business_info",
    }),
    defineField({
      name: "category",
      type: "reference",
      to: [{ type: "businessCategory" }],
      group: "business_info",
    }),
    defineField({
      name: "location",
      type: "reference",
      to: [{ type: "location" }],
      group: "business_info",
      validation: (rule) =>
        rule.custom((value, context) => {
          if (!context?.document?.is_canada_wide && !value) {
            return "A location is required unless the business is Canada-wide";
          }
          return true;
        }),
    }),
    defineField({
      name: "is_canada_wide",
      type: "boolean",
      group: "business_info",
    }),
    defineField({
      name: "confidence_level",
      description: "How confident are we in recommending this business?",
      type: "rating",
      validation: (rule) => rule.min(1).max(5),
    }),
    defineField({
      name: "description",
      type: "array",
      of: [{ type: "block" }],
      group: "business_info",
    }),
    defineField({
      name: "sample_images",
      type: "array",
      of: [{ type: "image" }],
      group: "images",
    }),
    defineField({
      name: "logo",
      type: "image",
      group: "images",
    }),
    defineField({
      name: "website",
      type: "url",
      group: "contact_info",
    }),
    defineField({
      name: "ig_handle",
      type: "string",
      group: "contact_info",
    }),
    defineField({
      name: "owner",
      type: "reference",
      to: [{ type: "owner" }],
      group: "contact_info",
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "category.name",
      media: "logo",
    },
  },
});
