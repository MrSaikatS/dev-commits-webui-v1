import LoadingProfile from "@/components/Profile/LoadingProfile";
import DisplayMyPosts from "@/components/Profile/MyPosts/DisplayMyPosts";
import Profile from "@/components/Profile/Profile";

const profile = () => {
  return (
    <>
      <div className="mx-auto mt-3 space-y-4 p-5">
        <Profile />
        <LoadingProfile />
        <DisplayMyPosts />
      </div>
    </>
  );
};

export default profile;
