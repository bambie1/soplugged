import { FC, useRef, useState } from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import {
  AlertDialog,
  AlertDialogLabel,
  AlertDialogDescription,
} from "@reach/alert-dialog";

import { useAuth } from "@/context/authContext";
import { ButtonLink } from "@/styled/ButtonLink";
import { Button } from "@/styled/Button";

import styles from "./NavLinks.module.scss";

const openNavLinks = [
  { id: 1, text: "Directory", link: "/search" },
  { id: 2, text: "Merch", link: "/merch" },
  { id: 3, text: "PRO", link: "/pro" },
];

const NavLinks: FC = () => {
  const { user, loading, signOutUser } = useAuth();
  const router = useRouter();
  const [showSignOut, setShowSignOut] = useState(false);

  const cancelRef = useRef() as React.MutableRefObject<HTMLButtonElement>;

  const open = () => setShowSignOut(true);
  const close = () => setShowSignOut(false);

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
              onClick={open}
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
      {showSignOut && (
        <AlertDialog
          leastDestructiveRef={cancelRef}
          className={styles.dialog}
          onDismiss={close}
        >
          <AlertDialogLabel className={styles.label}>
            Please Confirm
          </AlertDialogLabel>

          <AlertDialogDescription>
            Are you sure you want to sign out?
          </AlertDialogDescription>

          <div className={styles.actionButtons}>
            <Button variant="text" ref={cancelRef} onClick={close}>
              No, go back
            </Button>
            <Button variant="outlined" onClick={signOutUser}>
              Yes, Sign me out
            </Button>
          </div>
        </AlertDialog>
      )}
    </>
  );
};

export default NavLinks;
