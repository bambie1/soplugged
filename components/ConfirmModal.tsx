import { FC, MutableRefObject, Ref } from "react";
import {
  AlertDialog,
  AlertDialogLabel,
  AlertDialogDescription,
} from "@reach/alert-dialog";

import { Button } from "@/styled/Button";

interface Props {
  cancelRef: MutableRefObject<HTMLButtonElement>;
  onDismiss: () => void;
  handleSuccess: () => void;
  description: string;
  successTitle: string;
}

const ConfirmModal: FC<Props> = ({
  cancelRef,
  onDismiss,
  handleSuccess,
  description,
  successTitle,
}) => {
  return (
    <>
      <AlertDialog
        leastDestructiveRef={cancelRef}
        className="flex w-[90%] max-w-lg flex-col gap-2 self-baseline rounded-lg"
        onDismiss={onDismiss}
      >
        <AlertDialogLabel className="text-xl font-bold text-primary">
          Please Confirm
        </AlertDialogLabel>

        <AlertDialogDescription>{description}</AlertDialogDescription>

        <div className="mt-4 flex flex-wrap justify-end gap-x-3 gap-y-4 md:gap-x-12">
          <Button variant="text" ref={cancelRef} onClick={onDismiss}>
            No, go back
          </Button>
          <Button variant="outlined" onClick={handleSuccess}>
            {successTitle}
          </Button>
        </div>
      </AlertDialog>
    </>
  );
};

export default ConfirmModal;
