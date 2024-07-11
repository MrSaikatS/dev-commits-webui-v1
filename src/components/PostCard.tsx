import { Post } from "@/utils/types";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Tooltip } from "@nextui-org/tooltip";
import { Heart, ThumbsUp } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const PostCard = ({ info }: { info: Post }) => {
  const [like, setLike] = useState(false);

  useEffect(() => {
    if (like === true) {
      toast.info("Like Add Succesfully.", {
        icon: (
          <ThumbsUp
            size={20}
            color="blue"
          />
        ),
      });
    }
  }, [like]);

  return (
    <>
      <div className="">
        <Card className="w-[320px]">
          <CardHeader className="items-center justify-between">
            <div className="flex items-center gap-2">
              <Image
                src={
                  info.user_created?.avatar === null
                    ? ""
                    : `http://localhost:8055/assets/${info.user_created?.avatar}`
                }
                width={60}
                height={60}
                radius="full"
                alt="profile_img"
                className="aspect-square p-1"
              />
              <p className="">{info.user_created?.first_name}</p>
            </div>

            <div className="">
              <div className="flex w-full items-center gap-2">
                <Tooltip
                  content="Like"
                  color="primary"
                  shadow="md"
                  radius="lg"
                  showArrow={true}>
                  <button
                    className="focus:outline-none"
                    type="button"
                    onClick={() => setLike(!like)}>
                    {like ? (
                      <Heart
                        color="red"
                        fill="red"
                      />
                    ) : (
                      <Heart />
                    )}
                  </button>
                </Tooltip>
                <p className="">{info.likes?.length}+</p>
              </div>
              {/* <DeletePostModal
              isOpen={isOpen}
              onOpenChange={onOpenChange}
            /> */}
            </div>
          </CardHeader>
          <CardBody>
            <div className="flex flex-col gap-4">
              <p className="text-sm">{info.caption}</p>
              <Image
                src={`http://localhost:8055/assets/${info.img}`}
                width={300}
                height={300}
                alt="post_img"
                className="aspect-video w-full rounded-md"
              />
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default PostCard;
