import { FC } from "react";
import Image from "next/image";

import styles from "./Avatar.module.scss";

interface Props {
  name: string;
  url?: string;
}

const Avatar: FC<Props> = ({ name, url }) => {
  if (!url)
    return (
      <span className={styles.avatar}>{name.toUpperCase().charAt(0)}</span>
    );

  return (
    <span className={styles.avatar}>
      <Image src={url} width={40} height={40} alt="avatar" />
    </span>
  );
};

export default Avatar;
