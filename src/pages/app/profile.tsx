import UserProfileCard from "@/components/cards/UserProfileCard";
import UserProfile from "@/components/sections/UserProfile";

const profile = () => {
  return (
    <div className="flex flex-col items-center">
      <UserProfile />
      <UserProfileCard />
      <UserProfileCard />
      <UserProfileCard />
    </div>
  );
};

export default profile;
