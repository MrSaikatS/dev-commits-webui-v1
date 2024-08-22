import { postLike } from "@/utlis/apiQueries";
import { Button } from "@nextui-org/button";
import { useQueryClient } from "@tanstack/react-query";
import { Heart } from "lucide-react";

const LikeButton = ({ postid }: { postid: string }) => {
  const queryClient = useQueryClient();

  const sendLike = async () => {
    await postLike(postid);
    queryClient.refetchQueries({
      queryKey: ["allposts"],
    });
  };

  return (
    <>
      <div className="flex ml-4 justify-center items-center gap-3">
        <Button onPress={sendLike} size="md" variant="light" isIconOnly>
          <Heart />
        </Button>
      </div>
    </>
  );
};

export default LikeButton;
