const gql = String.raw;

export const singleProductQuery = gql`
  query SingleProduct($handle: String!) {
    productByHandle(handle: $handle) {
      title
      descriptionHtml
      handle
      updatedAt
      priceRange {
        minVariantPrice {
          amount
        }
      }
      featuredImage {
        url
      }
      options(first: 30) {
        name
        values
      }
      media(first: 6) {
        edges {
          node {
            previewImage {
              url
            }
          }
        }
      }
      variants(first: 6) {
        edges {
          node {
            title
            id
            image {
              altText
              url
            }
            priceV2 {
              amount
            }
          }
        }
      }
    }
  }
`;

export const allHandlesQuery = gql`
  {
    collection(handle: "merch-full-collection") {
      products(first: 10) {
        edges {
          node {
            handle
          }
        }
      }
    }
  }
`;

export const collectionQuery = gql`
  query Collection {
    collection(handle: "merch-full-collection") {
      products(first: 10) {
        edges {
          node {
            title
            handle
            priceRange {
              minVariantPrice {
                amount
              }
            }
            images(first: 1) {
              edges {
                node {
                  altText
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const createCartMutation = gql`
  mutation cartCreate {
    cartCreate {
      cart {
        checkoutUrl
        id
      }
    }
  }
`;

export const loadCartItemIds = gql`
  query getCart($cartId: ID!) {
    cart(id: $cartId) {
      lines(first: 100) {
        edges {
          node {
            merchandise {
              ... on ProductVariant {
                id
              }
            }
          }
        }
      }
    }
  }
`;

export const loadCart = gql`
  query getCart($cartId: ID!) {
    cart(id: $cartId) {
      id
      checkoutUrl
      estimatedCost {
        totalAmount {
          amount
        }
      }
      lines(first: 100) {
        edges {
          node {
            id
            merchandise {
              ... on ProductVariant {
                title
                image {
                  url
                }
                product {
                  title
                }
                priceV2 {
                  amount
                  currencyCode
                }
              }
            }
            quantity
            estimatedCost {
              subtotalAmount {
                amount
              }
              totalAmount {
                amount
              }
            }
          }
        }
      }
    }
  }
`;

export const addCartLines = gql`
  mutation addToCart($cartId: ID!, $variantId: ID!) {
    cartLinesAdd(
      cartId: $cartId
      lines: [{ merchandiseId: $variantId, quantity: 1 }]
    ) {
      cart {
        lines(first: 100) {
          edges {
            node {
              quantity
              estimatedCost {
                subtotalAmount {
                  amount
                }
                totalAmount {
                  amount
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const removeFromCart = gql`
  mutation cartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
      cart {
        checkoutUrl
      }
    }
  }
`;
