import Button from "../../components/Button/Button";
import { useLogout } from "../../hooks/user/useLogout";
import { useUserInfo } from "../../hooks/user/useUserInfo";

import s from "./Profile.module.css";

interface UserInfoAttributeProps {
  name: string;
  value: string;
}

const UserInfoAttribute = ({ name, value }: UserInfoAttributeProps) => {
  return (
    <>
      <p className={s["name"]}>{name}</p>
      <p className={s["value"]}>{value}</p>
    </>
  );
};

const Profile = () => {
  const { data: userInfo } = useUserInfo();
  const { mutate } = useLogout();

  const onClick = () => {
    mutate();
  };

  return (
    <div className={s["profile-container"]}>
      <UserInfoAttribute name="Id" value={userInfo.pk} />
      <UserInfoAttribute name="Email" value={userInfo.email} />
      <UserInfoAttribute name="Nickname" value={userInfo.nickname} />
      <UserInfoAttribute
        name="Joined on"
        value={new Date(userInfo.created_at).toLocaleString()}
      />
      <Button onClick={onClick} className={s["logout-button"]}>
        Logout
      </Button>
    </div>
  );
};

export default Profile;
