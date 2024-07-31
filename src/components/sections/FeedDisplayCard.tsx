import { getAllPosts } from "@/utlis/tanstackqueries";
import UserFeedCard from "../cards/UserFeedCard";

const FeedDisplayCard = () => {
  const { data } = getAllPosts();

  return (
    <>
      <div className="">
        {data?.map((items) => {
          return <UserFeedCard key={items.id} detail={items} />;
        })}
      </div>
    </>
  );
};

export default FeedDisplayCard;
