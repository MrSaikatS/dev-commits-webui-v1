import { sdk } from "@/utils/sdk";
import { Post, PostLike } from "@/utils/types";
import { createItem, deleteItem } from "@directus/sdk";
import { Tooltip } from "@nextui-org/tooltip";
import { useQueryClient } from "@tanstack/react-query";
import { Heart } from "lucide-react";

const LikeBtn = ({ info, data }: { info: Post; data: PostLike[] }) => {
  const queryClient = useQueryClient();

  const toggleLikefunc = async () => {
    if (data.length === 1) {
      await sdk.request(deleteItem("post_likes", data[0].id));
    } else {
      await sdk.request(
        createItem("post_likes", {
          post_id: info.id as any,
        }),
      );
    }

    queryClient.refetchQueries({
      queryKey: ["likeStatus", info.id],
    });
    queryClient.refetchQueries({
      queryKey: ["posts"],
    });
  };
  return (
    <>
      <div className="flex w-full items-center gap-2">
        <Tooltip
          content="Like"
          color="primary"
          shadow="md"
          radius="lg"
          showArrow={true}>
          <button
            onClick={toggleLikefunc}
            className="focus:outline-none"
            type="button">
            {data.length === 1 ? (
              <Heart
                className="text-foreground"
                // color="red"
                fill="red"
              />
            ) : (
              <Heart />
            )}
          </button>
        </Tooltip>
        <p className="">{info.likes?.length}+</p>
      </div>
    </>
  );
};

export default LikeBtn;
