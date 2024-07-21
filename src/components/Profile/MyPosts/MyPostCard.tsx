import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Trash2 } from "lucide-react";

const MyPostCard = () => {
  return (
    <>
      <Card className="w-[320px]">
        <CardBody className="">
          <div className="flex justify-between">
            <div className="flex items-center gap-1">
              <Image
                src={"https://i.pravatar.cc/150?u=a04258114e29026708c"}
                width={50}
                height={50}
                radius="full"
                alt="profile_img"
                className="aspect-square p-1"
              />
              <p className="font-bold">Priyangsu Banik</p>
            </div>
            <Button
              variant="ghost"
              color="danger"
              isIconOnly>
              <Trash2 color="red" />
            </Button>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
              aliquam eum quia aspernatur reprehenderit provident rem non sunt
              expedita ducimus.
            </p>

            <Image
              src={"https://i.pravatar.cc/150?u=a04258114e29026708c"}
              width={300}
              height={300}
              alt="post_img"
              className="aspect-video w-full rounded-md"
            />
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default MyPostCard;
