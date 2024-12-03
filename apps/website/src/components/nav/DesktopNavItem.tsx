"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export const DesktopNavItem = ({
  item,
}: {
  item: {
    title: string;
    href: string;
    children?: { title: string; href: string; description: string }[];
  };
}) => {
  const pathname = usePathname();

  const isActive = pathname.startsWith(item.href);

  if (!item.children) {
    return (
      <NavigationMenuItem>
        <Link href={item.href} legacyBehavior passHref>
          <NavigationMenuLink
            className={clsx("relative rounded-full p-2", {
              "font-medium after:absolute after:bottom-0 after:left-1/2 after:h-[1px] after:w-1/2 after:-translate-x-1/2 after:bg-black after:content-['']":
                isActive,
            })}
          >
            {item.title}
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[400px] gap-3 p-4">
          {item.children.map((subItem) => (
            <ListItem
              key={subItem.title}
              title={subItem.title}
              href={subItem.href}
            >
              {subItem.description}
            </ListItem>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground flex select-none gap-4 space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-black/5",
            className,
          )}
          {...props}
        >
          <div className="h-10 w-10 shrink-0 rounded-full border"></div>
          <div>
            <div className="mb-2 font-semibold">{title}</div>
            <p className="line-clamp-2 text-sm opacity-80">{children}</p>
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = "ListItem";
