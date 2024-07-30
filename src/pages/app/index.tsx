import UserFeedCard from "@/components/cards/UserFeedCard";
import PostCreate from "@/components/modals/PostCreate";

const index = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <PostCreate />
      <UserFeedCard />
      <UserFeedCard />
      <UserFeedCard />
    </div>
  );
};

export default index;
