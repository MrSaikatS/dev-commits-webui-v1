import { env } from "@/utlis/env";
import { UserType } from "@/utlis/types/UserType";
import { useQuery } from "@tanstack/react-query";
import ky from "ky";

const FeedPostContainer = () => {
  const { data } = useQuery({
    queryKey: ["me"],
    queryFn: async () => {
      const res = await ky.get("me", {
        prefixUrl: `${env.NEXT_PUBLIC_API}/users`,
        credentials: "include",
        mode: "cors",
      });

      const data = res.json<UserType>();

      return data;
    },
  });

  console.log(data);

  return (
    <>
      <div className="grid place-items-center h-screen font-bold text-5xl">
        Welcome, {data?.data.first_name} {data?.data.last_name}
      </div>
    </>
  );
};

export default FeedPostContainer;
