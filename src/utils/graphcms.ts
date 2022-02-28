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
          subtitle
          content {
            html
          }
          tags
          createdBy {
            id
            name
          }
          excerpt
          createdAt
          author {
            id
            name
          }
          coverImage {
            url
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

export async function getAllPostsWithSlug() {
  const data = await fetchAPI(gql`
    {
      posts {
        slug
      }
    }
  `);
  return data.posts;
}

export async function getAllPostsForHome() {
  const data = await fetchAPI(
    gql`
      {
        posts(orderBy: date_DESC, first: 20) {
          title
          slug
          excerpt
          date
          featuredArticle
          coverImage {
            url(
              transformation: {
                image: { resize: { fit: crop, width: 2000, height: 1000 } }
              }
            )
          }
          author {
            name
            picture {
              url(
                transformation: {
                  image: { resize: { width: 100, height: 100, fit: crop } }
                }
              )
            }
          }
        }
      }
    `
  );
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
          date
          ogImage: coverImage {
            url(
              transformation: {
                image: { resize: { fit: crop, width: 2000, height: 1000 } }
              }
            )
          }
          coverImage {
            url(
              transformation: {
                image: { resize: { fit: crop, width: 2000, height: 1000 } }
              }
            )
          }
          author {
            name
            picture {
              url(
                transformation: {
                  image: { resize: { fit: crop, width: 100, height: 100 } }
                }
              )
            }
          }
        }
        morePosts: posts(
          orderBy: date_DESC
          first: 2
          where: { slug_not_in: [$slug] }
        ) {
          title
          slug
          excerpt
          date
          coverImage {
            url(
              transformation: {
                image: { resize: { fit: crop, width: 2000, height: 1000 } }
              }
            )
          }
          author {
            name
            picture {
              url(
                transformation: {
                  image: { resize: { fit: crop, width: 100, height: 100 } }
                }
              )
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
