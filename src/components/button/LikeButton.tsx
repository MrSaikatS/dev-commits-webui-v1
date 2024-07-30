import { Button } from "@nextui-org/button";
import { Heart } from "lucide-react";

const LikeButton = () => {
  return (
    <div>
      <Button isIconOnly className="focus:outline-none" type="button">
        <Heart
          className="text-foreground"
          // color="red"
          fill="red"
        />
      </Button>
    </div>
  );
};

export default LikeButton;
