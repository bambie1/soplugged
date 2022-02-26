import { FC } from "react";
import { useRouter } from "next/router";

import { useAuth } from "@/context/authContext";
import { ButtonLink } from "@/styled/ButtonLink";

import styles from "./NavLinks.module.scss";
import { SignOutButton } from "../SignOutButton";

const openNavLinks = [
  { id: 1, text: "Directory", link: "/search" },
  { id: 2, text: "PRO", link: "/pro" },
  { id: 3, text: "Merch", link: "/merch" },
];

const NavLinks: FC = () => {
  const { user, loading } = useAuth();
  const router = useRouter();

  const renderAuthButton = () => {
    if (loading) return <div className={styles.loading} />;
    if (user)
      return (
        <>
          <li
            className={`${styles.navLink} ${
              router.asPath.startsWith("/dashboard") && styles.dashboardActive
            }`}
          >
            <ButtonLink variant="outlined" href="/dashboard">
              Dashboard
            </ButtonLink>
          </li>
          <li className={styles.navLink}>
            <SignOutButton />
          </li>
        </>
      );
    return (
      <li className={styles.navLink}>
        <ButtonLink variant="filled" href="/join">
          JOIN
        </ButtonLink>
      </li>
    );
  };

  const buildStyles = (href: string) => {
    if (router.asPath.startsWith(href))
      return `${styles.navLink} ${styles.active}`;

    return styles.navLink;
  };

  return (
    <>
      <nav>
        <ul className={`list ${styles.navLinks}`}>
          {openNavLinks.map(({ id, text, link }) => (
            <li key={id} className={buildStyles(link)}>
              <ButtonLink href={link}>{text}</ButtonLink>
            </li>
          ))}

          {renderAuthButton()}
        </ul>
      </nav>
    </>
  );
};

export default NavLinks;
