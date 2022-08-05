import { FC } from "react";
import Image from "next/image";

interface Props {
  name: string;
  url?: string;
}

const Avatar: FC<Props> = ({ name, url }) => {
  return (
    <span className="inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-secondary text-primary">
      {url ? (
        <Image src={url} width={40} height={40} alt="avatar" />
      ) : (
        name.toUpperCase().charAt(0)
      )}
    </span>
  );
};

export default Avatar;
