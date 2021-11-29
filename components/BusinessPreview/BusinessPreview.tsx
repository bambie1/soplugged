import { FC } from "react";
import Image from "next/image";

import { IBusiness } from "@/types/Business";

interface Props {
  business: IBusiness;
}

const BusinessPreview: FC<Props> = ({ business }) => {
  const { business_name, category, business_location, sample_images } =
    business;

  const image = sample_images?.split(",")[0] || null;
  return (
    <div>
      <h3>{business_name}</h3>
      <p>{category}</p>
      <p>{business_location}</p>
      {/* {image && (
        <Image
          src={image}
          alt="showcase image"
          width={70}
          height={30}
          layout="responsive"
          objectFit="contain"
        />
      )} */}
    </div>
  );
};

export default BusinessPreview;
