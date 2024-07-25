import { Button } from "@nextui-org/button";
import { Heart } from "lucide-react";

const LikeButton = () => {
  return (
    <>
      <div className="">
        <Button
          variant="ghost"
          color="danger"
          isIconOnly>
          <Heart />
        </Button>
      </div>
    </>
  );
};

export default LikeButton;
