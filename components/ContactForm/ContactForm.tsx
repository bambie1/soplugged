import { useAuth } from "@/context/authContext";
import { Button } from "@/styled/Button";
import { Input } from "@/styled/Input";
import TextArea from "@/styled/TextArea/TextArea";

import styles from "./ContactForm.module.scss";

const ContactForm = () => {
  const { user } = useAuth();
  return (
    <form className={styles.form}>
      <Input label="Email address" value={user?.email || ""} disabled />
      <TextArea
        placeholder="Hi there! I would like to employ your services"
        label="Message"
        rows={7}
      />
      <Button type="submit">Send Message</Button>
    </form>
  );
};

export default ContactForm;
