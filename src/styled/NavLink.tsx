import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props extends React.ComponentProps<"a"> {
  children: React.ReactNode;
  isExternal?: boolean;
}

const NavLink = ({ href, isExternal, children, ...props }: Props) => {
  const router = useRouter();

  const isActive = router.asPath.startsWith(href!);

  if (isExternal)
    return (
      <a
        {...props}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classNames("text-base tracking-wide")}
      >
        {children}
      </a>
    );

  return (
    <Link href={href || "#"}>
      <a
        {...props}
        className={classNames("border-b text-base tracking-wide", {
          "border-primary": isActive,
          "border-transparent": !isActive,
        })}
      >
        {children}
      </a>
    </Link>
  );
};
NavLink.displayName = "NavLink";

export default NavLink;
