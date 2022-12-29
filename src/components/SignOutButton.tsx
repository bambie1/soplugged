import { FC, useRef, useState } from "react";
import { signOut } from "next-auth/react";

import ConfirmModal from "./ConfirmModal";

const SignOutButton: FC = () => {
  const [showSignOut, setShowSignOut] = useState(false);

  const cancelRef = useRef() as React.MutableRefObject<HTMLButtonElement>;

  const open = () => setShowSignOut(true);
  const close = () => setShowSignOut(false);

  const handleSignOut = () => {
    signOut();
  };

  return (
    <>
      <button
        onClick={open}
        className="group inline-flex items-center gap-2 border-b border-transparent transition duration-200 hover:border-red-700 hover:text-red-700 lg:ml-4 lg:text-lg"
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
        <ConfirmModal
          cancelRef={cancelRef}
          onDismiss={close}
          handleSuccess={handleSignOut}
          description="Are you sure you want to sign out?"
          successTitle="Yes, Sign me out"
        />
      )}
    </>
  );
};

export default SignOutButton;