import { useQuery } from "@tanstack/react-query";
import PostCard from "./PostCard";
import PostCardSkeleton from "./PostCardSkeleton";
import { sdk } from "@/utils/sdk";
import { readItems } from "@directus/sdk";

const DisplayPostcard = () => {
  const { data, isFetching, isLoading, isFetched, isSuccess } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await sdk.request(
        readItems("posts", {
          fields: ["*", {}],
        }),
      );

      const data = res;

      return data;
    },
  });

  if (isFetching || isLoading) {
    return (
      <>
        <div className="grid grid-cols-1 place-items-center gap-6 md:grid-cols-2">
          <PostCardSkeleton />
          <PostCardSkeleton />
          <PostCardSkeleton />
          <PostCardSkeleton />
        </div>
      </>
    );
  }

  if (isFetched && isSuccess) {
    console.log(data);

    return (
      <>
        <div className="grid grid-cols-1 place-items-center gap-6 md:grid-cols-2">
          {data.map((item) => {
            return (
              <PostCard
                key={item.id}
                info={item}
              />
            );
          })}
        </div>
      </>
    );
  }
};

export default DisplayPostcard;
