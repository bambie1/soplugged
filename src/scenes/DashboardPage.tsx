import { FC } from "react";

import AuthPageWrapper from "@/src/components/AuthPageWrapper";

const DashboardPage: FC = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b lg:from-secondary lg:to-accent">
      <div className="absolute -top-10 left-0 -z-[1] h-screen w-full bg-gradient-to-b from-secondary/60 to-accent/60 blur-3xl lg:hidden"></div>
      <AuthPageWrapper>
        <div className="w-full py-10 lg:rounded-xl lg:bg-white/30 lg:py-20 lg:shadow-md">
          <div className="lg:mx-10">{children}</div>
        </div>
      </AuthPageWrapper>
    </div>
  );
};

export default DashboardPage;
