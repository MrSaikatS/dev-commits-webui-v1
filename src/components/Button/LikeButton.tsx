import { Button } from "@nextui-org/button";
import { Heart } from "lucide-react";
const LikeButton = () => {
  return (
    <>
      <div className="flex ml-4 justify-center items-center gap-3">
        <Button size="md" variant="solid" isIconOnly>
          <Heart />
        </Button>
        User like
      </div>
    </>
  );
};

export default LikeButton;
