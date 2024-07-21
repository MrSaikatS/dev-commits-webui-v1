import DisplayMyPosts from "@/components/Profile/MyPosts/DisplayMyPosts";
import MyPostCard from "@/components/Profile/MyPosts/MyPostCard";
import Profile from "@/components/Profile/Profile";

const profile = () => {
  return (
    <>
      <div className="mx-auto mt-3 space-y-4 p-5">
        <Profile />
        <DisplayMyPosts />
      </div>
    </>
  );
};

export default profile;
