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
