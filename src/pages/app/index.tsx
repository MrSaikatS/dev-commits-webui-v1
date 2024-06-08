import CreatePostForm from "@/components/CreatePostForm";
import DisplayPostcard from "@/components/DisplayPostcard";
import { Button } from "@nextui-org/button";
// import FeedCard from "@/components/FeedCard";

const index = () => {
  return (
    <>
      {/* <div className="gap-4 space-y-4 py-5 sm:grid sm:grid-cols-2 lg:grid-cols-3">
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
      </div> */}

      <div className="mx-auto mt-3 space-y-4 p-5">
        <CreatePostForm />
        <DisplayPostcard />
      </div>
    </>
  );
};

export default index;
