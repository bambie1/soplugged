import { FC, useState } from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt, faBars } from "@fortawesome/free-solid-svg-icons";
import { Dialog } from "@reach/dialog";

import { useAuth } from "@/context/authContext";
import { ButtonLink } from "@/styled/ButtonLink";

import styles from "./NavLinks.module.scss";

const openNavLinks = [
  { id: 1, text: "Directory", link: "/search" },
  { id: 2, text: "Merch", link: "/merch" },
  { id: 3, text: "PRO", link: "/pro" },
];

const NavLinks: FC = () => {
  const { user, loading, signOutUser } = useAuth();
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => setOpenMenu(!openMenu);

  if (openMenu)
    return (
      <Dialog aria-label="Mobile menu" className={styles.mobileMenu}>
        <NavLinks />
        <button className="mobileOnly" onClick={toggleMenu}>
          Close
        </button>
      </Dialog>
    );

  const renderAuthButton = () => {
    if (loading) return <div className={styles.loading} />;
    if (user)
      return (
        <>
          <li className={styles.navLink}>
            <ButtonLink variant="outlined" href="/dashboard">
              Dashboard
            </ButtonLink>
          </li>
          <li className={styles.navLink}>
            <button
              title="Sign Out"
              onClick={signOutUser}
              className={styles.iconButton}
            >
              <FontAwesomeIcon icon={faSignOutAlt} />
            </button>
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
    if (router.asPath == href) return `${styles.navLink} ${styles.active}`;

    return styles.navLink;
  };

  return (
    <div>
      <nav className="hideOnMobile">
        <ul className={styles.navLinks}>
          {openNavLinks.map(({ id, text, link }) => (
            <li key={id} className={buildStyles(link)}>
              <ButtonLink href={link}>{text}</ButtonLink>
            </li>
          ))}
          {renderAuthButton()}
        </ul>
      </nav>
      <button className="button mobileOnly" title="Menu" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </div>
  );
};

export default NavLinks;
