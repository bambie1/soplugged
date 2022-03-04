import { FC, Fragment, useEffect, useState } from "react";

import { useCart } from "@/context/cartContext";
import {
  addCartLines,
  getCartId,
  loadCartItemIds,
  getVariant,
} from "@/utils/shopify";
import { callShopify } from "@/lib/shopify";

import { Button } from "@/styled/Button";

import styles from "./AddToCart.module.scss";

interface Props {
  variants: any;
  options: any;
}

const AddToCart: FC<Props> = ({ variants, options }) => {
  const { isDirty, setIsDirty } = useCart();
  const [loading, setLoading] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const { selectedVariant, updateVariant } = useCart();

  const [inputValues, setInputValues] = useState({});

  useEffect(() => {
    let defaults = {};
    options.map((option: any) => {
      const { name, values } = option;
      defaults = { ...defaults, [name]: values[0] };
    });
    const currentVariant = getVariant(variants, defaults);
    updateVariant(currentVariant);
    setInputValues(defaults);
  }, [options, variants]);

  const handleChange = ({ target: { name, value } }: any) => {
    const newValues = {
      ...inputValues,
      [name]: value,
    };
    const currentVariant = getVariant(variants, newValues);
    setInputValues(newValues);
    updateVariant(currentVariant);
  };

  useEffect(() => {
    const checkCart = async () => {
      const cartId = await getCartId();
      const { data } = await callShopify(loadCartItemIds, {
        cartId,
      });
      const isFound = data.cart.lines.edges.find((item: any) => {
        return item.node.merchandise.id === selectedVariant?.node.id;
      });

      if (isFound) setIsAddedToCart(true);
      setLoading(false);
    };

    checkCart();
  }, [isDirty, selectedVariant]);

  const addToCart = async () => {
    setLoading(true);
    // const selectedVariant = getVariant(variants, inputValues);
    const cartId = await getCartId();
    await callShopify(addCartLines, {
      cartId,
      variantId: selectedVariant?.node.id,
    });

    setLoading(false);
    setIsDirty(true);
  };

  return (
    <div className={styles.wrapper}>
      <section className={styles.optionsDiv}>
        {options?.map((option: any) => {
          const { name, values } = option;
          return (
            <Fragment key={name}>
              <label htmlFor="cars" className="selectLabel">
                {name}
                <div className="selectWrapper">
                  <select name={name} id={name} onChange={handleChange}>
                    {values.map((val: any) => (
                      <option value={val} key={val}>
                        {val}
                      </option>
                    ))}
                  </select>
                </div>
              </label>
            </Fragment>
          );
        })}
      </section>
      <Button
        big
        // variant="outlined"
        disabled={isAddedToCart || loading}
        onClick={addToCart}
      >
        {isAddedToCart ? "Added to cart" : "Add to cart"}
      </Button>
    </div>
  );
};

export default AddToCart;
