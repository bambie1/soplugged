import { FC } from "react";

import { ProfileForm } from "@/components/ProfileForm";
import { useAuth } from "@/context/authContext";
import { IUser } from "@/types/User";

interface Props {
  dbUser: IUser;
}

const ProfilePage: FC<Props> = ({ dbUser }) => {
  const { user } = useAuth();
  const userName = dbUser.full_name || user?.displayName;

  return (
    <>
      <h1 className="center">profile</h1>
      <ProfileForm userName={userName} email={user.email} />
    </>
  );
};

export default ProfilePage;
