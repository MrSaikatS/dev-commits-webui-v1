import { Button } from "@nextui-org/button";
import { Heart } from "lucide-react";
const LikeButton = () => {
  return (
    <>
      <div className="flex items-start">
        <Button size="md" variant="solid" isIconOnly>
          <Heart />
        </Button>
      </div>
    </>
  );
};

export default LikeButton;
