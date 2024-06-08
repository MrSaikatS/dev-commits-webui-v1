import PostCard from "./PostCard";

const DisplayPostcard = () => {
  return (
    <>
      <div className="grid grid-cols-1 place-items-center gap-6 md:grid-cols-2">
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </>
  );
};

export default DisplayPostcard;
