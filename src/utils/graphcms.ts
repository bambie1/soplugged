const gql = String.raw;

export async function fetchAPI(query: any, { variables, preview }: any = {}) {
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
    console.log(json.errors);
    throw new Error("Failed to fetch API");
  }

  return json.data;
}

export async function getPostBySlug(slug: any) {
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
  return data.post;
}

export async function getAllPostsForHome() {
  const data = await fetchAPI(
    gql`
      {
        posts(
          where: { displayOnHomePage: true }
          orderBy: createdAt_DESC
          first: 4
          stage: PUBLISHED
        ) {
          title
          slug
          createdAt
          excerpt
          blogImage {
            url
          }
          author {
            name
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
  return data.posts;
}
