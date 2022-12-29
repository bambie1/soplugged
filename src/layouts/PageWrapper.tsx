import dynamic from "next/dynamic";
import { FC, ReactNode } from "react";

const Header = dynamic(() => import("../components/Header/Header"));
const Footer = dynamic(() => import("../components/Footer"));

interface Props {
  center?: boolean;
  isSlim?: boolean;
  whiteFooter?: boolean;
  children: ReactNode;
}

const PageWrapper: FC<Props> = ({ children, center, isSlim, whiteFooter }) => {
  return (
    <>
      <Header />
      <div className="flex min-h-screen flex-col">
        <main
          className={`my-container mb-16 min-h-[70vh] pt-8 ${
            center && "flex flex-col items-center text-center"
          } ${isSlim && "lg:max-w-4xl"}`}
        >
          {children}
        </main>
        <Footer noBackground={whiteFooter} />
      </div>
    </>
  );
};

export default PageWrapper;
