import { FC, ReactNode } from "react";

import AuthHeader from "./Header/AuthHeader";

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
      <div className="flex flex-col">
        <main
          className={`my-container min-h-[70vh] pt-10 ${
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
