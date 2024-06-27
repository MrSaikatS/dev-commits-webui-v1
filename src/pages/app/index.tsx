import DisplayPostcard from "@/components/DisplayPostcard";
import { sdk } from "@/utils/sdk";
import { readItems } from "@directus/sdk";
import { useQuery } from "@tanstack/react-query";

const index = () => {
  const {} = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const all_posts = await sdk.request(readItems("posts"));

      console.log(all_posts);

      return all_posts;
    },
  });
  return (
    <>
      <div className="mx-auto mt-3 space-y-4 p-5">
        <DisplayPostcard />
      </div>
    </>
  );
};

export default index;
