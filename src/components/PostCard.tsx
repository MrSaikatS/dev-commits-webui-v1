import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";

import Image from "next/image";
import { useDisclosure } from "@nextui-org/modal";
import DeletePostModal from "./modals/DeletePostModal";

import { Heart } from "lucide-react";
import { likeatom } from "@/utils/atoms/darkAtoms";
import { useAtom } from "jotai";

const PostCard = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [like, setLike] = useAtom(likeatom);

  return (
    <>
      <div className="flex flex-col space-y-4 rounded-xl border-2 border-slate-200 p-4">
        <div className="flex w-full flex-col gap-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Avatar
                size="md"
                src="/MYSELF2.jpg"
              />
              <p className="">Priyangsu Banik</p>
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
            <p className="">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
              aliquam eum quia aspernatur reprehenderit provident rem non sunt
              expedita ducimus.
            </p>
            <Image
              src={"/mercedes.jpg"}
              width={300}
              height={300}
              alt="post_img"
              className="w-full rounded-md"
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
      </div>
    </>
  );
};

export default PostCard;
