import dynamic from "next/dynamic";
import { FC, ReactNode } from "react";

import AuthHeader from "./AuthHeader";

interface Props {
  hasHero?: boolean;
  center?: boolean;
  isSlim?: boolean;
  isFullWidth?: boolean;
  children: ReactNode;
}

const AuthPageWrapper: FC<Props> = ({ children, center, isSlim }) => {
  return (
    <>
      <AuthHeader />
      <div className="flex min-h-screen flex-col">
        <main
          className={`my-container mb-16 min-h-[70vh] pt-24 ${
            center && "flex flex-col items-center text-center"
          } ${isSlim && "lg:max-w-4xl"}`}
        >
          {children}
        </main>
      </div>
    </>
  );
};

export default AuthPageWrapper;
