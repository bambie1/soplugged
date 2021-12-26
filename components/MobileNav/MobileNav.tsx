import { FC } from "react";
import { useRouter } from "next/router";

import { useAuth } from "@/context/authContext";
import { ButtonLink } from "@/styled/ButtonLink";

import styles from "./MobileNav.module.scss";
import { SignOutButton } from "../SignOutButton";

const openNavLinks = [
  { id: 1, text: "Directory", link: "/search" },
  { id: 2, text: "PRO", link: "/pro" },
  { id: 3, text: "Merch", link: "/merch" },
  { id: 4, text: "Sponsors", link: "/sponsors" },
];

const MobileNav: FC = () => {
  const { user, loading } = useAuth();
  const router = useRouter();

  const renderAuthButton = () => {
    if (loading) return <div className={styles.loading} />;
    if (user)
      return (
        <div>
          <li
            className={`${styles.navLink} ${
              router.asPath.startsWith("/dashboard") && styles.dashboardActive
            }`}
          >
            <ButtonLink variant="outlined" href="/dashboard">
              Dashboard
            </ButtonLink>
          </li>
          <hr className={styles.mobileSeparator} />
        </div>
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
    if (router.asPath == href) return `${styles.navLink} ${styles.active}`;

    return styles.navLink;
  };

  return (
    <>
      <nav>
        <ul className={`list ${styles.navLinks}`}>
          {renderAuthButton()}
          {openNavLinks.map(({ id, text, link }) => (
            <li key={id} className={buildStyles(link)}>
              <ButtonLink href={link}>{text}</ButtonLink>
            </li>
          ))}
          {user && (
            <div>
              {/* <hr className={styles.mobileSeparator} /> */}

              <li className={styles.navLink}>
                <SignOutButton />
              </li>
            </div>
          )}
        </ul>
      </nav>
    </>
  );
};

export default MobileNav;
