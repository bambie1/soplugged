import dynamic from "next/dynamic";
import { FC } from "react";
import { StateMachineProvider, createStore } from "little-state-machine";
import { useWindowSize } from "@reach/window-size";

import {
  NameLocation,
  Images,
  Categories,
  Description,
  Contact,
  Review,
} from "./steps";

const Header = dynamic(() => import("../../components/Header/Header"));

interface Props {
  business: any;
  step?: any;
}

const MyBusinessPage: FC<Props> = ({ business, step }) => {
  const { width } = useWindowSize();

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
      case "description":
        return <Description />;
      case "contact":
        return <Contact />;
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
