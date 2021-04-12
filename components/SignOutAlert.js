import React from "react";
import {
  Button,
  DialogContentText,
  DialogContent,
  DialogActions,
  Dialog,
  DialogTitle,
} from "./mui-components";
import firebase from "firebase/app";
import { useRouter } from "next/router";

export default function AlertDialog({ handleClose }) {
  const router = useRouter();

  const handleSignOut = async () => {
    await firebase.auth().signOut();
    handleClose();
    router.reload();
  };
  return (
    <Dialog
      open={true}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Sign out from SoPlugged?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Please confirm sign-out
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">
          Cancel
        </Button>
        <Button
          onClick={handleSignOut}
          color="secondary"
          variant="outlined"
          autoFocus
        >
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
}
