import LoadingProfile from "@/components/Profile/LoadingProfile";
import DisplayMyPosts from "@/components/Profile/MyPosts/DisplayMyPosts";
import Profile from "@/components/Profile/Profile";
import Fabi from "@/components/Home/Fabi";

const profile = () => {
  return (
    <>
      <div className="mx-auto mt-3 space-y-4 p-5">
        <Profile />
        <LoadingProfile />
        <DisplayMyPosts />
        <Fabi />
      </div>
    </>
  );
};

export default profile;
