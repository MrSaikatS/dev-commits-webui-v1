import {
  deleteLikesByPostID,
  getLikesByPostID,
  postLike,
} from "@/utlis/apiQueries";
import { Button } from "@nextui-org/button";
import { useQueryClient } from "@tanstack/react-query";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

const LikeButton = ({ postid }: { postid: string }) => {
  const [isLiked, setIsLiked] = useState(false);
  const queryClient = useQueryClient();

  const sendLike = async () => {
    if (!isLiked) {
      await postLike(postid);
      setIsLiked(true);
      queryClient.invalidateQueries({
        queryKey: ["allposts"],
      });
    }
  };
  const deleteLike = async () => {
    if (isLiked) {
      await deleteLikesByPostID(postid);

      setIsLiked(false);
      queryClient.invalidateQueries({
        queryKey: ["allposts"],
      });
    }
  };

  useEffect(() => {
    const getLikesforThisPost = async () => {
      const likesOnThisPost = await getLikesByPostID(postid);

      if (likesOnThisPost !== undefined) {
        if (likesOnThisPost.data.length === 1) {
          setIsLiked(true);
        }
      }
    };

    getLikesforThisPost();
  }, [postid]);
  return (
    <>
      <div className="flex ml-4 justify-center items-center gap-3">
        {isLiked ? (
          <Button onPress={deleteLike} size="md" variant="light" isIconOnly>
            <Heart fill="red" className="border-background" />
          </Button>
        ) : (
          <Button onPress={sendLike} size="md" variant="light" isIconOnly>
            <Heart className="border-background" />
          </Button>
        )}
      </div>
    </>
  );
};

export default LikeButton;
