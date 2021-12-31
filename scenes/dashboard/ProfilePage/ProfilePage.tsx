import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { useSWRConfig } from "swr";

import { Avatar } from "@/components/Avatar";
import { useAuth } from "@/context/authContext";
import { IUser } from "@/types/User";
import { Input } from "@/styled/Input";
import { Button } from "@/styled/Button";
import { editDBUser } from "@/utils/dbUser";

import styles from "./ProfilePage.module.scss";

interface IFormInput {
  full_name: string;
}

interface Props {
  dbUser: IUser | null;
}

const ProfilePage: FC<Props> = ({ dbUser }) => {
  const { mutate } = useSWRConfig();
  const { user } = useAuth();
  const userName = dbUser?.full_name || user?.displayName;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const res = await editDBUser({ ...data, email: user.email });

    if (res?.ok) {
      toast.success("Profile updated successfully");
      mutate(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/user`);
    } else {
      toast.error("An error occurred");
    }
  };

  return (
    <>
      <h1 className="center">profile</h1>
      <form className={styles.paper} onSubmit={handleSubmit(onSubmit)}>
        <Avatar name={userName} />
        <p>{user.email}</p>
        <Input
          {...register("full_name", { required: true })}
          label="Display Name"
          defaultValue={userName}
        />
        <Button>Update</Button>
      </form>
    </>
  );
};

export default ProfilePage;
