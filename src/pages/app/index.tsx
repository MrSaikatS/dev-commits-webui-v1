import FeedCard from "@/components/FeedCard";

const index = () => {
  return (
    <>
      <div className="gap-4 space-y-4 py-5 sm:grid sm:grid-cols-2 lg:grid-cols-3">
        <FeedCard />
        <FeedCard />
        <FeedCard />
      </div>
    </>
  );
};

export default index;
