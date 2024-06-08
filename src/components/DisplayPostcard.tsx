import PostCard from "./PostCard";

const DisplayPostcard = () => {
  return (
    <>
      <div className="mx-auto mb-4 mt-4 w-full space-y-8">
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </>
  );
};

export default DisplayPostcard;
