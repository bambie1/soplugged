import { FC, useEffect, useState } from "react";

import { useCart } from "@/context/cartContext";
import {
  storefront,
  addCartLines,
  getCartId,
  loadCartItemIds,
} from "@/utils/shopify";

import { Button } from "@/styled/Button";

interface Props {
  variantId: string;
}

const AddToCart: FC<Props> = ({ variantId }) => {
  const { isDirty, setIsDirty } = useCart();
  const [loading, setLoading] = useState(true);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const checkCart = async () => {
    const cartId = await getCartId();
    const { data } = await storefront(loadCartItemIds, {
      cartId,
    });
    const isFound = data.cart.lines.edges.find((item: any) => {
      return item.node.merchandise.id === variantId;
    });

    if (isFound) setIsAddedToCart(true);
    setLoading(false);
  };

  useEffect(() => {
    checkCart();
  }, [isDirty]);

  const addToCart = async () => {
    setLoading(true);
    const cartId = await getCartId();
    await storefront(addCartLines, {
      cartId,
      variantId,
    });

    setLoading(false);
    setIsDirty(true);
  };

  return (
    <Button
      variant="outlined"
      disabled={isAddedToCart || loading}
      onClick={addToCart}
    >
      {isAddedToCart ? "Added to cart" : "Add to cart"}
    </Button>
  );
};

export default AddToCart;
