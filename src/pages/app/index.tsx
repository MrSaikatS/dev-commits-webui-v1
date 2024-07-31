import PostCreate from "@/components/modals/PostCreate";
import FeedDisplayCard from "@/components/sections/FeedDisplayCard";

const index = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <PostCreate />
      <FeedDisplayCard />
    </div>
  );
};

export default index;
