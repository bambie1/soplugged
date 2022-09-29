import { FC, ReactNode } from "react";

import AuthHeader from "./Header/AuthHeader";

interface Props {
  children: ReactNode;
}

const AuthPageWrapper: FC<Props> = ({ children }) => {
  return (
    <>
      <AuthHeader />
      <div className="flex flex-col">
        <main className={`my-container min-h-[70vh] pt-10`}>{children}</main>
      </div>
    </>
  );
};

export default AuthPageWrapper;
