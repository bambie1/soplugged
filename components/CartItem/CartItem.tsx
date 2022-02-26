import { FC, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";

import { removeFromCart } from "@/utils/shopify";
import { callShopify } from "@/lib/shopify";
import { useCart } from "@/context/cartContext";

import styles from "./CartItem.module.scss";

interface Props {
  item: any;
  cartId: string;
}

const CartItem: FC<Props> = ({ item, cartId }) => {
  const { setIsDirty } = useCart();
  const [isUpdating, setIsUpdating] = useState(false);

  const { id, merchandise, quantity, estimatedCost } = item;

  const removeItem = async () => {
    setIsUpdating(true);
    await callShopify(removeFromCart, {
      cartId,
      lineIds: [id],
    });
    setIsUpdating(false);

    setIsDirty(true);
  };

  return (
    <li className={`${styles.item} ${isUpdating && styles.updating}`}>
      <div>
        <Image
          src={merchandise.image.url}
          alt="product thumbnail"
          width={70}
          height={70}
        />
      </div>
      <div className={styles.details}>
        <p className={styles.product}>{merchandise.product.title}</p>
        <p className={styles.variant}>{merchandise.title}</p>

        <div className={styles.controls}>
          <button className={`iconButton ${styles.updateBtn}`}>
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <p>{quantity}</p>
          <button className={`iconButton ${styles.updateBtn}`}>
            <FontAwesomeIcon icon={faPlus} />
          </button>

          <button
            onClick={removeItem}
            className={`iconButton ${styles.deleteBtn}`}
          >
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
        </div>
      </div>
      <p className={styles.price}>${estimatedCost.subtotalAmount.amount}</p>
    </li>
  );
};

export default CartItem;
