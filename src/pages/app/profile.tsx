import AccountEdit from "@/components/AccountEdit";
import Profile from "@/components/Profile";

import ProfileEdit from "@/components/ProfileEdit";

const profile = () => {
  return (
    <>
      <div className="">
        <Profile />
        <AccountEdit />
        <ProfileEdit />
      </div>
    </>
  );
};

export default profile;
