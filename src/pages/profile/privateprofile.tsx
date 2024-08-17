import LoadingProfileCrad from "@/components/Cards/LoadingProfileCrad";
import UserProfileCard from "@/components/Cards/UserProfileCard";
import UserNav from "@/components/UserNav";
import { getCurrentUserPosts } from "@/utlis/apiQueries";
import { PostType } from "@/utlis/types/PostType";
import { useQuery } from "@tanstack/react-query";

const privateprofile = () => {
  const { data, isLoading, isFetching, isSuccess, isFetched } = useQuery({
    queryKey: ["getMePost"],
    queryFn: async () => {
      const res = await getCurrentUserPosts();
      return res?.json<PostType>();
    },
  });

  if (isLoading || isFetching) {
    return (
      <>
        <LoadingProfileCrad />
      </>
    );
  }

  if (isFetched && isSuccess) {
    return (
      <>
        <UserNav />

        <div className="container mx-auto max-w-screen-xl p-6">
          <div className="grid grid-cols-1 place-items-center gap-6 md:grid-cols-2 lg:grid-cols-3">
            {data?.data.map((items) => {
              return <UserProfileCard key={items.id} info={items} />;
            })}
          </div>
        </div>
      </>
    );
  }
};
export default privateprofile;
