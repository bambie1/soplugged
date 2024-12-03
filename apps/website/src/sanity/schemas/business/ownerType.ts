import { UserIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const ownerType = defineType({
  name: "owner",
  title: "Owner",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({
      name: "name",
      type: "string",
    }),
    defineField({
      name: "email",
      type: "email",
      validation: (rule) => rule.required().error("An email is required"),
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "email" },
  },
});
