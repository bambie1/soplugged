import { useRouter } from "next/router";
import { FC, useRef, useState } from "react";
import {
  AlertDialog,
  AlertDialogLabel,
  AlertDialogDescription,
} from "@reach/alert-dialog";

import { useAuth } from "@/context/authContext";
import { Button } from "@/styled/Button";

import styles from "./SignOutButton.module.scss";

const SignOutButton: FC = () => {
  const router = useRouter();
  const { signOutUser } = useAuth();
  const [showSignOut, setShowSignOut] = useState(false);

  const cancelRef = useRef() as React.MutableRefObject<HTMLButtonElement>;

  const open = () => setShowSignOut(true);
  const close = () => setShowSignOut(false);

  const handleSignOut = () => {
    signOutUser();
    router.reload();
  };

  return (
    <>
      <button
        onClick={open}
        className="group hidden items-center gap-2 border-b border-transparent transition duration-200 hover:border-red-700 hover:text-red-700 md:ml-4 md:inline-flex md:items-center lg:text-lg"
      >
        Log out
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
        </span>
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
            <Button variant="outlined" onClick={handleSignOut}>
              Yes, Sign me out
            </Button>
          </div>
        </AlertDialog>
      )}
    </>
  );
};

export default SignOutButton;
