import { createCartMutation } from "./graphql";
import { storefront } from ".";

export const getCartId = async () => {
  const localCartId = window.localStorage.getItem("cartId");

  if (localCartId) return localCartId;
  else {
    const { data } = await storefront(createCartMutation);

    const { checkoutUrl, id } = data.cartCreate.cart;

    window.localStorage.setItem("cartId", id);
    window.localStorage.setItem("checkoutUrl", checkoutUrl);

    return id;
  }
};
