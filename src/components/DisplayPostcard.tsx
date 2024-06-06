import PostCard from "./PostCard";

const DisplayPostcard = () => {
  return (
    <>
      <div className="mx-auto w-full space-y-4">
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </>
  );
};

export default DisplayPostcard;
