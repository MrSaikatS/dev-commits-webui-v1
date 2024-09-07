import PublicUserPostCard from "@/components/Cards/PublicUserPostCard";
import UserProfile from "@/components/Cards/UserProfile";
import { publicProfile } from "@/utlis/apiQueries";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

const public_id = () => {
  const { query } = useRouter();

  const id = query.public_id as string | undefined;

  console.log(id);

  const { data, isLoading, isFetched, isSuccess } = useQuery({
    queryKey: ["publicUser"],
    queryFn: async () => {
      const res = await publicProfile(id);

      if (res !== undefined) {
        return res;
      }
    },

    refetchOnWindowFocus: false,

    enabled: !!id,
  });

  console.log(data);
  if (isLoading) {
    return (
      <>
        <div className="">Loading........</div>
      </>
    );
  }

  if (isFetched && isSuccess && data) {
    return (
      <>
        <UserProfile info={data} />
        <div className="container mx-auto max-w-screen-xl p-6">
          <div className="grid grid-cols-1 place-items-center gap-6 md:grid-cols-2 lg:grid-cols-3">
            <PublicUserPostCard detail={data} />
          </div>
        </div>
      </>
    );
  }
};
export default public_id;
