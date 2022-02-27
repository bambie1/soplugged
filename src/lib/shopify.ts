const collection = process.env.NEXT_PUBLIC_SHOPIFY_COLLECTION;

const gql = String.raw;

export const callShopify = async (query: any, variables = {}) => {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL!, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token":
          process.env.NEXT_PUBLIC_ACCESS_TOKEN!,
      },
      body: JSON.stringify({ query, variables }),
    });

    return response.json();
  } catch (error) {
    throw new Error("Could not fetch products!");
  }
};

export const getAllProductsInCollection = async () => {
  const query = gql`
    query Collection {
      collectionByHandle(handle: "merch-full-collection") {
        id
        title
        products(first: 250) {
          edges {
            node {
              id
              title
              description
              handle
              images(first: 250) {
                edges {
                  node {
                    id
                    originalSrc
                    height
                    width
                    altText
                  }
                }
              }
              priceRange {
                minVariantPrice {
                  amount
                }
              }
              variants(first: 250) {
                edges {
                  node {
                    id
                    title
                    price
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  const response = await callShopify(query);

  const allProducts = response.data.collectionByHandle.products.edges
    ? response.data.collectionByHandle.products.edges
    : [];

  return allProducts;
};

export const getProductSlugs = async () => {
  const query = gql`
    {
      collectionByHandle(handle: "merch-full-collection") {
        products(first: 250) {
          edges {
            node {
              handle
            }
          }
        }
      }
    }
  `;
  const response = await callShopify(query);

  const slugs = response.data.collectionByHandle.products.edges
    ? response.data.collectionByHandle.products.edges
    : [];

  return slugs;
};

export const getProduct = async (handle: any) => {
  const query = gql`{
      productByHandle(handle: "${handle}") {
        id
        title
        handle
        descriptionHtml
        images(first: 250) {
          edges {
            node {
              id
              originalSrc
              height
              width
              altText
            }
          }
        }
        variants(first: 250) {
          edges {
            node {
              id
              title
              price
            }
          }
        }
      }
    }`;
  const response = await callShopify(query);

  const product = response.data.productByHandle
    ? response.data.productByHandle
    : [];

  return product;
};

export const createCheckout = async (id: any, quantity: any) => {
  const query = gql`mutation
      {
        checkoutCreate(input: {
          lineItems: [{ variantId: "${id}", quantity: ${quantity} }]
        }) {
          checkout {
             id
             webUrl
             lineItems(first: 250) {
               edges {
                 node {
                   id
                   title
                   quantity
                 }
               }
             }
          }
        }
      }
    `;
  const response = await callShopify(query);

  const checkout = response.data.checkoutCreate.checkout
    ? response.data.checkoutCreate.checkout
    : [];

  return checkout;
};

export const updateCheckout = async (id: any, lineItems: any) => {
  const formattedLineItems = lineItems.map((item: any) => {
    return `{
      variantId: "${item.variantId}",
      quantity:${item.quantity}
    }`;
  });

  const query = gql`mutation
      {
        checkoutLineItemsReplace(lineItems: [${formattedLineItems}], checkoutId: "${id}") {
          checkout {
             id
             webUrl
             lineItems(first: 250) {
               edges {
                 node {
                   id
                   title
                   quantity
                 }
               }
             }
          }
        }
      }
    `;
  const response = await callShopify(query);

  const checkout = response.data.checkoutLineItemsReplace.checkout
    ? response.data.checkoutLineItemsReplace.checkout
    : [];

  return checkout;
};
