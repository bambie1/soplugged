import { FC, MutableRefObject, useState } from "react";
import {
  AlertDialog,
  AlertDialogLabel,
  AlertDialogDescription,
} from "@reach/alert-dialog";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";

import { Button } from "@/styled/Button";
import TextArea from "@/styled/TextArea/TextArea";

interface Props {
  cancelRef: MutableRefObject<HTMLButtonElement>;
  onDismiss: () => void;
}

const MessageModal: FC<Props> = ({ cancelRef, onDismiss }) => {
  const [message, setMessage] = useState("");
  const { data: session } = useSession();

  const handleSubmit = async () => {
    if (!session?.user?.email) return null;

    const userEmail = session.user.email;

    const email = {
      from: "hello@soplugged.com",
      to: "hello@soplugged.com",
      subject: `SoPlugged business needs help: ${userEmail}`,
      content: message,
      reply_to: userEmail,
    };

    await fetch("/api/sendEmail", {
      method: "POST",
      body: JSON.stringify({ email }),
    });

    setMessage("");
    onDismiss();

    toast.success("We've received your message, and will respond shortly");
  };

  return (
    <>
      <AlertDialog
        leastDestructiveRef={cancelRef}
        className="!mx-2 flex !w-auto max-w-lg flex-col gap-2 self-baseline rounded-lg !px-3 !py-4 sm:!mx-auto md:!p-8"
        onDismiss={onDismiss}
      >
        <AlertDialogLabel className="text-xl font-bold text-primary">
          Request help
        </AlertDialogLabel>

        <AlertDialogDescription className="mt-3 grid">
          <TextArea
            label="Message"
            name="userMessage"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </AlertDialogDescription>

        <div className="mt-4 flex flex-wrap justify-end gap-x-3 gap-y-4 md:gap-x-12">
          <Button variant="outlined" onClick={handleSubmit}>
            Send message
          </Button>
        </div>
      </AlertDialog>
    </>
  );
};

export default MessageModal;
