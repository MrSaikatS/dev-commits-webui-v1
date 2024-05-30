import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { Heart } from "lucide-react";
import Image from "next/image";
import { useDisclosure } from "@nextui-org/modal";
import DeletePostModal from "./modals/DeletePostModal";

const PostCard = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div className="space-y-4 flex flex-col border-2 border-slate-200 rounded-lg p-4">
        <div className="w-full flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Avatar size="md" src="/MYSELF2.jpg" />
              <p className="">Priyangsu Banik</p>
            </div>
            <Button onPress={onOpen} variant="light" color="danger">
              Delete Post
            </Button>
            <DeletePostModal isOpen={isOpen} onOpenChange={onOpenChange} />
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
          <div className="w-full flex items-center gap-2">
            <Heart />
            <p className="">1,00,000,0000</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostCard;
