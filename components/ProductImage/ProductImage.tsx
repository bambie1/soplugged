import Image from "next/image";
import { FC, useEffect, useRef, useState } from "react";

import { useCart } from "@/context/cartContext";

import styles from "./ProductImage.module.scss";

interface Props {
  images: any;
}

const ProductImage: FC<Props> = ({ images }) => {
  const { selectedVariant } = useCart();
  const [mainImg, setMainImg] = useState(images[0].node);
  const ref = useRef<any>();

  function scroll(scrollOffset: any) {
    ref.current.scrollLeft += scrollOffset;
  }

  useEffect(() => {
    if (selectedVariant) {
      setMainImg({ originalSrc: selectedVariant.node.image.url });
    }
  }, [selectedVariant]);

  return (
    <>
      <div className={styles.mainImage}>
        <Image
          src={mainImg.originalSrc}
          alt="Featured"
          layout="fill"
          objectFit="contain"
        />
      </div>

      <ul className={styles.thumbnailList}>
        {images.map((item: any) => {
          const url = item.node.originalSrc;
          const isActive = url === mainImg.originalSrc;
          return (
            <li
              key={url}
              className={`${styles.thumbnail} ${isActive && styles.active}`}
              onClick={() => setMainImg(item.node)}
            >
              <Image width={100} height={100} src={url} alt="Media image" />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ProductImage;
