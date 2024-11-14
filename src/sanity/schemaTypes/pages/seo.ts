export const SEOType = {
  name: "seo",
  title: "SEO",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Meta Title",
      type: "string",
      description: "The title displayed in search results (60-70 characters).",
    },
    {
      name: "description",
      title: "Meta Description",
      type: "text",
      description:
        "A short description for search engines (150-160 characters).",
    },
  ],
};
