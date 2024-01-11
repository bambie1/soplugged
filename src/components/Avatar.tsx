import classNames from "classnames";
import Image from "next/legacy/image";
import { FC } from "react";

interface Props {
  name: string;
  url?: string;
}

const Avatar: FC<Props> = ({ name, url }) => {
  return (
    <span
      className={classNames(
        "inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full",
        {
          "bg-secondary text-primary": !url,
          "border border-primary/50 bg-white": url,
        }
      )}
    >
      {url ? (
        <Image src={url} width={40} height={40} alt="avatar" />
      ) : (
        name?.toUpperCase().charAt(0)
      )}
    </span>
  );
};

export default Avatar;
