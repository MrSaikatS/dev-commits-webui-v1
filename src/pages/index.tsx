import PostUpload from "@/components/Button/PostUpload";

import LoadingFeedCard from "@/components/Cards/LoadingFeedCard";
import UserFeedCard from "@/components/Cards/UserFeedCard";
import { getPosts } from "@/utlis/apiQueries";
import { PostType } from "@/utlis/types/PostType";
import { useQuery } from "@tanstack/react-query";

const index = () => {
  const { data, isLoading, isFetching, isSuccess, isFetched } = useQuery({
    queryKey: ["allposts"],
    queryFn: async () => {
      const response = await getPosts();

      if (response !== undefined) {
        return response.json<PostType>();
      }
    },
    refetchOnWindowFocus: false,
  });

  return (
    <>
      <div className="container mx-auto max-w-screen-xl p-6">
        <div className="grid grid-cols-1 place-items-center gap-6 md:grid-cols-2 lg:grid-cols-3">
          <PostUpload />
          {/* {(isLoading || isFetching) && (
            <>
              <LoadingFeedCard />
              <LoadingFeedCard />
              <LoadingFeedCard />
              <LoadingFeedCard />
            </>
          )} */}
          {isSuccess && isFetched && (
            <>
              {data?.data.map((items) => {
                return <UserFeedCard key={items.id} info={items} />;
              })}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default index;
