import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import Link from "next/link";
import { FC, useEffect, useState } from "react";

import { CartInfo } from "@/components/CartInfo";
import { loadCart, getCartId } from "@/utils/shopify";
import { callShopify } from "@/lib/shopify";
import { useCart } from "@/context/cartContext";

import styles from "./MerchHeader.module.scss";

const MerchHeader: FC = () => {
  const router = useRouter();
  const { isDirty, setIsDirty } = useCart();
  const [showCart, setShowCart] = useState(false);
  const [cartData, setCartData] = useState<any>({});

  const qty = cartData.cart?.lines?.edges.length || 0;

  const closeModal = () => {
    setShowCart(false);
  };

  const showBack = router.asPath !== "/merch";

  const createCart = async () => {
    const cartId = await getCartId();
    const { data } = await callShopify(loadCart, {
      cartId,
    });

    setCartData(data);
  };

  useEffect(() => {
    createCart();
    setIsDirty(false);
  }, [isDirty, setIsDirty]);

  return (
    <div className={`container ${styles.wrapper}`}>
      {showBack && (
        <Link href="/merch">
          <a className="textLink">Back to catalog</a>
        </Link>
      )}
      <a
        href="#"
        className={styles.cart}
        onClick={() => setShowCart(!showCart)}
      >
        <FontAwesomeIcon icon={faShoppingCart} />
        <p>{qty}</p>
      </a>

      <CartInfo data={cartData} isOpen={showCart} onClose={closeModal} />
    </div>
  );
};

export default MerchHeader;
