"use client";

import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";

export function Header({}: { isDark?: boolean }) {
  return (
    <>
      <div className="hidden lg:block">
        <DesktopNav />
      </div>

      <div className="lg:hidden">
        <MobileNav />
      </div>
    </>
  );
}
