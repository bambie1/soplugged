import { FC, useRef, useState } from "react";
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

import styles from "./SignOutButton.module.scss";

const SignOutButton: FC = () => {
  const { signOutUser } = useAuth();
  const [showSignOut, setShowSignOut] = useState(false);

  const cancelRef = useRef() as React.MutableRefObject<HTMLButtonElement>;

  const open = () => setShowSignOut(true);
  const close = () => setShowSignOut(false);

  return (
    <>
      <button title="Sign Out" onClick={open} className={styles.iconButton}>
        <FontAwesomeIcon icon={faSignOutAlt} />
      </button>
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

export default SignOutButton;
