import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Tooltip } from "@nextui-org/tooltip";
import { Heart, ThumbsUp } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const PostCard = () => {
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
                src={"/MYSELF2.jpg"}
                width={60}
                height={60}
                radius="full"
                alt="profile_img"
                className="aspect-square p-1"
              />
              <p className="">Sourav</p>
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
                <p className="">1,00,000</p>
              </div>
              {/* <DeletePostModal
              isOpen={isOpen}
              onOpenChange={onOpenChange}
            /> */}
            </div>
          </CardHeader>
          <CardBody>
            <div className="flex flex-col gap-4">
              <p className="text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Numquam aliquam eum quia aspernatur reprehenderit provident rem
                non sunt expedita ducimus.
              </p>
              <Image
                src={"/mercedes.jpg"}
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
