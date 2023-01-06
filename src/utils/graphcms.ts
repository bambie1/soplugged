const gql = String.raw;

export async function fetchAPI(query: any, { variables, preview }: any = {}) {
  try {
    const res = await fetch(process.env.GRAPHCMS_PROJECT_API!, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GRAPHCMS_PROD_AUTH_TOKEN}`,
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });
    const json = await res.json();

    if (json.errors) {
      console.log(json.errors);
      throw new Error("Failed to fetch API");
    }

    return json.data;
  } catch (error) {
    return null;
  }
}

export async function getPostBySlug(slug: string) {
  const data = await fetchAPI(
    gql`
      query PostBySlug($slug: String!) {
        post(where: { slug: $slug }, stage: PUBLISHED) {
          slug
          title
          createdAt
          blogImage {
            url
          }
          content {
            html
          }
          author {
            name
          }
          author {
            id
            name
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
  return data?.post;
}

export async function getAllBlogPosts() {
  const data = await fetchAPI(
    gql`
      {
        posts(orderBy: createdAt_DESC, first: 20, stage: PUBLISHED) {
          title
          slug
          createdAt
          excerpt
          author {
            name
          }
          blogImage {
            url
          }
          categories(first: 10) {
            title
          }
        }
      }
    `
  );
  return data?.posts;
}
