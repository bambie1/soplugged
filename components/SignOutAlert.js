import React from "react";
import {
  Button,
  DialogContentText,
  DialogContent,
  DialogActions,
  Dialog,
  DialogTitle,
} from "./mui-components";

export default function AlertDialog({ handleClose, signOut }) {
  const handleSignOut = async () => {
    signOut();
    handleClose();
    window.location.href = "/join";
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
