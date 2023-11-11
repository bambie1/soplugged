import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props extends React.ComponentProps<"a"> {
  children: React.ReactNode;
}

const NavLink = ({ href, children, ...props }: Props) => {
  const router = useRouter();

  const isActive = router.asPath.startsWith(href!);

  return (
    <Link href={href || "#"}>
      <a
        {...props}
        className={classNames("border-b text-base", {
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
