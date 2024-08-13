import LoadingFeedCard from "@/components/Cards/LoadingFeedCard";
import UserFeedCard from "@/components/Cards/UserFeedCard";

import NavTwo from "@/components/NavTwo";

const index = () => {
  return (
    <>
      <NavTwo />
      <div className="container mx-auto max-w-screen-xl p-6">
        <div className="grid grid-cols-1 place-items-center gap-6 md:grid-cols-2 lg:grid-cols-3">
          <UserFeedCard />
          <UserFeedCard />
          <UserFeedCard />
          <UserFeedCard />
          <LoadingFeedCard />
        </div>
      </div>
    </>
  );
};

export default index;
