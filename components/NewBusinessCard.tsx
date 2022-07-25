import { FC } from "react";

interface Props {
  slug: string;
}

const NewBusinessCard: FC<Props> = ({ slug }) => {
  return (
    <div>
      <div className="border border-black w-full aspect-[2/1] rounded-lg"></div>
      {/* <img
        src={slug}
        alt=""
        className="w-full aspect-square lg:aspect-[3/4] rounded-lg object-cover shadow-lg ograyscale-[1]"
      /> */}
      {/* <h3 className="text-lg mt-4 uppercase font-semibold text-primary">
        {business_name}
      </h3>
      <p className="w-[90%] leading-[1.2] mt-1 font-medium">{category}</p>
      <p className="w-[90%] leading-[1.2] mt-1 text-sm">
        {business_location?.split(",")[0]}
      </p> */}
    </div>
  );
};

export default NewBusinessCard;
