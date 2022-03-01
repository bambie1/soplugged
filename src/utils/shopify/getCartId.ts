import { callShopify } from "@/lib/shopify";

import { createCartMutation } from "./graphql";

export const getCartId = async () => {
  const localCartId = window.localStorage.getItem("cartId");

  if (localCartId) return localCartId;
  else {
    const { data } = await callShopify(createCartMutation);

    const { checkoutUrl, id } = data.cartCreate.cart;

    window.localStorage.setItem("cartId", id);
    window.localStorage.setItem("checkoutUrl", checkoutUrl);

    return id;
  }
};
