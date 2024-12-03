"use client";

import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";

export interface NavProps {
  isLight?: boolean;
}

export function Nav(props: NavProps) {
  return (
    <>
      <div className="hidden lg:block">
        <DesktopNav {...props} />
      </div>

      <div className="lg:hidden">
        <MobileNav {...props} />
      </div>
    </>
  );
}
