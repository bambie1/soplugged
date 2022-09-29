import { FC } from "react";

import AuthPageWrapper from "@/components/AuthPageWrapper";

const DashboardPage: FC = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b lg:from-secondary lg:to-accent">
      <AuthPageWrapper>
        <div className="w-full py-10 lg:rounded-xl lg:bg-white/30 lg:py-20 lg:shadow-md">
          <div className="lg:mx-10">{children}</div>
        </div>
      </AuthPageWrapper>
    </div>
  );
};

export default DashboardPage;
