import { FC } from "react";

import { Input } from "@/styled/Input";
import { Button } from "@/styled/Button";

import styles from "./ProfileForm.module.scss";
import Avatar from "../Avatar/Avatar";

interface Props {
  userName: string;
  email: string;
}

const ProfileForm: FC<Props> = ({ userName, email }) => {
  return (
    <form className={styles.paper}>
      <Avatar name={userName} />
      <p>{email}</p>
      <Input label="Display Name" defaultValue={userName} />
      <Button disabled>Update</Button>
    </form>
  );
};

export default ProfileForm;
