import { createCheckout, updateCheckout } from "@/lib/shopify";

export const saveLocalData = (cart: any, checkoutId: any, checkoutUrl: any) => {
  localStorage.setItem(
    "sopluggedShop",
    JSON.stringify([cart, checkoutId, checkoutUrl])
  );
};

export const getLocalData = () => {
  return JSON.parse(localStorage.getItem("sopluggedShop") || "{}");
};

export function setLocalData(
  setCart: any,
  setCheckoutId: any,
  setCheckoutUrl: any
) {
  const localData = getLocalData();

  if (localData) {
    if (Array.isArray(localData[0])) {
      setCart([...localData[0]]);
    } else {
      setCart([localData[0]]);
    }
    setCheckoutId(localData[1]);
    setCheckoutUrl(localData[2]);
  }
}

export const createShopifyCheckout = async (newItem: any) => {
  const data = await createCheckout(
    newItem["variantId"],
    newItem["variantQuantity"]
  );
  return data;
};

export const updateShopifyCheckout = async (
  updatedCart: any,
  checkoutId: any
) => {
  const lineItems = updatedCart.map((item: any) => {
    return {
      variantId: item["variantId"],
      quantity: item["variantQuantity"],
    };
  });
  await updateCheckout(checkoutId, lineItems);
};

export const getCartSubTotal = (cart: any) => {
  if (cart.length === 0) {
    return 0;
  } else {
    let totalPrice = 0;
    cart.forEach((item: any) => {
      totalPrice +=
        parseInt(item.variantQuantity) * parseFloat(item.variantPrice);
    });
    return Math.round(totalPrice * 100) / 100;
  }
};

export { getCartId } from "./getCartId";
export { getVariant } from "./getVariant";
export {
  addCartLines,
  loadCart,
  singleProductQuery,
  allHandlesQuery,
  collectionQuery,
  createCartMutation,
  removeFromCart,
  loadCartItemIds,
} from "./graphql";
