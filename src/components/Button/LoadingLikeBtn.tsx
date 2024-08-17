import { Button } from "@nextui-org/button";
import { Skeleton } from "@nextui-org/skeleton";
import { Heart } from "lucide-react";

const LoadingLikeBtn = () => {
  return (
    <>
      <div className="flex items-start ml-1">
        <Skeleton className="rounded-xl">
          <Button size="md" variant="solid" isIconOnly>
            <Heart />
          </Button>
        </Skeleton>
      </div>
    </>
  );
};

export default LoadingLikeBtn;
