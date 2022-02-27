import Image from "next/image";
import { FC, useRef, useState } from "react";

import styles from "./ProductImage.module.scss";

interface Props {
  images: any;
}

const ProductImage: FC<Props> = ({ images }) => {
  const [mainImg, setMainImg] = useState(images[0].node);
  const ref = useRef<any>();

  function scroll(scrollOffset: any) {
    ref.current.scrollLeft += scrollOffset;
  }

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
          return (
            <li
              key={url}
              className={styles.thumbnail}
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
