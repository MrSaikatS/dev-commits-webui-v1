import Fabi from "@/components/Home/Fabi";
import AllPostCard from "@/components/Profile/MyPosts/AllPostCard";
import LoadingMyPostCard from "@/components/Profile/MyPosts/LoadingMyPostCard";
const index = () => {
  return (
    <>
      <div className="mt-3 grid grid-cols-1 place-items-center gap-5 md:grid-cols-3">
        <AllPostCard />
        <AllPostCard />
        <AllPostCard />
        <LoadingMyPostCard />

        <Fabi />
      </div>
    </>
  );
};

export default index;
