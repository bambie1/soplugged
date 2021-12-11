import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { FC } from "react";
import { StateMachineProvider, createStore } from "little-state-machine";
import { useWindowSize } from "@reach/window-size";

import {
  NameLocation,
  Images,
  Categories,
  DescriptionContact,
  Review,
} from "./steps";
import { useBusinessFormContext } from "@/context/businessFormContext";

const Header = dynamic(() => import("../../components/Header/Header"));

interface Props {
  business: any;
  step?: any;
}

const MyBusinessPage: FC<Props> = ({ business, step }) => {
  const router = useRouter();
  const { width } = useWindowSize();
  const { agreementSigned } = useBusinessFormContext();

  if (!business && !agreementSigned) router.push("/my-business/welcome");

  createStore(
    {
      businessDetails: { ...business },
    },
    {}
  );

  const renderStep = () => {
    switch (step) {
      case "category":
        return <Categories />;
      case "description_contact":
        return <DescriptionContact />;
      case "images":
        return <Images />;
      case "review":
        return <Review />;

      default:
        return <NameLocation />;
    }
  };

  return (
    <>
      <Header hideLinks={width >= 768} />
      <StateMachineProvider>{renderStep()}</StateMachineProvider>
    </>
  );
};

export default MyBusinessPage;
