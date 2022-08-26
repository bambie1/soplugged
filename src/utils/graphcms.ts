const gql = String.raw;

async function fetchAPI(query: any, { variables, preview }: any = {}) {
  const res = await fetch(process.env.GRAPHCMS_PROJECT_API!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${
        preview
          ? process.env.GRAPHCMS_DEV_AUTH_TOKEN
          : process.env.GRAPHCMS_PROD_AUTH_TOKEN
      }`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });
  const json = await res.json();

  if (json.errors) {
    throw new Error("Failed to fetch API");
  }

  return json.data;
}

export async function getPostBySlug(slug: any) {
  const data = await fetchAPI(
    gql`
      query PostBySlug($slug: String!) {
        post(where: { slug: $slug }) {
          slug
          title
          content {
            html
          }
          tags
          createdBy {
            id
            name
          }
          createdAt
          author {
            id
            name
          }
          seo {
            description
            title
            keywords
            imageUrlSource
            image {
              url
            }
          }
          categories(first: 10) {
            title
          }
        }
      }
    `,
    {
      preview: true,
      variables: {
        slug,
      },
    }
  );
  return data.post;
}

export async function getAllPostsForHome() {
  const data = await fetchAPI(
    gql`
      {
        posts(orderBy: featuredArticle_ASC, first: 4) {
          title
          slug
          date
          featuredArticle
          author {
            name
          }
          seo {
            description
            title
            keywords
            imageUrlSource
            image {
              url
            }
          }
          categories(first: 10) {
            title
          }
        }
      }
    `
  );
  return data.posts;
}

export async function getAllBlogPosts() {
  const data = await fetchAPI(
    gql`
      {
        posts(orderBy: featuredArticle_ASC, first: 20) {
          title
          slug
          createdAt
          featuredArticle
          author {
            name
          }
          seo {
            description
            title
            keywords
            imageUrlSource
            image {
              url
            }
          }
          categories(first: 10) {
            title
          }
        }
      }
    `
  );
  return data.posts;
}

export async function getAllPostsWithSlug() {
  const data = await fetchAPI(gql`
    query PostsWithSlugs {
      posts {
        slug
      }
    }
  `);
  return data.posts;
}

export async function getPostAndMorePosts(slug: any, preview: any) {
  const data = await fetchAPI(
    gql`
      query PostBySlug($slug: String!, $stage: Stage!) {
        post(stage: $stage, where: { slug: $slug }) {
          title
          slug
          content {
            html
          }
          createdAt
          author {
            name
          }
          createdBy {
            name
          }
          seo {
            description
            title
            keywords
            imageUrlSource
            image {
              url
            }
          }
          categories(first: 10) {
            title
          }
          createdAt
        }
        morePosts: posts(
          orderBy: date_DESC
          first: 4
          where: { slug_not_in: [$slug] }
        ) {
          title
          slug
          createdAt
          author {
            name
          }
          seo {
            description
            title
            image {
              url
            }
          }
        }
      }
    `,
    {
      preview,
      variables: {
        stage: preview ? "DRAFT" : "PUBLISHED",
        slug,
      },
    }
  );
  return data;
}
