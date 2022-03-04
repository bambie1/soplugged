import { FC } from "react";
import Image from "next/image";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import { CartItem } from "../CartItem";
import { Button } from "@/styled/Button";

import styles from "./CartInfo.module.scss";

interface Props {
  data: any;
  onClose: any;
  isOpen: boolean;
}

const CartInfo: FC<Props> = ({ data, onClose, isOpen }) => {
  const items = data.cart?.lines.edges || [];

  const renderItems = () => {
    if (items.length < 1)
      return (
        <div className={styles.empty}>
          <div className={styles.emptyImage}>
            <Image
              src="/images/empty_inbox.svg"
              alt="empty clipboard"
              width={300}
              height={300}
            />
          </div>
          <p>No items in your cart</p>
          <Button variant="text" onClick={onClose}>
            Back to shop
          </Button>
        </div>
      );

    return (
      <ul className={styles.list}>
        {items.map((item: any) => (
          <CartItem key={item.node.id} item={item.node} cartId={data.cart.id} />
        ))}
      </ul>
    );
  };

  return (
    <>
      <DialogOverlay
        className={styles.dialogOverlay}
        isOpen={isOpen}
        onDismiss={onClose}
      >
        <DialogContent
          className={styles.dialogContent}
          aria-label="Shopping cart"
        >
          <div className={styles.header}>
            <h3 className="center">Your cart</h3>
            <button
              className={`button icon ${styles.closeCart}`}
              onClick={onClose}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          {renderItems()}
          <div className={styles.cta}>
            <a href={data.cart?.checkoutUrl}>
              <Button variant="outlined" disabled={!items.length}>
                Proceed to checkout
              </Button>
            </a>

            <p>${data.cart?.estimatedCost.totalAmount.amount}</p>
          </div>
        </DialogContent>
      </DialogOverlay>
    </>
  );
};

export default CartInfo;
