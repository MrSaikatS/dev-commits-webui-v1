// import { Avatar } from "@nextui-org/avatar";
// import { Button } from "@nextui-org/button";

// import Image from "next/image";
// import { useDisclosure } from "@nextui-org/modal";
// import DeletePostModal from "./modals/DeletePostModal";

// import { Heart } from "lucide-react";
import { likeatom } from "@/utils/atoms/darkAtoms";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { useAtom } from "jotai";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";

import { Heart } from "lucide-react";

const PostCard = () => {
  const [like, setLike] = useAtom(likeatom);

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
              <p className="">sourav</p>
            </div>

            <div className="">
              <div className="flex w-full items-center gap-2">
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
      {/* <div className="mx-auto flex max-w-[305px] flex-col space-y-4 rounded-xl border-2 border-slate-200 p-4 sm:max-w-[400px]">
        <div className="flex w-full flex-col gap-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Avatar
                size="md"
                src="/MYSELF2.jpg"
              />
              <p className="text-sm">Priyangsu Banik</p>
            </div>
            <Button
              onPress={onOpen}
              variant="light"
              color="danger">
              Delete Post
            </Button>
            <DeletePostModal
              isOpen={isOpen}
              onOpenChange={onOpenChange}
            />
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
              aliquam eum quia aspernatur reprehenderit provident rem non sunt
              expedita ducimus.
            </p>
            <Image
              src={mercedesImg}
              width={300}
              height={300}
              alt="post_img"
              className="aspect-video w-full rounded-md"
            />
          </div>
          <div className="flex w-full items-center gap-2">
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
            <p className="">1,00,000,0000</p>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default PostCard;
