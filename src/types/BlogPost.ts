import { BlogCategory } from "./BlogCategory";

export interface BlogPost {
  excerpt: string;
  blogImage: { url: string };
  blogImageAlt: string;
  slug: string;
  createdAt: string;
  title: string;
  content: { html: string };
  author: { name: string; picture: { url: string } };
  categories: BlogCategory[];
}
