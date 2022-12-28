export interface BlogPost {
  excerpt: string;
  blogImage: { url: string };
  slug: string;
  createdAt: string;
  title: string;
  content: { html: string };
  author: { name: string };
  categories: {
    title: string;
    color: { rgba: { r: number; g: number; b: number } };
  }[];
}
