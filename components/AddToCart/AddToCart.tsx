import { FC, Fragment, useEffect, useState } from "react";

import { useCart } from "@/context/cartContext";
import { addCartLines, getCartId, loadCartItemIds } from "@/utils/shopify";
import { callShopify } from "@/lib/shopify";

import { Button } from "@/styled/Button";

interface Props {
  variants: any;
  options: any;
}

const AddToCart: FC<Props> = ({ variants, options }) => {
  const { isDirty, setIsDirty } = useCart();
  const [loading, setLoading] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  // const checkCart = async () => {
  //   const cartId = await getCartId();
  //   const { data } = await callShopify(loadCartItemIds, {
  //     cartId,
  //   });
  //   const isFound = data.cart.lines.edges.find((item: any) => {
  //     return item.node.merchandise.id === variantId;
  //   });

  //   if (isFound) setIsAddedToCart(true);
  //   setLoading(false);
  // };

  // useEffect(() => {
  //   checkCart();
  // }, [isDirty]);

  const addToCart = async () => {
    setLoading(true);
    const cartId = await getCartId();
    await callShopify(addCartLines, {
      cartId,
      variantId: "",
    });

    setLoading(false);
    setIsDirty(true);
  };

  return (
    <>
      <section>
        {options?.map((option: any) => {
          const { name, values } = option;
          return (
            <Fragment key={name}>
              <label htmlFor="cars">{name}</label>
              <select name="cars" id="cars">
                {values.map((val: any) => (
                  <option value={val} key={val}>
                    {val}
                  </option>
                ))}
              </select>
            </Fragment>
          );
        })}
      </section>
      <Button
        variant="outlined"
        disabled={isAddedToCart || loading}
        onClick={addToCart}
      >
        {isAddedToCart ? "Added to cart" : "Add to cart"}
      </Button>
    </>
  );
};

export default AddToCart;
