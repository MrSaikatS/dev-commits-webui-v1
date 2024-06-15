import PostCard from "./PostCard";
import PostCardSkeleton from "./PostCardSkeleton";

const DisplayPostcard = () => {
  return (
    <>
      <div className="grid grid-cols-1 place-items-center gap-6 md:grid-cols-2">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCardSkeleton />
      </div>
    </>
  );
};

export default DisplayPostcard;
