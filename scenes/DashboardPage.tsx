import { FC } from "react";

import AuthPageWrapper from "@/components/AuthPageWrapper";

const DashboardPage: FC = ({ children }) => {
  return (
    <div className="min-h-screen from-secondary to-accent lg:bg-gradient-to-b">
      <AuthPageWrapper>
        <div className="w-full bg-white/30 py-10 lg:rounded-xl lg:py-20 lg:shadow-md">
          <div className="lg:mx-10">{children}</div>
        </div>
      </AuthPageWrapper>
    </div>
  );
};

export default DashboardPage;
