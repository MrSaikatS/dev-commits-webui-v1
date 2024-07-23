import LoadingMyPostCard from "./LoadingMyPostCard";
import MyPostCard from "./MyPostCard";

const DisplayMyPosts = () => {
  return (
    <>
      <div className="grid grid-cols-1 place-items-center gap-6 md:grid-cols-2">
        <MyPostCard />
        <MyPostCard />
        <MyPostCard />
        <LoadingMyPostCard />
        <MyPostCard />
      </div>
    </>
  );
};

export default DisplayMyPosts;
